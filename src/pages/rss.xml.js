import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import { sortBlogsByPublishedDesc } from "../utils/sortBlogs";
import { SITE_DESCRIPTION, SITE_TITLE } from "../consts/site";

export async function GET(context) {
  const posts = sortBlogsByPublishedDesc(await getCollection("blogs"));

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      link: `/${post.data.slug}/`,
      pubDate: post.data.publishedAt,
      description:
        post.data.description ??
        post.data.content.replace(/<[^>]+>/g, "").slice(0, 120),
    })),
  });
}
