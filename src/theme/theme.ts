export const themes = {
  orange: {
    primary: "#FF7A00",
    buttonText: "#fff",
    buttonGradient: "linear-gradient(84.38deg, #ff8d6b 7.59%, #ffba47 96.71%)",
  },

  green: {
    primary: "#1DB954",
    buttonText: "#fff",
    buttonGradient: "linear-gradient(84.38deg, #19a44b 7.59%, #49d17d 96.71%)",
  },
} as const

export type ThemeName = keyof typeof themes
export type AppTheme = typeof themes[ThemeName]