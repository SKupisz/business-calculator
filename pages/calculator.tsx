import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import NextWeekIcon from '@mui/icons-material/NextWeek';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { CalculatorHeader, CalculatorContainer, CalculatorCardWrapper, CalculatorCardContent, CalculatorCardHeader, CalculatorCardInput,
    CalculatorServiceWrapper,
    CalculatorNextPageIconWrapper } from "styled/calculator";

type serviceType = {
    currentPrice: number|undefined;
  clientsNumber: number|undefined;
};

const Calculator: NextPage = () => {

    const [phase, setPhase] = useState<number>(0); // 0 - basic business data, 1 - services, 2 - summary and submitting
    const [isNextPhaseAvailable, toggleIsNextPhaseAvailable] = useState<boolean>(false);

    const [annualCost, setAnnualCost] = useState<number|undefined>();
    const [monthlySalary, setMonthlySalary] = useState<number|undefined>();
    const [services, setServices] = useState<serviceType[]>([]);

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

    const addNewService = () => {
        if(services.length < 3){
            const operand = [...services];
            operand.push({
                clientsNumber: undefined,
                currentPrice: undefined
            });
            setServices(operand);
        }
    }

    useEffect(() => {
        toggleIsNextPhaseAvailable((phase === 0 && annualCost !== undefined && monthlySalary !== undefined) || (
            phase === 1 && services.length > 0 && services.filter((elem: serviceType) => elem.clientsNumber === undefined || 
            (elem.clientsNumber !== undefined && elem.clientsNumber === 0) || elem.currentPrice === undefined || 
            (elem.currentPrice !== undefined && elem.currentPrice === 0)).length === 0
        ));
    }, [phase, annualCost, monthlySalary, services]);

    return <>
        <CalculatorHeader className="block-center">
            {`Let's calculate!`}
        </CalculatorHeader>
        <CalculatorContainer className="block-center">
            <motion.div style={{ 
                width: "100%",
                display: "inline-block",
                verticalAlign: "top"
            }} animate={{
                marginLeft: phase === 0 ? ["100%", "0%"] : ["0%", "-100%"]
            }} transition={{
                duration: 0.4,
                repeat: 0
            }}>
                <CalculatorCardWrapper>
                    <CalculatorCardContent className="block-center">
                        <CalculatorCardHeader className="block-center">
                            Basic business data
                        </CalculatorCardHeader>
                        <CalculatorCardInput type="number" name="businessCost" placeholder="Annual business cost..."
                        value={annualCost === undefined ? "" : annualCost} onChange={(e: React.ChangeEvent<HTMLInputElement>) => validateNumber(e.currentTarget.value, setAnnualCost)}/>
                        <CalculatorCardInput type="number" name="salary" placeholder="Your mothly salary..." 
                        value={monthlySalary === undefined ? "" : monthlySalary} onChange={(e: React.ChangeEvent<HTMLInputElement>) => validateNumber(e.currentTarget.value, setMonthlySalary)}/>
                        {
                            isNextPhaseAvailable ? <CalculatorNextPageIconWrapper className="block-center">
                                <NextWeekIcon style={{ color: "inherit", fontSize: "inherit" }} onClick={() => setPhase(1)} />
                                </CalculatorNextPageIconWrapper> : null
                        }

                    </CalculatorCardContent>
                </CalculatorCardWrapper>
            </motion.div>
            <motion.div style={{ 
                width: "100%",
                display: "inline-block",
                verticalAlign: "top"
            }} animate={{
                marginLeft: phase < 1 ? ["100%", "100%"] : phase === 1 ? ["100%", "0%"] : ["0%", "-100%"]
            }} transition={{
                duration: 0.4,
                repeat: 0
            }}>
                <CalculatorCardWrapper>
                    <CalculatorCardContent className="block-center">
                        <CalculatorCardHeader className="block-center">
                            Services data
                        </CalculatorCardHeader>
                        {
                            services.map((elem: serviceType, ind: number) => <CalculatorServiceWrapper className="block-center" key={`service-${ind}`}>
                                <CalculatorCardInput type="number" name="businessCost" placeholder={`Service ${ind+1} current price`} min="0"
                                    value={elem.currentPrice === undefined ? "" : elem.currentPrice} onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateService(e.currentTarget.value, ind, 0)}/>
                                <CalculatorCardInput type="number" name="salary" placeholder={`Service ${ind+1} number of clients`} min="0"
                                    value={elem.clientsNumber === undefined ? "" : elem.clientsNumber} onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateService(e.currentTarget.value, ind, 1)}/>
                            </CalculatorServiceWrapper>)
                        }
                        {
                            services.length < 3 ? <CalculatorNextPageIconWrapper className="block-center">
                                <AddCircleIcon style={{ color: "inherit", fontSize: "inherit" }} onClick={() => addNewService()}/>
                            </CalculatorNextPageIconWrapper>: null
                        }
                        
                        {
                            isNextPhaseAvailable ? <CalculatorNextPageIconWrapper className="block-center">
                                <NextWeekIcon style={{ color: "inherit", fontSize: "inherit" }} onClick={() => setPhase(1)} />
                            </CalculatorNextPageIconWrapper> : null
                        }

                    </CalculatorCardContent>
                </CalculatorCardWrapper>
            </motion.div>
            
        </CalculatorContainer>
    </>
};

export default Calculator;
