import styled from "styled-components";

export const ErrorContainer = styled.section`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-family: ${(props) => props.theme.fontFamily};
    color: ${(props) => props.theme.color};
    text-shadow: 3px 3px 4px rgba(0,0,0,.15);
    position: relative;
    top: 4vh;

    @media screen and (min-width: 768px){
        width: calc(90% - 20px);
    }

    @media screen and (min-width: 1024px){
        width: calc(80% - 20px);
    }
`;

export const ErrorHeader = styled.header`
    width: calc(100% - 10px);
    padding: 10px 5px;
    text-align: center;
    font-size: 1.9em;
    letter-spacing: 0.04em;
    position: relative;
    top: 2vh;
    margin-bottom: 9vh;
    font-weight: 700;

    @media screen and (min-width: 768px){
        font-size: 2.4em;
    }

    @media screen and (min-width: 1024px){
        font-size: 2.9em;
    }
`;

export const ErrorMessage = styled.div`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 1.1em;
    letter-spacing: 0.05em;
    position: relative;
    top: 1vh;
    font-weight: 700;

    @media screen and (min-width: 768px){
        width: calc(80% - 10px);
        font-size: 1.5em;
    }

    @media screen and (min-width: 1024px){
        font-size: 1.9em;
    }
`;
