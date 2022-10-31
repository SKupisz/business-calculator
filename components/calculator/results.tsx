import React from "react";

import { ResultsContainer, ResultsCategory, ResultsCategoryHeader } from "styled/calculator/results";

const CalculatorResults:React.FC = () => {
    return <ResultsContainer className="block-center">
        <ResultsCategory className="block-center">
            <ResultsCategoryHeader className="block-center">
                You and your business
            </ResultsCategoryHeader>
        </ResultsCategory>
        <ResultsCategory className="block-center">
            <ResultsCategoryHeader className="block-center">
                Business modifications
            </ResultsCategoryHeader>
        </ResultsCategory>
    </ResultsContainer>;
}

export default CalculatorResults;
