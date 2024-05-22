import { createContext, useReducer , ReactNode } from "react";
import { BudgetRecuder , initialState , BudgetType , BudgetActions } from "../reducers/budget-recuer";


type BudgetContextProps = { 
    state : BudgetType
    dispatch : React.Dispatch<BudgetActions>
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

    return (

        <BudgetContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {children}

        </BudgetContext.Provider>

    )
}