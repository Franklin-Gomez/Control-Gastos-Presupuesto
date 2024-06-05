// actions
export type  BubdgetActions  =
{ type : 'add-budget' ,  payload : { budget : number } } 

// Types
export type budgetTypes = { 
    budget : number 
}

// states
export const initialState : budgetTypes = { 
    budget  : 0
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

    return state

}