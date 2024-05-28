import { DraftExpense, Expense } from "../types"
import { v4 as uuidv4 } from 'uuid';



export type BudgetActions = 
    { type : 'add-budget' , payload : { budget : number }} |
    { type : 'show-modal'} | 
    { type : 'close-modal'} |
    { type : 'add-expense' , payload : { expense : DraftExpense }} 

export type BudgetType = { 
    budget : number
    modal : boolean
    expenses : Expense[]
}

export const initialState : BudgetType = {
    budget : 0,
    modal : false,
    expenses : []
}

// recibe el registro sin id , y devuelve con id
const createExpense = ( expense : DraftExpense)  : Expense => { 
    return {
        ...expense,
        id : uuidv4()
    }
}

export const BudgetRecuder = (

    state : BudgetType = initialState,
    action : BudgetActions

) => { 

    if( action.type == 'add-budget'){
        return {
            ...state,
            budget : action.payload.budget
        }
    }

    if( action.type == 'show-modal') {
        return {
            ...state,
            modal : true
        }
    }

    if( action.type == 'close-modal') {
        return {
            ...state,
            modal : false
        }
    }

    
    if( action.type == 'add-expense') {

        const expense = createExpense(  action.payload.expense )

        return {
            ...state,
            expenses : [...state.expenses , expense ] ,
            modal : false
        }
    }

    return state
}