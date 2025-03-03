export const i18n = {
  defaultLocale: "en",
  locales: ["en", "zh", "ko", "ja", "fr"],
} as const;

export type Locale = (typeof i18n)["locales"][number];

// 新增的映射对象
export const localeMap = {
  en: "English",
  zh: "中文",
  ko: "한국어",
  ja: "日本語",
  fr: "Français",
} as const;
