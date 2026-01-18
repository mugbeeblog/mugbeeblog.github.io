export const IMAGE_PRESETS = {
  card: {
    w: 400,
    q: 80,
  },
  hero: {
    w: 1200,
    q: 85,
  },
  thumbnail: {
    w: 200,
    q: 75,
  },
} as const;

export type ImagePresetKey = keyof typeof IMAGE_PRESETS;
