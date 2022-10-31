import React from "react";
import NextWeekIcon from '@mui/icons-material/NextWeek';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { motion } from "framer-motion";
import { CalculatorContainer, CalculatorServiceWrapper, CalculatorCardWrapper, CalculatorCardContent, CalculatorCardHeader, CalculatorCardInput,
    CalculatorNextPageIconWrapper } from "styled/calculator";


export type serviceType = {
        currentPrice: number|undefined;
      clientsNumber: number|undefined;
};
    

interface CalculatorComponentInterface {
    phase: number,
    annualCost: number|undefined,
    setAnnualCost: (newState: number|undefined) => void,
    monthlySalary: number|undefined,
    setMonthlySalary: (newState: number|undefined) => void,
    validateNumber: (newState: string, callback: (newState: number|undefined) => void ) => void,
    setPhase: (newState: number) => void,
    isNextPhaseAvailable: boolean,
    services: serviceType[],
    addNewService: () => void,
    updateService: (newState: string, index: number, property: number) => void,
}

const CalculatorComponent:React.FC<CalculatorComponentInterface> = ({
    phase,
    annualCost,
    setAnnualCost,
    monthlySalary,
    setMonthlySalary,
    validateNumber,
    setPhase,
    isNextPhaseAvailable,
    services,
    addNewService,
    updateService,
}:CalculatorComponentInterface) => {
    return <CalculatorContainer className="block-center">
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
};

export default CalculatorComponent;
