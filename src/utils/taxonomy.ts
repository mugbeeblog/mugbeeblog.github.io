import type { CollectionEntry } from "astro:content";

export type TaxonomyItem = {
  id: string;
  name: string;
  slug?: string;
};

export function countTaxonomies(
  posts: CollectionEntry<"blogs">[],
  getTaxonomies: (post: CollectionEntry<"blogs">) => TaxonomyItem[] | undefined,
): { name: string; slug: string; count: number }[] {
  const map = new Map<string, { name: string; slug: string; count: number }>();

  for (const post of posts) {
    const items = getTaxonomies(post);
    if (!items) continue;

    for (const item of items) {
      const slug = item.slug ?? item.id;
      const entry = map.get(slug);

      if (entry) {
        entry.count++;
      } else {
        map.set(slug, {
          name: item.name,
          slug,
          count: 1,
        });
      }
    }
  }

  return Array.from(map.values()).sort(
    (a, b) => b.count - a.count || a.name.localeCompare(b.name),
  );
}

export function groupPostsByTaxonomy(
  posts: CollectionEntry<"blogs">[],
  getTaxonomies: (post: CollectionEntry<"blogs">) => TaxonomyItem[] | undefined,
): Map<
  string,
  {
    name: string;
    slug: string;
    posts: CollectionEntry<"blogs">[];
  }
> {
  const map = new Map<
    string,
    {
      name: string;
      slug: string;
      posts: CollectionEntry<"blogs">[];
    }
  >();

  for (const post of posts) {
    const items = getTaxonomies(post);
    if (!items) continue;

    for (const item of items) {
      const slug = item.slug ?? item.id;
      const entry = map.get(slug);

      if (entry) {
        entry.posts.push(post);
      } else {
        map.set(slug, {
          name: item.name,
          slug,
          posts: [post],
        });
      }
    }
  }

  return map;
}
