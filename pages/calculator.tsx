import type { NextPage } from "next";
import React, { useState, useEffect } from "react";

import { CalculatorHeader } from "styled/calculator";

import CalculatorComponent, { serviceType } from "components/calculator/calculator";
import CalculatorResults from "components/calculator/results";
import ErrorComponent from "components/calculator/error";

import calculateTheResults from "connectionFunctions/calculateTheResults";

const Calculator: NextPage = () => {

    const [phase, setPhase] = useState<number>(0); // 0 - basic business data, 1 - services, 2 - summary and submitting
    const [isNextPhaseAvailable, toggleIsNextPhaseAvailable] = useState<boolean>(false);
    const [areResultsAvailable, toggleAreResultsAvailable] = useState<boolean>(false);
    const [isLoading, toggleIsLoading] = useState<boolean>(false);
    const [isError, toggleIsError] = useState<boolean>(false);

    const [annualCost, setAnnualCost] = useState<number|undefined>();
    const [monthlySalary, setMonthlySalary] = useState<number|undefined>();
    const [services, setServices] = useState<serviceType[]>([]);
    const [BEP, setBEP] = useState<number>(0);
    const [clientsNumber, setClientsNumber] = useState<number>(0);
    const [newPricesServices, setNewPricesServices] = useState<serviceType[]>([]);
    const [newClientsServices, setNewClientsServices] = useState<serviceType[]>([]);

    const validateNumber = (numberToValidate: string, assigningCallback: (newState: number | undefined) => void):void => {
        const operand = parseInt(numberToValidate);
        numberToValidate === "" ? assigningCallback(undefined) : operand >= 0 ? assigningCallback(operand) : null;
    }

    const updateService = (numberToValidate: string, serviceIndex: number, serviceProperty: number):void => {
        const operand = [...services];
        const updatedService = operand[serviceIndex];
        const numberValidationOperand = parseInt(numberToValidate);
        if(serviceProperty === 0) updatedService.currentPrice = numberToValidate === "" ? undefined : numberValidationOperand >= 0 ?
         numberValidationOperand : updatedService.currentPrice;
        else updatedService.clientsNumber = numberToValidate === "" ? undefined : numberValidationOperand >= 0 
        ? numberValidationOperand : updatedService.clientsNumber;
        operand[serviceIndex] = updatedService;
        setServices(operand); 
    }

    const addNewService = ():void => {
        if(services.length < 3){
            const operand = [...services];
            operand.push({
                clientsNumber: undefined,
                currentPrice: undefined
            });
            setServices(operand);
        }
    }

    const resetTheCalculator = ():void => {
        setPhase(0);
        toggleAreResultsAvailable(false);
        toggleIsNextPhaseAvailable(false);
        setAnnualCost(undefined);
        setMonthlySalary(undefined);
        setServices([]);
        toggleIsError(false);
    }

    useEffect(() => {
        toggleIsNextPhaseAvailable((phase === 0 && annualCost !== undefined && monthlySalary !== undefined && 
            Number.isFinite(annualCost) && Number.isFinite(monthlySalary) &&
            annualCost > 0 && monthlySalary > 0) || (
            phase === 1 && services.length > 0 && services.filter((elem: serviceType) => elem.clientsNumber === undefined || 
            (elem.clientsNumber !== undefined && (elem.clientsNumber === 0 || !Number.isFinite(elem.clientsNumber))) || elem.currentPrice === undefined || 
            (elem.currentPrice !== undefined && (elem.currentPrice === 0 || !Number.isFinite(elem.currentPrice)))).length === 0
        ));
    }, [phase, annualCost, monthlySalary, services]);

    useEffect(() => {
        if(phase === 2 && !isNextPhaseAvailable && annualCost !== undefined && monthlySalary !== undefined){
            calculateTheResults(annualCost, monthlySalary, services, setBEP, setClientsNumber, setNewPricesServices, setNewClientsServices,
                toggleIsLoading, toggleAreResultsAvailable, toggleIsError);
        }
    }, [phase,isNextPhaseAvailable]);

    return <>
        <CalculatorHeader className="block-center">
            {isError ? "Oops!..." : !areResultsAvailable ? `Let's calculate!` : "Your results"}
        </CalculatorHeader>
        {
            isError ? <ErrorComponent errorTitle="Connection error" resetTheCalculator={resetTheCalculator}>
                Something went wrong. Try to refresh the app or open it later
            </ErrorComponent> : !areResultsAvailable ? <CalculatorComponent 
            phase={phase}
            annualCost={annualCost}
            setAnnualCost={setAnnualCost}
            monthlySalary={monthlySalary}
            setMonthlySalary={setMonthlySalary}
            validateNumber={validateNumber}
            setPhase={setPhase}
            isNextPhaseAvailable={isNextPhaseAvailable}
            services={services}
            addNewService={addNewService}
            updateService={updateService}
            isLoading={isLoading}
            />: <CalculatorResults 
            goingBackCallback={() => resetTheCalculator()} 
            businesCost={annualCost}
            monthlySalary={monthlySalary}
            BEP={BEP}
            totalClientsNumber={clientsNumber}
            previousServices={services}
            newServicesByPrice={newPricesServices}
            newServicesByClients={newClientsServices}
            />
        }
    </>
};

export default Calculator;
