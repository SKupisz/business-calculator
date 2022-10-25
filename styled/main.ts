import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        background: #222;
        overflow-x: hidden;
    }

    .block-center{
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
`;

export const Styles = {
    fontFamily: "Ubuntu, sans-serif",
};