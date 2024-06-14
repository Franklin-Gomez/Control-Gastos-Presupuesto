import { DraftExpense } from "../Types"
import { v4 as uuidv4} from 'uuid'
import { Expense } from "../Types"
import { act } from "react"
import FilterExpense from "../Components/FilterExpense"

// actions
export type  BubdgetActions  =
{ type : 'add-budget' ,  payload : { budget : number } } |
{ type : 'show-modal'} | 
{ type : 'close-modal'} |
{ type : 'add-expense' , payload : { expense : DraftExpense }} |
{ type : 'delete-expense' , payload : { expense  : Expense['id'] }} | 
{ type : 'select-expense' , payload : { id  : Expense['id'] }} |
{ type : 'edit-expense' , payload : { expense : Expense }} |
{ type : 'filter-expense' , payload : { id : Expense['id'] }}


// Types
export type budgetTypes = { 
    budget : number ,
    modal : boolean , 
    expense : Expense[],
    editingId : Expense['id'],
    filterExpense : Expense['id']
}

const initialValueBudget = () : number  => { 
    // getting stored value
    const initialValue = localStorage.getItem("budget");
    return initialValue ? +initialValue : 0 
}

const initialStateExpenses = () : Expense[] => { 
    const localStorageExpenses = localStorage.getItem('expenses')
    return localStorageExpenses ? JSON.parse(localStorageExpenses) : []
}

// states
export const initialState : budgetTypes = { 
    budget  : initialValueBudget() ,
    modal : false,
    expense : initialStateExpenses(),
    editingId : '',
    filterExpense : ''
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
            modal : false,
            editingId : ''
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

        const filterExpense = state.expense.filter(( expense ) => expense.id !== actions.payload.expense )

        return { 
            ...state ,
            expense : filterExpense
        }
    }

    if( actions.type == 'select-expense')  { 
        return { 
            ...state,
            modal : true,
            editingId : actions.payload.id
        }
    }

    if( actions.type == 'edit-expense')  { 
        
        const updateExpense = state.expense.map(( exp ) => exp.id == actions.payload.expense.id ? actions.payload.expense : exp )

        return { 
            ...state,
            modal : false,
            editingId : '',
            expense : updateExpense
        }
    }

    if( actions.type == 'filter-expense') { 

        return { 
            ...state ,
            filterExpense : actions.payload.id
        }
    }

    return state

}