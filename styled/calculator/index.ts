import styled from "styled-components";

export const CalculatorHeader = styled.h1`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 2.1em;
    letter-spacing: 0.03em;
    color: ${(props) => props.theme.color};
    font-family: ${(props) => props.theme.fontFamily};
    position: relative;
    top: 1vh;
    margin-bottom: 6vh;

    @media screen and (min-width: 320px){
        font-size: 2.3em;
    }

    @media screen and (min-width: 425px){
        width: calc(90% - 20px);
        font-size: 2.7em;
    }

    @media screen and (min-width: 768px){
        width: calc(80% - 20px);
        font-size: 3.4em;
    }
`;

export const CalculatorContainer = styled.section`
    width: calc(90% - 20px);
    height: calc(70vh - 20px);
    padding: 10px;
    border-radius: 10px;
    box-shadow: 3px 3px 4px rgba(0,0,0,.15);
    font-family: ${(props) => props.theme.fontFamily};
    color: ${(props) => props.theme.color};
    position: relative;
    top: 1vh;
    background: rgba(200,200,200,.1);
    text-align: center;
    overflow: hidden;

    @media screen and (min-width: 425px){
        width: calc(80% - 20px);
    }

    @media screen and (min-width: 768px){
        width: calc(60% - 20px);
    }

    @media screen and (min-width: 1024px){
        width: calc(40% - 20px);
    }

    @media screen and (min-width: 1440px){
        width: calc(30% - 20px);
    }
`;

export const CalculatorCardWrapper = styled.div`
    width: calc(100% - 10px);
    padding: 5px;
`;

export const CalculatorCardHeader = styled.h3`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 1.2em;
    letter-spacing: 0.04em;
    position: relative;
    top: 1vh;
    margin-bottom: 4vh;

    @media screen and (min-width: 425px){
        font-size: 1.4em;
    }

    @media screen and (min-width: 768px){
        font-size: 1.9em;
    }

    @media screen and (min-width: 2560px){
        width: calc(80% - 10px);
    }
`;

export const CalculatorCardInput = styled.input`
    width: calc(100% - 20px);
    padding: 10px;
    font-size: 1.4em;
    text-indent: 0.4em;
    letter-spacing: 0.03em;
    font-family: ${(props) => props.theme.fontFamily};
    color: ${(props) => props.theme.color};
    background: rgba(3,172,179,.2);
    border: none;
    border-radius: 10px;
    box-shadow: 3px 3px 4px rgba(0,0,0,.15);
    margin-bottom: 2vh;
    position: relative;
    top: 1vh;
    cursor: pointer;
    transition: all 0.4s;

    &:hover{
        filter: brightness(70%);
    }
`;

export const CalculatorNextPageIconWrapper = styled.div`
    width: fit-content;
    height: fit-content;
    padding: 10px;
    color: ${(props) => props.theme.color};
    text-shadow: 3px 3px 4px rgba(0,0,0,.2);
    font-size: 3.6em;
    position: relative;
    top: 5vh;
    cursor: pointer;
    transition: filter 0.4s;

    &:hover{
        filter: brightness(70%);
    }
`;
