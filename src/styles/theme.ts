const theme = {
    colors: {
        text: "#f3f3f3",
        background: "#141415",
        backgroundMuted: "#212121",
        highlights: "#3742FA",
        branding: "#FFA800",
    },
};

export type Theme = typeof theme;
export default theme;

declare module "styled-components" {
    interface DefaultTheme extends Theme {}
}
