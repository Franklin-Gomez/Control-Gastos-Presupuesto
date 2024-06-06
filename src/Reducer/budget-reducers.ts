// actions
export type  BubdgetActions  =
{ type : 'add-budget' ,  payload : { budget : number } } |
{ type : 'show-modal'}

// Types
export type budgetTypes = { 
    budget : number ,
    modal : boolean
}

// states
export const initialState : budgetTypes = { 
    budget  : 0 ,
    modal : false
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

    return state

}