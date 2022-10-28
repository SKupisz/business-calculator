import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import NextWeekIcon from '@mui/icons-material/NextWeek';

import { CalculatorHeader, CalculatorContainer, CalculatorCardWrapper, CalculatorCardHeader, CalculatorCardInput,
    CalculatorNextPageIconWrapper } from "styled/calculator";

const Calculator: NextPage = () => {

    const [phase, setPhase] = useState<number>(0); // 0 - basic business data, 1 - services, 2 - summary and submitting
    const [isNextPhaseAvailable, toggleIsNextPhaseAvailable] = useState<boolean>(false);

    const [annualCost, setAnnualCost] = useState<number|undefined>();
    const [monthlySalary, setMonthlySalary] = useState<number|undefined>();


    const validateNumber = (numberToValidate: string, assigningCallback: (newState: number) => void):void => {
        const operand = parseInt(numberToValidate);
        numberToValidate === "" ? assigningCallback(undefined) : operand >= 0 ? assigningCallback(operand) : null;
    }

    useEffect(() => {
        toggleIsNextPhaseAvailable(annualCost !== undefined && monthlySalary !== undefined);
    }, [annualCost, monthlySalary]);

    return <>
        <CalculatorHeader className="block-center">
            {`Let's calculate!`}
        </CalculatorHeader>
        <CalculatorContainer className="block-center">
            <motion.div animate={{
                x: phase === 0 ? ["100%", "0%"] : ["0%", "-100%"]
            }} transition={{
                duration: 0.4,
                repeat: 0
            }}>
                <CalculatorCardWrapper className="block-center">
                <CalculatorCardHeader className="block-center">
                    Basic business data
                </CalculatorCardHeader>
                <CalculatorCardInput type="number" name="businessCost" placeholder="Annual business cost..."
                value={annualCost} onChange={(e: React.ChangeEvent<HTMLInputElement>) => validateNumber(e.currentTarget.value, setAnnualCost)}/>
                <CalculatorCardInput type="number" name="salary" placeholder="Your mothly salary..." 
                value={monthlySalary} onChange={(e: React.ChangeEvent<HTMLInputElement>) => validateNumber(e.currentTarget.value, setMonthlySalary)}/>
                {
                    isNextPhaseAvailable ? <CalculatorNextPageIconWrapper className="block-center">
                        <NextWeekIcon style={{ color: "inherit", fontSize: "inherit" }} onClick={() => setPhase(1)} />
                        </CalculatorNextPageIconWrapper> : null
                }
            </CalculatorCardWrapper>
            </motion.div>
            
        </CalculatorContainer>
    </>
};

export default Calculator;
