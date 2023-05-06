import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        border: none;
        box-sizing: border-box;

    }

    body {
        font-family: sans-serif;
        color: ${props => props.theme.colors.text};
        background: ${props => props.theme.colors.background};
    }
`;

export default GlobalStyle;
