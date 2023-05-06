import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: none;
        border: none;
        box-sizing: border-box;

    }

    body {
        font-family: 'Lato', sans-serif;
        color: ${props => props.theme.colors.text};
        background: ${props => props.theme.colors.background};
    }
`;

export default GlobalStyle;
