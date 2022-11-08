import styled from "styled-components";

interface ResultsUserBusinessCostInterface {
    isClickable?: boolean
}

export const ResultsContainer = styled.main`
    width: calc(100% - 10px);
    padding: 10px;
    text-align: center;
    position: relative;
    top: 4vh;
    margin-bottom: 3vh;
    color: ${(props) => props.theme.color};
    font-family: ${(props) => props.theme.fontFamily};

    @media screen and (min-width: 768px){
        width: calc(90% - 20px);
    }
`;

export const ResultsCategory = styled.section`
    width: calc(100% - 10px);
    min-height: calc(60vh - 10px);
    height: fit-content;
    padding: 5px;
    text-align: center;
    border: none;
    border-radius: 10px;
    margin-bottom: 4vh;
    box-shadow: 3px 3px 4px rgba(0,0,0,.4);
    background: rgba(200,200,200,.1);

    @media screen and (min-width: 425px){
        width: calc(95% - 10px);
    }
`;

export const ResultsCategoryHeader = styled.header`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 1.2em;
    letter-spacing: 0.04em;
    text-shadow: 3px 3px 4px rgba(0,0,0,.15);
    position: relative;
    top: 1vh;
    margin-bottom: 1vh;
    font-weight: 600;

    @media screen and (min-width: 375px){
        font-size: 1.4em;
        margin-bottom: 3vh;
    }

    @media screen and (min-width: 425px){
        font-size: 1.7em;
        margin-bottom: 5vh;
    }

    @media screen and (min-width: 768px){
        font-size: 2.1em;
    }
`;

export const ResultsCategorySubsection = styled.div`
    width: calc(100% - 30px);
    padding: 10px;
    display: inline-block;
    vertical-align: top;
    margin: 5px;
    text-align: center;

    @media screen and (min-width: 768px){
        width: calc(80% - 30px);
    }

    @media screen and (min-width: 1024px){
        width: calc(90% - 30px);
    }
`;

export const ResultsCategorySubSectionHeader = styled.header`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 1.1em;
    letter-spacing: 0.05em;
    text-shadow: 3px 3px 4px rgba(0,0,0,.15);
    position: relative;
    top: 1vh;
    margin-bottom: 2vh;

    @media screen and (min-width: 375px){
        font-size: 1.3em;
    }

    @media screen and (min-width: 425px){
        font-size: 1.5em;
        margin-bottom: 3vh;
    }

    @media screen and (min-width: 768px){
        width: calc(90% - 10px);
        font-size: 1.9em;
    }
`;

export const ResultsUserBusinessCostWrapper = styled.section`
    width: calc(100% - 30px);
    padding: 10px;
    text-align: center;
    display: inline-block;
    vertical-align: top;
    margin: 5px;

    @media screen and (min-width: 768px){
        width: calc(80% - 30px);
    }

    @media screen and (min-width: 1024px){
        width: calc(45% - 30px);
    }

    @media screen and (min-width: 1440px){
        width: calc(40% - 30px);
    }
`;

export const ResultsUserBusinessCost = styled.div<ResultsUserBusinessCostInterface>`
    width: calc(100% - 10px);
    padding: 10px 5px;
    background: rgba(200,200,200,.1);
    border-radius: 10px;
    box-shadow: 3px 3px 4px rgba(0,0,0,.15);
    margin-bottom: 1vh;
    ${(props) => props.isClickable !== undefined && props.isClickable ? `
        cursor: pointer;
        transition: all 0.4s;

        &:hover{
            filter: brightness(70%);
        }
    
    ` : null}
`;

export const ResultsUserBusinessCostHeader = styled.header`
    width: calc(100% - 10px);
    padding: 10px 5px;
    text-align: center;
    font-size: 0.85em;
    letter-spacing: 0.04em;
    font-wieght: 600;
    text-shadow: 3px 3px 4px rgba(0,0,0,.15);

    @media screen and (min-width: 375px){
        font-size: 0.95em;
    }

    @media screen and (min-width: 425px){
        font-size: 1.15em;
    }

    @media screen and (min-width: 768px){
        font-size: 1.35em;
    }

    @media screen and (min-width: 1024px){
        font-size: 1.5em;
    }
`;

export const ResultsBreakBlock = styled.div`
    height: 10vh;
    position: relative;
    top: 6vh;
`;