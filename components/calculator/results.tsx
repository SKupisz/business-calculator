import React from "react";

import { ResultsContainer, ResultsCategory, ResultsCategoryHeader, ResultsCategorySubsection,
    ResultsCategorySubSectionHeader, } from "styled/calculator/results";

import ResultsBusinessService from "./resultsBusinessService";

const CalculatorResults:React.FC = () => {
    return <ResultsContainer className="block-center">
        <ResultsCategory className="block-center">
            <ResultsCategoryHeader className="block-center">
                You and your business
            </ResultsCategoryHeader>
            <ResultsCategorySubsection>
                <ResultsCategorySubSectionHeader className="block-center">
                    Business services
                </ResultsCategorySubSectionHeader>
                <ResultsBusinessService clientsNumber={140} currentPrice={680} serviceNumber={1} />
                <ResultsBusinessService clientsNumber={140} currentPrice={680} serviceNumber={2} />
                <ResultsBusinessService clientsNumber={140} currentPrice={680} serviceNumber={3} />
            </ResultsCategorySubsection>
            <ResultsCategorySubsection>
                <ResultsCategorySubSectionHeader className="block-center">
                    Business costs
                </ResultsCategorySubSectionHeader>
            </ResultsCategorySubsection>
        </ResultsCategory>
        <ResultsCategory className="block-center">
            <ResultsCategoryHeader className="block-center">
                Business modifications
            </ResultsCategoryHeader>
        </ResultsCategory>
    </ResultsContainer>;
}

export default CalculatorResults;
