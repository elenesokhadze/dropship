// #region Global Imports
import "styled-components";

// color types
type ColorVariant = {
 main: string;
 shade?: string;
 tint?: string;
};

type PalleteColors = {
 blue: ColorVariant;
 white: ColorVariant;
 grey: ColorVariant;
};

type PrimaryColors = {
 blue: ColorVariant;
 white: ColorVariant;
 grey: ColorVariant;
};

type SecondaryColors = {
 blue: ColorVariant;
 grey: ColorVariant;
};

type Colors = {
 primary: PalleteColors;
 secondary: {blue: ColorVariant; grey: ColorVariant};
};
// font types
type DefaultFont = {
 name: string;
};
type FontStyle = {
 italic: string;
 normal: string;
 inherit: string;
};
type Fonts = {
 default: DefaultFont;
 style: FontStyle;
};

type Breakpoints = {
 mobile: number;
 tablet: number;
 desktop: number;
};

declare module "styled-components" {
 export interface BaseTheme {
  fonts: Fonts;
  colors: Colors;
  responsive: Breakpoints;
  breakpoints: String[];
  spacing: (...rest: number[]) => number | string;
 }

 export interface DefaultTheme extends BaseTheme {}
 export interface DefaultTheme {
  colors: Colors;
 }
}
