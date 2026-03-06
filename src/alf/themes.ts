import {
  createThemes,
  DEFAULT_PALETTE,
  DEFAULT_SUBDUED_PALETTE,
} from '@bsky.app/alf'

// Brand overrides
const BRAND_BG = '#222222'
const BRAND_ACCENT = '#6421eb'

const customDefaultPalette = {
  ...DEFAULT_PALETTE,
  bg: BRAND_BG,
  background: BRAND_BG,
  surface: '#2a2a2a',
  text: '#ffffff',
  primary_500: BRAND_ACCENT,
  primary_600: '#5d21f5',
  accent: BRAND_ACCENT,
} as any

const customSubduedPalette = {
  ...DEFAULT_SUBDUED_PALETTE,
  bg: BRAND_BG,
  background: BRAND_BG,
  surface: '#1f1f1f',
  text: '#e6e6e6',
  primary_500: BRAND_ACCENT,
} as any

const DEFAULT_THEMES = createThemes({
  defaultPalette: customDefaultPalette,
  subduedPalette: customSubduedPalette,
})

export const themes = {
  lightPalette: DEFAULT_THEMES.light.palette,
  darkPalette: DEFAULT_THEMES.dark.palette,
  dimPalette: DEFAULT_THEMES.dim.palette,
  light: DEFAULT_THEMES.light,
  dark: DEFAULT_THEMES.dark,
  dim: DEFAULT_THEMES.dim,
}

/**
 * @deprecated use ALF and access palette from `useTheme()`
 */
export const lightPalette = DEFAULT_THEMES.light.palette
/**
 * @deprecated use ALF and access palette from `useTheme()`
 */
export const darkPalette = DEFAULT_THEMES.dark.palette
/**
 * @deprecated use ALF and access palette from `useTheme()`
 */
export const dimPalette = DEFAULT_THEMES.dim.palette
/**
 * @deprecated use ALF and access theme from `useTheme()`
 */
export const light = DEFAULT_THEMES.light
/**
 * @deprecated use ALF and access theme from `useTheme()`
 */
export const dark = DEFAULT_THEMES.dark
/**
 * @deprecated use ALF and access theme from `useTheme()`
 */
export const dim = DEFAULT_THEMES.dim
