import React, {useState} from "react";
import { motion } from "framer-motion";

import { ResultsUserBusinessCost, ResultsUserBusinessCostHeader, ResultsUserBusinessCostWrapper } from "styled/calculator/results";

interface ResultsBusinessCostInterface {
    costName: string,
    cost: number
}

const ResultsBusinessCost:React.FC<ResultsBusinessCostInterface> = ({
    costName,
    cost
} : ResultsBusinessCostInterface) => {

    const [isOpened, toggleIsOpened] = useState<boolean>(false);

    return <ResultsUserBusinessCostWrapper>
        <ResultsUserBusinessCost isClickable={true} onClick={() => toggleIsOpened(!isOpened)}>
            <ResultsUserBusinessCostHeader className="block-center">
                {costName}
            </ResultsUserBusinessCostHeader>
        </ResultsUserBusinessCost>    
        <motion.div layout style={{overflow: "hidden"}} initial={{
            height: 0
        }} animate={{
            height: isOpened ? "fit-content" : "0vh"
        }} transition={{
            duration: 0.4
        }} >
            <ResultsUserBusinessCost>
                <ResultsUserBusinessCostHeader className="block-center">
                    {`${cost}$`}
                </ResultsUserBusinessCostHeader>
            </ResultsUserBusinessCost>
        </motion.div>
    </ResultsUserBusinessCostWrapper>
};

export default ResultsBusinessCost;
