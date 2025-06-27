<script lang="ts">
  import ColorTheif from "colorthief/dist/color-thief.mjs";
  import { onMount } from "svelte";
  import songs from "./songs.json";

  // Local storage keys
  const STORAGE_KEY_CURRENT_TRACK = "lofi-widget-current-track";
  const STORAGE_KEY_PLAYED_TRACKS = "lofi-widget-played-tracks";
  const STORAGE_KEY_AVAILABLE_TRACKS = "lofi-widget-available-tracks";

  // Load initial state from local storage or use defaults
  function getStoredTrackIndex(): number {
    if (typeof window === "undefined") return 0; // SSR check

    const storedIndex = localStorage.getItem(STORAGE_KEY_CURRENT_TRACK);
    if (storedIndex !== null) {
      const index = parseInt(storedIndex, 10);
      return index >= 0 && index < songs.length ? index : 0;
    }
    return 0;
  }

  function getStoredPlayedIndices(): number[] {
    if (typeof window === "undefined") return []; // SSR check

    const storedIndices = localStorage.getItem(STORAGE_KEY_PLAYED_TRACKS);
    if (storedIndices !== null) {
      try {
        return JSON.parse(storedIndices);
      } catch (e) {
        return [];
      }
    }
    return [];
  }

  function getStoredAvailableIndices(): number[] {
    if (typeof window === "undefined")
      return Array.from({ length: songs.length }, (_, i) => i); // SSR check

    const storedIndices = localStorage.getItem(STORAGE_KEY_AVAILABLE_TRACKS);
    if (storedIndices !== null) {
      try {
        const parsed = JSON.parse(storedIndices);
        return parsed.length > 0
          ? parsed
          : Array.from({ length: songs.length }, (_, i) => i);
      } catch (e) {
        return Array.from({ length: songs.length }, (_, i) => i);
      }
    }
    return Array.from({ length: songs.length }, (_, i) => i);
  }

  // State variables
  let currentTrackIndex = getStoredTrackIndex();
  let isPlaying = false; // Always start paused on page load
  let player: any = null;
  let playerReady = false;
  let currentTrack = songs[currentTrackIndex];

  // Track history management
  let playedTrackIndices: number[] = getStoredPlayedIndices();
  let availableTrackIndices: number[] = getStoredAvailableIndices();

  // Save state to local storage
  function saveStateToLocalStorage() {
    if (typeof window === "undefined") return; // SSR check

    localStorage.setItem(
      STORAGE_KEY_CURRENT_TRACK,
      currentTrackIndex.toString()
    );
    localStorage.setItem(
      STORAGE_KEY_PLAYED_TRACKS,
      JSON.stringify(playedTrackIndices)
    );
    localStorage.setItem(
      STORAGE_KEY_AVAILABLE_TRACKS,
      JSON.stringify(availableTrackIndices)
    );
  }

  // Load YouTube IFrame API
  onMount(() => {
    // Create YouTube script tag if it doesn't exist
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);

      // Setup YouTube API ready callback
      window.onYouTubeIframeAPIReady = initializePlayer;
    } else {
      initializePlayer();
    }

    return () => {
      if (player) {
        player.destroy();
      }
    };
  });

  // Initialize YouTube player
  function initializePlayer() {
    player = new (window as any).YT.Player("youtube-player", {
      height: "0", // Hidden video
      width: "0", // Hidden video
      videoId: currentTrack.videoID,
      playerVars: {
        autoplay: 0,
        controls: 0,
        disablekb: 1,
        fs: 0,
        modestbranding: 1,
        rel: 0,
      },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
        onError: (event: any) => {
          // Handle error gracefully, e.g., skip to next track
          nextTrack();
        },
      },
    });
  }

  // Player event handlers
  function onPlayerReady() {
    playerReady = true;
  }

  function onPlayerStateChange(event: any) {
    // Update playing state based on player state
    isPlaying = event.data === window.YT.PlayerState.PLAYING;

    // Auto-play next track when current one ends
    if (event.data === window.YT.PlayerState.ENDED) {
      nextTrack();
    }

    // Save current track to local storage when state changes
    saveStateToLocalStorage();
  }

  // Player controls
  function togglePlayPause() {
    if (!playerReady) return;

    if (isPlaying) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }

    isPlaying = !isPlaying;
  }

  function nextTrack() {
    if (!playerReady) return;

    // Add current track to played list if not already there
    if (!playedTrackIndices.includes(currentTrackIndex)) {
      playedTrackIndices.push(currentTrackIndex);
    }

    // Remove current track from available tracks
    availableTrackIndices = availableTrackIndices.filter(
      (idx) => idx !== currentTrackIndex
    );

    // If all tracks have been played, reset available tracks
    if (availableTrackIndices.length === 0) {
      availableTrackIndices = Array.from(
        { length: songs.length },
        (_, i) => i
      );
      playedTrackIndices = [];
      console.log("All tracks played, resetting playlist");
    }

    // Select a random track from available tracks
    const randomIndex = Math.floor(
      Math.random() * availableTrackIndices.length
    );
    currentTrackIndex = availableTrackIndices[randomIndex];
    currentTrack = songs[currentTrackIndex];

    // Save state to local storage
    saveStateToLocalStorage();

    player.loadVideoById(currentTrack.videoID);
    if (isPlaying) {
      player.playVideo();
    }
  }

  function prevTrack() {
    if (!playerReady) return;

    // If we have played tracks, go back to the most recently played one
    if (playedTrackIndices.length > 0) {
      // Get the last played track
      const lastPlayedIndex = playedTrackIndices.pop();

      // Add current track back to available if not in played list
      if (
        !playedTrackIndices.includes(currentTrackIndex) &&
        !availableTrackIndices.includes(currentTrackIndex)
      ) {
        availableTrackIndices.push(currentTrackIndex);
      }

      // Set the current track to the last played (with type safety)
      if (lastPlayedIndex !== undefined) {
        currentTrackIndex = lastPlayedIndex;
        currentTrack = songs[currentTrackIndex];
      }

      // Save state to local storage
      saveStateToLocalStorage();

      player.loadVideoById(currentTrack.videoID);
      if (isPlaying) {
        player.playVideo();
      }
    } else {
      // If no history, just go to previous track in the list
      currentTrackIndex =
        (currentTrackIndex - 1 + songs.length) % songs.length;
      currentTrack = songs[currentTrackIndex];
      player.loadVideoById(currentTrack.videoID);
      if (isPlaying) {
        player.playVideo();
      }
    }
  }
  
      /**
     * Converts an RGB color value to HSL. Conversion formula
     * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
     * Assumes r, g, and b are contained in the set [0, 255] and
     * returns h, s, and l in the set [0, 1].
     *
     * @param   Number  r       The red color value
     * @param   Number  g       The green color value
     * @param   Number  b       The blue color value
     * @return  Array           The HSL representation
     */
    function rgbToHsl(r, g, b) {
      r /= 255, g /= 255, b /= 255;

      var max = Math.max(r, g, b), min = Math.min(r, g, b);
      var h, s, l = (max + min) / 2;

      if (max == min) {
        h = s = 0; // achromatic
      } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
          case r: h = (g - b) / d + (g < b ? 6 : 0); break;
          case g: h = (b - r) / d + 2; break;
          case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
      }

      return [ h * 100, s * 100, l * 100];
    }

  $: backgroundColor = `linear-gradient(
    hsl(0 0 20) 0%,
    hsl(0 0 0) 100%
  )`;
  const onLoadThumbnail = (event: Event) => {
    if (typeof window === "undefined") return; // SSR check
    const colorThief = new ColorTheif();
    const img = event.target as HTMLImageElement;
    const color = colorThief.getColor(img);
    const hslColor = rgbToHsl(color[0], color[1], color[2]);
    backgroundColor = `linear-gradient(hsl(${hslColor.join(" ")}) 0%, hsl(${hslColor[0]} ${hslColor[1]} ${hslColor[2] * 0.2}) 100%)`;
  };

  $: imageUrl = `https://i.ytimg.com/vi/${currentTrack.videoID}/mqdefault.jpg`;
</script>

<div
  class="player rounded-2xl h-60 flex flex-col justify-center overflow-hidden relative z-10"
  id="lofi-player"
  style="--background: {backgroundColor};"
>
  <div id="youtube-player" class="hidden"></div>
  <div class="absolute top-4 right-4 z-20">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 text-white/15"
      viewBox="0 0 24 24"
      ><path
        fill="currentColor"
        d="M12 2.25a.75.75 0 0 0-.75.75v11.26a4.25 4.25 0 1 0 1.486 2.888A1 1 0 0 0 12.75 17V7.75H18a2.75 2.75 0 1 0 0-5.5z"
      /></svg
    >
  </div>
  <div class="flex items-center gap-4 px-2 z-20">
    <img
      height={112}
      width={112}
      class="h-28 w-28 rounded-[14px] object-cover shadow-sm"
      src={imageUrl}
      alt={currentTrack.title}
      on:load={onLoadThumbnail}
      crossorigin="anonymous"
    />

    <div class="overflow-hidden flex-1">
      <p class="text-sm text-center font-semibold text-white/90 truncate mb-3">
        {currentTrack.title}
      </p>
      <div class="flex justify-between items-center px-4">
        <button
          class="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
          on:click={prevTrack}
          aria-label="Previous track"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-white"
            viewBox="0 0 24 24"
            ><path
              fill="currentColor"
              d="M6.75 7a.75.75 0 0 0-1.5 0v10a.75.75 0 0 0 1.5 0zm3.102 5.66a.834.834 0 0 1 0-1.32a25 25 0 0 1 6.935-3.787l.466-.165a.944.944 0 0 1 1.243.772a29.8 29.8 0 0 1 0 7.68a.944.944 0 0 1-1.243.772l-.466-.165a25 25 0 0 1-6.935-3.788"
            /></svg
          >
        </button>

        <button
          on:click={togglePlayPause}
          class="cursor-pointer"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {#if isPlaying}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-white"
              viewBox="0 0 24 24"
              ><path
                fill="currentColor"
                d="M17.276 5.47c.435.16.724.575.724 1.039V17.49c0 .464-.29.879-.724 1.039a3.7 3.7 0 0 1-2.552 0A1.11 1.11 0 0 1 14 17.491V6.51c0-.464.29-.879.724-1.04a3.7 3.7 0 0 1 2.552 0m-8 0c.435.16.724.575.724 1.039V17.49c0 .464-.29.879-.724 1.039a3.7 3.7 0 0 1-2.552 0A1.11 1.11 0 0 1 6 17.491V6.51c0-.464.29-.879.724-1.04a3.7 3.7 0 0 1 2.552 0"
              /></svg
            >
          {:else}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-white"
              viewBox="0 0 24 24"
              ><path
                fill="currentColor"
                d="M19.266 13.516a1.917 1.917 0 0 0 0-3.032A35.8 35.8 0 0 0 9.35 5.068l-.653-.232c-1.248-.443-2.567.401-2.736 1.69a42.5 42.5 0 0 0 0 10.948c.17 1.289 1.488 2.133 2.736 1.69l.653-.232a35.8 35.8 0 0 0 9.916-5.416"
              /></svg
            >
          {/if}
        </button>

        <button
          class="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
          on:click={nextTrack}
          aria-label="Next track"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-white"
            viewBox="0 0 24 24"
            ><path
              fill="currentColor"
              d="M18.75 7a.75.75 0 0 0-1.5 0v10a.75.75 0 0 0 1.5 0zm-4.296 3.945c.69.534.69 1.576 0 2.11a25.5 25.5 0 0 1-7.073 3.863l-.466.166c-.87.308-1.79-.28-1.907-1.178a30.3 30.3 0 0 1 0-7.812c.118-.898 1.037-1.486 1.907-1.177l.466.165a25.5 25.5 0 0 1 7.073 3.863"
            /></svg
          >
        </button>
      </div>
    </div>
  </div>
</div>

<style>
  #lofi-player {
    background: var(--background);
  }
</style>
