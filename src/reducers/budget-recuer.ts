export type BudgetActions = 
    { type : 'add-budget' , payload : { budget : number }} |
    { type : 'show-modal'}

export type BudgetType = { 
    budget : number
    modal : boolean
}

export const initialState : BudgetType = {
    budget : 0,
    modal : false
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

    return state
}