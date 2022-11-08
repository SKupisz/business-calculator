import React from "react";

import { ResultsContainer, ResultsCategory, ResultsCategoryHeader, ResultsCategorySubsection,
    ResultsCategorySubSectionHeader, ResultsUserBusinessCost, ResultsUserBusinessCostHeader, ResultsBreakBlock} from "styled/calculator/results";

import { LandingPageButton } from "styled/landingPage";

import ResultsBusinessService from "./resultsBusinessService";
import ResultsBusinessCost from "./resultsBusinessCost";

interface CalculatorResultsInterface {
    goingBackCallback: () => void,
}

const CalculatorResults:React.FC<CalculatorResultsInterface> = ({
    goingBackCallback
}:CalculatorResultsInterface) => {
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
                <ResultsBusinessCost costName="BEP" cost={200000} />
                <ResultsBusinessCost costName="Annual Revenue" cost={120000} />
            </ResultsCategorySubsection>
        </ResultsCategory>
        <ResultsCategory className="block-center">
            <ResultsCategoryHeader className="block-center">
                Business modifications
            </ResultsCategoryHeader>
            <ResultsCategorySubsection className="block-center">
                <ResultsCategorySubSectionHeader className="block-center">
                    By customers
                </ResultsCategorySubSectionHeader>
                <ResultsBusinessService clientsNumber={240} currentPrice={680} serviceNumber={1} />
                <ResultsBusinessService clientsNumber={190} currentPrice={680} serviceNumber={2} />
                <ResultsBusinessService clientsNumber={210} currentPrice={680} serviceNumber={3} />
            </ResultsCategorySubsection>
            <ResultsCategorySubsection className="block-center">
                <ResultsCategorySubSectionHeader className="block-center">
                    By price
                </ResultsCategorySubSectionHeader>
                <ResultsBusinessService clientsNumber={240} currentPrice={680} serviceNumber={1} />
                <ResultsBusinessService clientsNumber={190} currentPrice={680} serviceNumber={2} />
                <ResultsBusinessService clientsNumber={210} currentPrice={680} serviceNumber={3} />
            </ResultsCategorySubsection>
        </ResultsCategory>
        <LandingPageButton className="block-center" onClick={goingBackCallback} type="button" topPos={6}>
            Calculate again
        </LandingPageButton>
        <ResultsBreakBlock className="block-center" />
    </ResultsContainer>;
}

export default CalculatorResults;
