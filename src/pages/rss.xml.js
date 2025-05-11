import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

import { SITE_DESCRIPTION, SITE_TITLE } from "../consts";

export async function GET(context) {
  const posts = await getCollection("blog");
  const timeline = await getCollection("timelineArticle");
  const snippets = await getCollection("snippets");
  const allPosts = [...posts, ...timeline, ...snippets];
  const items = allPosts.sort((a, b) => {
    const dateA = new Date(a.data.pubDate);
    const dateB = new Date(b.data.pubDate);
    return dateB - dateA;
  }).map((post) => {
    let link = `/blog/${post.id}/`;
    if (post.collection === "timelineArticle") {
      link = `/timeline#${post.id}/`;
    }
    else if (post.collection === "snippets") {
      link = `/snippets/${post.id}/`;
    }

    const description = post.data.description ?? post.body;
    return ({
      title: post.data.title,
      description,
      pubDate: new Date(post.data.pubDate),
      link,
    });
  });
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items,
  });
}
