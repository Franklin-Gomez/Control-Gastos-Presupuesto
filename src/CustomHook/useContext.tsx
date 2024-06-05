import { useContext } from "react"; // Hook
import { BudgetContext } from "../Context/BudgetContext";
BudgetContext // Context

export const useBudget = () => { 
    const context = useContext( BudgetContext )

    if(!context ){
        throw new Error('useBudget must be used within a BudgetProvider')
    }
    
    return context 
}