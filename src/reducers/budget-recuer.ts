export type BudgetActions = 
    { type : 'add-budget' , payload : { budget : number }}

export type BudgetType = { 
    budget : number
}

export const initialState : BudgetType = {
    budget : 0
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

    return state
}