import { createContext ,  useReducer } from "react";
import { BudgetReducers , initialState , budgetTypes , BubdgetActions } from "../Reducer/budget-reducers";
import { ReactNode } from "react";

type BudgetContextProps = { 
    state : budgetTypes
    dispatch : React.Dispatch<BubdgetActions>
}

type BudgetProviderProps = { 
    children : ReactNode
}

// Context
export const BudgetContext = createContext<BudgetContextProps>(null!)

// Provider
export const BudgetProvider = ( { children } : BudgetProviderProps ) => { 

    const [ state , dispatch ] = useReducer( BudgetReducers , initialState )

    return (
        
        <BudgetContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            { children }
        </BudgetContext.Provider>
    )
}