import styled from "styled-components";

interface ResultsCategoryBusinessServiceOpeningInterface {
    isChosen: boolean
}

export const ResultsCategoryBusinessServiceWrapper = styled.section`
    width: calc(100% - 20px);
    padding: 5px;
    display: inline-block;
    vertical-align: top;
    margin: 5px;
    margin-bottom: 0px;

    @media screen and (min-width: 425px){
        margin: 5px;
    }

    @media screen and (min-width: 1024px){
        width: calc(33% - 20px);
    }
`;

export const ResultsCategoryBusinessServiceOpening = styled.div<ResultsCategoryBusinessServiceOpeningInterface>`
    width: calc(100% - 20px);
    padding: 10px 5px;
    border-radius: 10px;
    display: inline-block;
    vertical-align: top;
    margin: 5px;
    text-align: center;
    font-size: 1.3em;
    letter-spacing: 0.05em;
    cursor: pointer;
    background: ${(props) => props.isChosen ? "rgba(40,40,40,.1)" : "rgba(200,200,200,.1)"};
    transition: all 0.4s;
    box-shadow: 3px 3px 4px rgba(0,0,0,.15);
    text-shadow: 3px 3px 4px rgba(0,0,0,.15);

    &:hover{
        filter: brightness(70%);
    }

    @media screen and (min-width: 425px){
        width: calc(80% - 20px);
        font-size: 1.5em;
    }

    @media screen and (min-width: 768px){
        width: calc(60% - 20px);
        font-size: 1.8em;
    }

    @media screen and (min-width: 1024px){
        width: calc(95% - 20px);
    }
`;

export const ResultsCategoryBusinessService = styled.div`
    width: calc(100% - 20px);
    padding: 5px;
    display: inline-block;
    vertical-align: top;
    margin: 5px;
    text-align: center;
    border-radius: 10px;
    background: rgba(200,200,200,.1);
    box-shadow: 3px 3px 4px rgba(0,0,0,.15);
    cursor: pointer;
    transition: all 0.4s;

    &:hover{
        transform: translateY(5px);
    }

    @media screen and (min-width: 425px){
        width: calc(80% - 20px);
    }

    @media screen and (min-width: 1024px){
        width: calc(100% - 20px);
    }
`;

export const ResultsCategoryBusinessServiceHeader = styled.header`
    width: calc(100% - 10px);
    padding: 10px 5px;
    text-align: center;
    font-size: 0.9em;
    letter-spacing: 0.04em;
    font-weight: 700;

    @media screen and (min-width: 375px){
        font-size: 1em;
    }

    @media screen and (min-width: 425px){
        font-size: 1.1em;
        letter-spacing: 0.05em;
    }

    @media screen and (min-width: 768px){
        font-size: 1.4em;
    }
`;

export const ResultsCategoryBusinessServiceSubHeader = styled.header`
    width: calc(100% - 10px);
    padding: 10px 5px;
    text-align: center;
    font-size: .85em;
    letter-spacing: 0.03em;
    font-weight: 600;
    margin-bottom: 2vh;

    @media screen and (min-width: 375px){
        font-size: 0.95em;
    }

    @media screen and (min-width: 425px){
        font-size: 1.05em;
    }

    @media screen and (min-width: 768px){
        width: calc(80% - 20px);
        font-size: 1.15em;
        margin-bottom: 4vh;
    }
`;
