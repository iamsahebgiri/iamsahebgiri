import type { Item } from "../types";

const accessToken = import.meta.env.RAINDROP_ACCESS_TOKEN as string;

const headers = new Headers({
  Authorization: `Bearer ${accessToken}`,
});

export async function getRaindrops(collectionId: string): Promise<Item[]> {
  const url = `https://api.raindrop.io/rest/v1/raindrops/${collectionId}`;

  try {
    const response = await fetch(url, {
      headers,
    });

    if (response.ok) {
      const data: { items: Item[] } = await response.json();
      return data.items;
    } else {
      console.error(`Error fetching raindrop: ${response.statusText}`);
    }
  } catch (error) {
    console.error("Error fetching raindrop:", error);
  }

  return [];
}
