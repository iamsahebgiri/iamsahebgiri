import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      id: "0VpEX8ib3wE7u8NOw4szU6",
      title: "Eyes Off You",
      artist: "PRETTYMUCH",
      thumbnail:
        "https://i.scdn.co/image/ab67616d00004851d46d93ee7fb0589ef6973c5d",
      previewUrl:
        "https://p.scdn.co/mp3-preview/66056f42a4360b94ba012b31918dc538d8c791f9",
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    },
  );
};
