import type { APIRoute } from "astro";
import { getLatestLikedSong } from "../../lib/spotify";

export const GET: APIRoute = async () => {
  return getLatestLikedSong();
};
