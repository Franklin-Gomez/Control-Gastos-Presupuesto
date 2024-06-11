import { DraftExpense } from "../Types"

// actions
export type  BubdgetActions  =
{ type : 'add-budget' ,  payload : { budget : number } } |
{ type : 'show-modal'} | 
{ type : 'close-modal'} |
{ type : 'add-expense' , payload : { expense : DraftExpense }}


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

    if( actions.type == 'close-modal'){
        return { 
            ...state,
            modal : false
        }
    }

    if( actions.type == 'add-expense') { 
        return {
            ...state,
            expense : [ ...state.expense , actions.payload.expense ]
        }
    }

    return state

}