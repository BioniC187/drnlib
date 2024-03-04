export interface Theme {
  dark: boolean;
  colors: {
    primary: string;
    background: string;
    //outlineColor: string;
    card: string;
    text: string;
    border: string;
    notification: string;

    surfaceTint: string;
    onPrimary: string;
    primaryContainer: string;
    onPrimaryContainer: string;
    secondary: string;
    onSecondary: string;
    secondaryContainer: string;
    onSecondaryContainer: string;
    tertiary: string;
    onTertiary: string;
    tertiaryContainer: string;
    onTertiaryContainer: string;
    error: string;
    onError: string;
    errorContainer: string;
    onErrorContainer: string;
    onBackground: string;
    surface: string;
    onSurface: string;
    surfaceVariant: string;
    onSurfaceVariant: string;
    outline: string;
    outlineVariant: string;
    shadow: string;
    scrim: string;
    inverseSurface: string;
    inverseOnSurface: string;
    inversePrimary: string;
    primaryFixed: string;
    onPrimaryFixed: string;
    primaryFixedDim: string;
    onPrimaryFixedVariant: string;
    secondaryFixed: string;
    onSecondaryFixed: string;
    secondaryFixedDim: string;
    onSecondaryFixedVariant: string;
    tertiaryFixed: string;
    onTertiaryFixed: string;
    tertiaryFixedDim: string;
    onTertiaryFixedVariant: string;
    surfaceDim: string;
    surfaceBright: string;
    surfaceContainerLowest: string;
    surfaceContainerLow: string;
    surfaceContainer: string;
    surfaceContainerHigh: string;
    surfaceContainerHighest: string;
  };
}

const LightTheme: Theme = {
  dark: false,
  colors: {
    primary: '#4C662B',
    background: '#F9FAEF',
    card: '#EEEFE3',
    text: '#1A1C16',
    border: '#4C662B',
    notification: '#4C662B',

    surfaceTint: '#4C662B',
    onPrimary: '#FFFFFF',
    primaryContainer: '#CDEDA3',
    onPrimaryContainer: '#102000',
    secondary: '#586249',
    onSecondary: '#FFFFFF',
    secondaryContainer: '#DCE7C8',
    onSecondaryContainer: '#151E0B',
    tertiary: '#386663',
    onTertiary: '#FFFFFF',
    tertiaryContainer: '#BCECE7',
    onTertiaryContainer: '#00201E',
    error: '#BA1A1A',
    onError: '#FFFFFF',
    errorContainer: '#FFDAD6',
    onErrorContainer: '#410002',
    onBackground: '#1A1C16',
    surface: '#F9FAEF',
    onSurface: '#1A1C16',
    surfaceVariant: '#E1E4D5',
    onSurfaceVariant: '#44483D',
    outline: '#75796C',
    outlineVariant: '#C5C8BA',
    shadow: '#000000',
    scrim: '#000000',
    inverseSurface: '#2F312A',
    inverseOnSurface: '#F1F2E6',
    inversePrimary: '#B1D18A',
    primaryFixed: '#CDEDA3',
    onPrimaryFixed: '#102000',
    primaryFixedDim: '#B1D18A',
    onPrimaryFixedVariant: '#354E16',
    secondaryFixed: '#DCE7C8',
    onSecondaryFixed: '#151E0B',
    secondaryFixedDim: '#BFCBAD',
    onSecondaryFixedVariant: '#404A33',
    tertiaryFixed: '#BCECE7',
    onTertiaryFixed: '#00201E',
    tertiaryFixedDim: '#A0D0CB',
    onTertiaryFixedVariant: '#1F4E4B',
    surfaceDim: '#DADBD0',
    surfaceBright: '#F9FAEF',
    surfaceContainerLowest: '#FFFFFF',
    surfaceContainerLow: '#F3F4E9',
    surfaceContainer: '#EEEFE3',
    surfaceContainerHigh: '#E8E9DE',
    surfaceContainerHighest: '#E2E3D8',
  },
};

const DarkTheme: Theme = {
  dark: true,
  colors: {
    primary: '#B1D18A',
    background: '#12140E',
    card: '#354E16',
    text: '#CDEDA3',
    border: '#B1D18A',
    notification: '#B1D18A',

    surfaceTint: '#B1D18A',
    onPrimary: '#1F3701',
    primaryContainer: '#354E16',
    onPrimaryContainer: '#CDEDA3',
    secondary: '#BFCBAD',
    onSecondary: '#2A331E',
    secondaryContainer: '#404A33',
    onSecondaryContainer: '#DCE7C8',
    tertiary: '#A0D0CB',
    onTertiary: '#003735',
    tertiaryContainer: '#1F4E4B',
    onTertiaryContainer: '#BCECE7',
    error: '#FFB4AB',
    onError: '#690005',
    errorContainer: '#93000A',
    onErrorContainer: '#FFDAD6',
    onBackground: '#E2E3D8',
    surface: '#12140E',
    onSurface: '#E2E3D8',
    surfaceVariant: '#44483D',
    onSurfaceVariant: '#C5C8BA',
    outline: '#8F9285',
    outlineVariant: '#44483D',
    shadow: '#000000',
    scrim: '#000000',
    inverseSurface: '#E2E3D8',
    inverseOnSurface: '#2F312A',
    inversePrimary: '#4C662B',
    primaryFixed: '#CDEDA3',
    onPrimaryFixed: '#102000',
    primaryFixedDim: '#B1D18A',
    onPrimaryFixedVariant: '#354E16',
    secondaryFixed: '#DCE7C8',
    onSecondaryFixed: '#151E0B',
    secondaryFixedDim: '#BFCBAD',
    onSecondaryFixedVariant: '#404A33',
    tertiaryFixed: '#BCECE7',
    onTertiaryFixed: '#00201E',
    tertiaryFixedDim: '#A0D0CB',
    onTertiaryFixedVariant: '#1F4E4B',
    surfaceDim: '#12140E',
    surfaceBright: '#383A32',
    surfaceContainerLowest: '#0C0F09',
    surfaceContainerLow: '#1A1C16',
    surfaceContainer: '#1E201A',
    surfaceContainerHigh: '#282B24',
    surfaceContainerHighest: '#33362E',
  },
};

export const GetTheme = (isDarkMode: boolean): Theme => {
  if (isDarkMode) {
    return DarkTheme;
  } else {
    return LightTheme;
  }
};
