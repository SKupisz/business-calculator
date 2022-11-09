import styled from "styled-components";

export const Error404Header = styled.header`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 2.2em;
    letter-spacing: 0.05em;
    color: ${(props) => props.theme.color};
    font-family: ${(props) => props.theme.fontFamily};
    text-shadow: 3px 3px 4px rgba(0,0,0,.2);
    position: relative;
    top: 9vh;
    margin-bottom: 9vh;

    @media screen and (min-width: 425px){
        font-size: 2.9em;
    }

    @media screen and (min-width: 768px){
        font-size: 3.7em;
    }

    @media screen and (min-width: 1024px){
        font-size: 4.2em;
    }
`;

export const Error404Info = styled.div`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 1.1em;
    letter-spacing: 0.04em;
    color: ${(props) => props.theme.color};
    font-family: ${(props) => props.theme.fontFamily};
    text-shadow: 3px 3px 4px rgba(0,0,0,.15);
    position: relative;
    top: 4vh;

    @media screen and (min-width: 425px){
        font-size: 1.3em;
    }

    @media screen and (min-width: 768px){
        font-size: 1.8em;
    }

    @media screen and (min-width: 1024px){
        width: calc(80% - 20px);
        font-size: 2.1em;
    }
`;