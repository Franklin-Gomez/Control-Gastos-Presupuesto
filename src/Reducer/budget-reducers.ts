import { Expense } from "../Types"

// actions
export type  BubdgetActions  =
{ type : 'add-budget' ,  payload : { budget : number } } |
{ type : 'show-modal'} | 
{ type : 'add-expense' , payload : { expense : Expense }}


// Types
export type budgetTypes = { 
    budget : number ,
    modal : boolean , 
    expense : []
}

// states
export const initialState : budgetTypes = { 
    budget  : 0 ,
    modal : false,
    expense : []
}

// Dispatch - Reducers
export const BudgetReducers = (

    state : budgetTypes = initialState ,
    actions : BubdgetActions

    ) => { 

    if ( actions.type == 'add-budget') { 
        return {
            ...state,
            budget : actions.payload.budget
        }
    }

    if( actions.type == 'show-modal') { 
        return {
            ...state , 
            modal : true
        }
    }

    if( actions.type == 'add-expense') { 
        return {
            ...state,
            expense : actions.payload.expense
        }
    }

    return state

}