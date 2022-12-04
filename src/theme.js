import { css } from "styled-components";

export const lightTheme = {
    color: {
        tilesBackground: "#FFFFFF",
        tileTitle: "#0366D6",
        tileHover: "#0366d633",
        linkBorder: "#bad0e8",
        titleAndIcons: "#252525",
        text: "#6E7E91",
        background: "#E5E5E5",
        bodyBackground: "#FBFBFE",
        mainBlue: "#0366D6",
        borderBottom: "#D1D5DA4D",
        blue: "#0366D6",

    },

    breakpoint: {
        maxContentSize: 1368,
        tablet: 1060,
        mobile: 800,
        miniMobile: 500,
        extra: 878,
    },
    fontSize: {
        regular: 400,
        medium: 500,
        bold: 700,
    },
};

export const darkTheme = {
    color: {
        tilesBackground: "rgba(54, 54, 54, 0.72)",
        tileTitle: "#FFFFFF",
        tileHover: "#0366d677",
       linkBorder: "#0366D6",
        titleAndIcons: "#FFFFFF",
        text: "#FFFFFF",
        background: "#252525",
        bodyBackground: "#252525",
        mainBlue: "#0366D6",
        borderBottom: "#D1D5DA4D",
        blue: "#5b96d9",
    },

    breakpoint: {
        maxContentSize: 1368,
        tablet: 1060,
        mobile: 800,
        miniMobile: 500,
        extra: 878,
    },
    fontSize: {
        regular: 400,
        medium: 500,
        bold: 700,
    },
};

export const FlexCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;