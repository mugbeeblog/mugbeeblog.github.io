export const sortBlogsByPublishedDesc = <
  T extends {
    data: {
      publishedAt: Date;
      slug: string;
    };
  },
>(
  blogs: T[],
): T[] =>
  [...blogs].sort(
    (a, b) =>
      b.data.publishedAt.getTime() - a.data.publishedAt.getTime() ||
      a.data.slug.localeCompare(b.data.slug),
  );
