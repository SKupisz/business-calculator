import styled from "styled-components";

export const ContactHeader = styled.header`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 3.6em;
    color: ${(props) => props.theme.color};
    font-family: ${(props) => props.theme.fontFamily};
    font-weight: 700;
    text-shadow: 3px 3px 4px rgba(0,0,0,.2);
    position: relative;
    top: 4vh;
    margin-bottom: 10vh;

    @media screen and (min-width: 1024px){
        width: calc(80% - 20px);
        font-size: 4.1em;
    }
`;

export const ContactContainer = styled.section`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    position: relative;
    top: 10vh;
    color: ${(props) => props.theme.color};
    font-family: ${(props) => props.theme.fontFamily};
    font-size: 1.5em;
    text-shadow: 3px 3px 4px rgba(0,0,0,.15);

    @media screen and (min-width: 768px){
        width: calc(80% - 20px);
    }

    @media screen and (min-width: 1024px){
        width: calc(60% - 20px);
        font-size: 1.7em;
    }
`;

export const ContactWrapper = styled.div`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    margin-bottom: 4vh;
`;