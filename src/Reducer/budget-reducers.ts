import { DraftExpense } from "../Types"
import { v4 as uuidv4} from 'uuid'
import { Expense } from "../Types"

// actions
export type  BubdgetActions  =
{ type : 'add-budget' ,  payload : { budget : number } } |
{ type : 'show-modal'} | 
{ type : 'close-modal'} |
{ type : 'add-expense' , payload : { expense : DraftExpense }} |
{ type : 'delete-expense' , payload : { expense  : Expense }}


// Types
export type budgetTypes = { 
    budget : number ,
    modal : boolean , 
    expense : Expense[]
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

        // add id         
        const createExpense = ( expense : DraftExpense)  : Expense => {
            return {
                ...expense,
                id : uuidv4()
            }
        }

        return {
            ...state,
            expense : [ ...state.expense , createExpense( actions.payload.expense )] ,
            modal : false
        }
    
    }

    if( actions.type == 'delete-expense') { 

        const filterExpense = state.expense.filter(( expense ) => expense.id !== actions.payload.expense.id )

        return { 
            ...state ,
            expense : filterExpense
        }
    }

    return state

}