import React from "react";

import { ResultsContainer, ResultsCategory, ResultsCategoryHeader, ResultsCategorySubsection,
    ResultsCategorySubSectionHeader, ResultsUserBusinessCost, ResultsUserBusinessCostHeader, ResultsBreakBlock} from "styled/calculator/results";

import { LandingPageButton } from "styled/landingPage";

import ResultsBusinessService from "./resultsBusinessService";
import ResultsBusinessCost from "./resultsBusinessCost";
import { serviceType } from "./calculator";

interface CalculatorResultsInterface {
    goingBackCallback: () => void,
    businesCost: number,
    montlhySalary: number,
    BEP: number,
    previousServices: serviceType[],
    newServicesByPrice: serviceType[],
    newServicesByClients: serviceType[],
}

const CalculatorResults:React.FC<CalculatorResultsInterface> = ({
    goingBackCallback,
    businesCost,
    montlhySalary,
    BEP,
    previousServices,
    newServicesByPrice,
    newServicesByClients,
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
                {
                    previousServices === undefined ? <></> : previousServices.map((elem:serviceType, ind: number) => <ResultsBusinessService clientsNumber={elem.clientsNumber} currentPrice={elem.currentPrice} serviceNumber={ind+1}/>)
                }
            </ResultsCategorySubsection>
            <ResultsCategorySubsection>
                <ResultsCategorySubSectionHeader className="block-center">
                    Business costs
                </ResultsCategorySubSectionHeader>
                <ResultsBusinessCost costName="BEP" cost={BEP} />
                <ResultsBusinessCost costName="Mothly salary" cost={montlhySalary} />
                <ResultsBusinessCost costName="Annual Revenue" cost={businesCost} />
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
                {
                    newServicesByClients === undefined ? <></> : newServicesByClients.map((elem:serviceType, ind: number) => <ResultsBusinessService clientsNumber={elem.clientsNumber} currentPrice={elem.currentPrice} serviceNumber={ind+1}/>)
                }
            </ResultsCategorySubsection>
            <ResultsCategorySubsection className="block-center">
                <ResultsCategorySubSectionHeader className="block-center">
                    By price
                </ResultsCategorySubSectionHeader>
                {
                    newServicesByPrice === undefined ? <></> : newServicesByPrice.map((elem:serviceType, ind: number) => <ResultsBusinessService clientsNumber={elem.clientsNumber} currentPrice={elem.currentPrice} serviceNumber={ind+1}/>)
                }
            </ResultsCategorySubsection>
        </ResultsCategory>
        <LandingPageButton className="block-center" onClick={goingBackCallback} type="button" topPos={6}>
            Calculate again
        </LandingPageButton>
        <ResultsBreakBlock className="block-center" />
    </ResultsContainer>;
}

export default CalculatorResults;
