import { createContext ,  useReducer } from "react";
import { BudgetReducers , initialState } from "../Reducer/budget-reducers";
import { budgetTypes , BubdgetActions } from "../Reducer/budget-reducers";

type BudgetContextProps = { 
    state : budgetTypes
    dispatch : React.Dispatch<BubdgetActions>
}


// Context
export const BudgetContext = createContext<BudgetContextProps>(null!)


// Provider
export const BudgetProvider = () => { 

    const [ state , dispatch ] = useReducer( BudgetReducers , initialState )

    return {
        state,
        dispatch
    }

}