import styled from "styled-components";

interface ResultsCategorySubsectionInterface {
    width: number
}

export const ResultsContainer = styled.main`
    width: calc(90% - 20px);
    padding: 10px;
    text-align: center;
    position: relative;
    top: 4vh;
    margin-bottom: 3vh;
    color: ${(props) => props.theme.color};
    font-family: ${(props) => props.theme.fontFamily};
`;

export const ResultsCategory = styled.section`
    width: calc(95% - 10px);
    min-height: calc(60vh - 10px);
    height: fit-content;
    padding: 5px;
    text-align: center;
    border: none;
    border-radius: 10px;
    margin-bottom: 4vh;
    box-shadow: 3px 3px 4px rgba(0,0,0,.4);
    background: rgba(200,200,200,.1);
`;

export const ResultsCategoryHeader = styled.header`
    width: calc(100% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 2.1em;
    letter-spacing: 0.04em;
    text-shadow: 3px 3px 4px rgba(0,0,0,.15);
    position: relative;
    top: 1vh;
    margin-bottom: 5vh;
    font-weight: 600;
`;

export const ResultsCategorySubsection = styled.div<ResultsCategorySubsectionInterface>`
    width: calc(${(props) => props.width}% - 30px);
    padding: 10px;
    display: inline-block;
    vertical-align: top;
    margin: 5px;
    text-align: center;
`;

export const ResultsCategorySubSectionHeader = styled.header`
    width: calc(90% - 10px);
    padding: 5px;
    text-align: center;
    font-size: 1.9em;
    letter-spacing: 0.05em;
    text-shadow: 3px 3px 4px rgba(0,0,0,.15);
    position: relative;
    top: 1vh;
    margin-bottom: 3vh;
`;

export const ResultsCategoryBusinessService = styled.div`
    width: calc(30% - 20px);
    height: calc(40vh - 20px);
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
`;

export const ResultsCategoryBusinessServiceHeader = styled.header`
    width: calc(100% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 1.4em;
    letter-spacing: 0.05em;
    font-weight: 700;
`;

export const ResultsCategoryBusinessServiceSubHeader = styled.header`
    width: calc(80% - 20px);
    padding: 10px;
    text-align: center;
    font-size: 1.15em;
    letter-spacing: 0.03em;
    font-weight: 600;
    margin-bottom: 4vh;
`;
