export const optimizeImageUrl = (
  imageUrl: string,
  {
    w,
    q = 80,
    fm = "webp",
  }: {
    w: number;
    q?: number;
    fm?: "webp" | "jpg" | "png";
  },
): string => {
  if (!imageUrl.startsWith("http")) {
    return imageUrl;
  }

  try {
    const url = new URL(imageUrl);
    url.searchParams.set("fm", fm);
    url.searchParams.set("w", String(w));
    url.searchParams.set("q", String(q));
    return url.toString();
  } catch (error) {
    console.warn(`Invalid URL: ${imageUrl}`, error);
    return imageUrl;
  }
};
