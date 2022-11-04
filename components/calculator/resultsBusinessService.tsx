import React, {useState} from "react";
import { motion } from "framer-motion";

import { ResultsCategoryBusinessServiceOpening, ResultsCategoryBusinessServiceWrapper, ResultsCategoryBusinessService, 
    ResultsCategoryBusinessServiceHeader, ResultsCategoryBusinessServiceSubHeader } from "styled/calculator/results";

interface ResultsBusinessServiceInterface {
    serviceNumber: number,
    clientsNumber: number,
    currentPrice: number,
}

const ResultsBusinessService:React.FC<ResultsBusinessServiceInterface> = ({
    serviceNumber,
    clientsNumber, 
    currentPrice
}:ResultsBusinessServiceInterface) => {

    const [isOpened, toggleIsOpened] = useState<boolean>(false);

    return <ResultsCategoryBusinessServiceWrapper>
        <ResultsCategoryBusinessServiceOpening className="block-center" onClick={() => toggleIsOpened(!isOpened)}
            isChosen={isOpened}>
            Service {serviceNumber}
        </ResultsCategoryBusinessServiceOpening>
        <motion.section style={{overflow: "hidden"}} layout initial={{
            height: "0vh"
        }} animate={{
            height: isOpened ? "fit-content" : "0vh"
        }} transition={{
            duration: 0.4
        }}>
            <ResultsCategoryBusinessService>
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

        </motion.section>
    </ResultsCategoryBusinessServiceWrapper>
}

export default ResultsBusinessService;
