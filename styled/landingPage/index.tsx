import styled from "styled-components";

export const LandingPageMainHeader = styled.header`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 2.1em;
    letter-spacing: 0.03em;
    font-family: ${(props) => props.theme.fontFamily};
    color: ${(props) => props.theme.color};
    text-shadow: 3px 3px 3px rgba(0,0,0,.15);
    position: relative;
    top: 14vh;
    margin-bottom: 4vh;
    font-weight: 700;

    & > span{
        margin: 0px 10px;
    }

    @media screen and (min-width: 425px){
        font-size: 2.9em;
    }

    @media screen and (min-width: 768px){
        font-size: 3.9em;
    }

    @media screen and (min-width: 1024px){
        font-size: 4.9em;
    }

    @media screen and (min-width: 1440px){
        width: calc(80% - 20px);
        top: 10vh;
        font-size: 5.9em;
    }
`;

export const LandingPageSubHeader = styled.header`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 1.6em;
    letter-spacing: 0.03em;
    font-family: ${(props) => props.theme.fontFamily};
    color: rgba(0,172,183,.6);
    text-shadow: 3px 3px 3px rgba(0,0,0,.15);
    position: relative;
    top: 12vh;
    margin-bottom: 10vh;
    font-weight: 600;

    @media screen and (min-width: 425px){
        width: calc(80% - 20px);
    }

    @media screen and (min-width: 1024px){
        font-size: 2.1em;
    }

    @media screen and (min-width: 1440px){
        top: 8vh;
        width: calc(60% - 20px);
        font-size: 2.9em;
    }
`;

export const LandingPageButton = styled.button`
    width: fit-content;
    padding: 20px 40px;
    box-shadow: 3px 3px 4px rgba(0,0,0,.1);
    border: none;
    border-radius: 10px;
    font-family: ${(props) => props.theme.fontFamily};
    font-weight: 700;
    background: rgba(0,172,183,.9);
    text-shadow: 3px 3px 3px rgba(0,0,0,.05);
    color: #222;
    cursor: pointer;
    font-size: 1.1em;
    transition: all 0.4s;
    position: relative;
    top: 25vh;

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 375px){
        padding: 30px 60px;
    }

    @media screen and (min-width: 425px){
        font-size: 1.4em;
    }

    @media screen and (min-width: 768px){
        top: 30vh;
    }

    @media screen and (min-width: 1024px){
        font-size: 1.9em;
    }
`;