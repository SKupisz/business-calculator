import React from "react";

import { ResultsCategoryBusinessService, ResultsCategoryBusinessServiceHeader, ResultsCategoryBusinessServiceSubHeader } from "styled/calculator/results";

interface ResultsBusinessServiceInterface {
    clientsNumber: number,
    currentPrice: number,
}

const ResultsBusinessService:React.FC<ResultsBusinessServiceInterface> = ({
    clientsNumber, 
    currentPrice
}:ResultsBusinessServiceInterface) => {
    return <ResultsCategoryBusinessService>
        <ResultsCategoryBusinessServiceHeader className="block-center">
            Clients number
        </ResultsCategoryBusinessServiceHeader>
        <ResultsCategoryBusinessServiceSubHeader className="block-center">
            {clientsNumber}
        </ResultsCategoryBusinessServiceSubHeader>
        <ResultsCategoryBusinessServiceHeader className="block-center">
            Current price
        </ResultsCategoryBusinessServiceHeader>
        <ResultsCategoryBusinessServiceSubHeader className="block-center">
            {currentPrice}
        </ResultsCategoryBusinessServiceSubHeader>
    </ResultsCategoryBusinessService>
}

export default ResultsBusinessService;
