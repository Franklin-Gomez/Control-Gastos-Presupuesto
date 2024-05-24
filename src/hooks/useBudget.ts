import { useContext } from "react"; // Hook
import { BudgetContext } from "../context/BubdgetContext"; // nuestro contex

export const useBudget = () => { 
    const context = useContext( BudgetContext )

    if(!context ){
        throw new Error('useBudget must be used within a BudgetProvider')
    }
    
    return context 
}