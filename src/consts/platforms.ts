export const PLATFORM_CONFIG = {
  youtube: { label: "YouTube", color: "#f00" },
  info: { label: "お知らせ", color: "#666" },
} as const;

export type Platform = keyof typeof PLATFORM_CONFIG;
export const PLATFORMS = Object.keys(PLATFORM_CONFIG) as [
  Platform,
  ...Platform[],
];
