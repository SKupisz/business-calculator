import styled from "styled-components";

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
