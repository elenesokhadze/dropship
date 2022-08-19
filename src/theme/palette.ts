import {BREAKPOINTS, DEFAULT_SPACE} from "./constants";

import {BaseTheme} from "styled-components";

const theme: BaseTheme = {
 fonts: {
  default: {
   name: '"Montserrat", sans-serif',
  },
  style: {
   italic: "italic",
   normal: "normal",
   inherit: "inherit",
  },
 },
 colors: {
  primary: {
   blue: {
    main: "#5d6b9f",
    shade: "#303856",
    tint: "#9da9d5",
   },
   white: {
    main: "#fff",
   },
   grey: {
    main: "#ecedf5",
    shade: "#dbe0f3",
    tint: "#f8f9fa",
   },
  },
  secondary: {
   blue: {
    main: "#64c7d0",
    shade: "#e6f2f2",
   },
   grey: {
    main: "#707070",
   },
  },
 },
 responsive: BREAKPOINTS,
 breakpoints: Object.values(BREAKPOINTS).map((point) => `${point}px`),
 spacing: (...rest: number[]) => {
  if (rest.length === 0 || rest.length > 4) {
   return 0;
  }
  if (rest.length === 1) {
   return rest[0] * DEFAULT_SPACE;
  }
  let space: string = "";
  for (let i of rest) {
   space += `${i * DEFAULT_SPACE}px `;
  }
  return space.trim();
 },
};

export {theme};
