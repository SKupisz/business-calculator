import axios from "axios";
import { serviceType } from "components/calculator/calculator";

const calculateTheResults = async(
    annualCost: number,
    monthlySalary: number,
    services: serviceType[],
    setBEP: (newState: number) => void,
    setTotalNumbersOfClients: (newState: number) => void,
    setNewPrices: (newState: serviceType[]) => void,
    setNewClients: (newState: serviceType[]) => void,
    toggleIsLoading: (newState: boolean) => void,
    toggleAreResultsAvailable: (newState: boolean) => void,
) => {
    toggleIsLoading(true);
    await axios.post(`${process.env.NEXT_PUBLIC_CONNECTION_TO_SERVER}/services`, {
        salary: monthlySalary,
        businessCost: annualCost,
        services: JSON.stringify(services)
    }, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((res) => {
        setBEP(res.data.totalBEP);
        setTotalNumbersOfClients(res.data.totalClients);
        setNewPrices(res.data.newPrices);
        setNewClients(res.data.newNumberOfClients);
        toggleIsLoading(false);
        toggleAreResultsAvailable(true);
    })
    .catch(err => console.log(err));
};

export default calculateTheResults;