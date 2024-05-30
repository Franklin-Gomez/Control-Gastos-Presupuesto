import { createContext, useReducer , ReactNode } from "react";
import { BudgetRecuder , initialState , BudgetType , BudgetActions } from "../reducers/budget-recuer";
import { useMemo } from "react";


type BudgetContextProps = { 
    state : BudgetType
    dispatch : React.Dispatch<BudgetActions>
    totalExpense : number,
    disponible : number
}

type BudgetProviderProps = { 
    children : ReactNode
}

// Context
export const BudgetContext = createContext<BudgetContextProps>(null!)
// null! simplemente para evitar un error

// Provider 
// poder traernos los datos y poder acceder a estos 
export const BudgetProvider = ({children} : BudgetProviderProps ) => { 

    const [ state , dispatch ] = useReducer( BudgetRecuder , initialState )

    const totalExpense = useMemo(() => state.expenses.reduce(( total , expense) => expense.amount + total , 0) , [state.expenses] )

    const disponible = state.budget - totalExpense

    return (

        <BudgetContext.Provider
            value={{
                state,
                dispatch,
                totalExpense,
                disponible
            }}
        >
            {children}

        </BudgetContext.Provider>

    )
}