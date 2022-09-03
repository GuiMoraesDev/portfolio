import 'styled-components'
import { DimensionsProps } from './src/@types'

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      tablet: string
      laptop: string
    }
    typography: {
      fontFamily: {
        heading: string
        body: string
      }
      variants: {
        display1: FlattenInterpolation<ThemeProps<DefaultTheme>>
        heading1: FlattenInterpolation<ThemeProps<DefaultTheme>>
        heading2: FlattenInterpolation<ThemeProps<DefaultTheme>>
        heading3: FlattenInterpolation<ThemeProps<DefaultTheme>>
        heading4: FlattenInterpolation<ThemeProps<DefaultTheme>>
        heading5: FlattenInterpolation<ThemeProps<DefaultTheme>>
        body1: FlattenInterpolation<ThemeProps<DefaultTheme>>
        body2: FlattenInterpolation<ThemeProps<DefaultTheme>>
        body3: FlattenInterpolation<ThemeProps<DefaultTheme>>
        body4: FlattenInterpolation<ThemeProps<DefaultTheme>>
      }
    }
    transition: {
      slow: string
      normal: string
      fast: string
    }
    opacity: {
      full: string
      low: string
      mid: string
      high: string
      zero: string
    }
    sizes: {
      partition: {
        'x1/1': string
        'x1/2': string
        'x1/3': string
        'x1/4': string
        'x1/5': string
        'x1/6': string
        'x1/7': string
        'x1/8': string
        'x1/9': string
        'x1/10': string
        'x1/12': string
        'x2/3': string
        'x2/5': string
        'x3/4': string
        'x3/5': string
        'x4/5': string
        'x5/6': string
        'x5/12': string
        'x7/12': string
        'x11/12': string
      }
      common: {
        x0: string
        xpx: string
        'x0.5': string
        x1: string
        'x1.5': string
        x2: string
        'x2.5': string
        x3: string
        'x3.5': string
        x4: string
        'x4.5': string
        x5: string
        'x5.5': string
        x6: string
        x7: string
        x8: string
        x9: string
        x10: string
        x11: string
        x12: string
        x14: string
        x16: string
        x20: string
        x24: string
        x28: string
        x32: string
        x36: string
        x40: string
        x44: string
        x48: string
        x52: string
        x56: string
        x60: string
        x64: string
        x72: string
        x80: string
        x96: string
      }
      dimensions: {
        spacing: DimensionsProps
        height: DimensionsProps
      }
    }
    colors: {
      transparent: string
      neutrals: {
        '000': string
        '050': string
        '100': string
        '150': string
        '200': string
        '300': string
        '400': string
        '500': string
        '600': string
        '700': string
        '800': string
        '850': string
        '900': string
        '950': string
        '999': string
      }
      primary: {
        '050': string
        '100': string
        '150': string
        '200': string
        '300': string
        '400': string
        '500': string
        '600': string
        '700': string
        '800': string
        '850': string
        '900': string
        '950': string
      }
      success: {
        '100': string
        '300': string
        '500': string
      }
      alert: {
        '100': string
        '300': string
        '500': string
      }
      danger: {
        '100': string
        '300': string
        '500': string
      }
      info: {
        '100': string
        '300': string
        '500': string
      }
    }
    themeColors: {
      canvas: string
      canvasDark: string
      canvasInverted: string
      canvasInvertedLight: string
      textLight: string
      text: string
      textInverted: string
      border: string
      borderInverted: string
      brandPrimaryLight: string
      brandPrimary: string
      brandPrimaryDark: string
    }
    rounded: {
      full: string
      lg: string
      md: string
      none: string
      sm: string
    }
    shadows: {
      none: string
      regular: string
      short: string
    }
    borders: {
      none: string
      solid: string
      dashed: string
      dotted: string
      solidDarker: string
      dashedDarker: string
      dottedDarker: string
    }
  }
}
