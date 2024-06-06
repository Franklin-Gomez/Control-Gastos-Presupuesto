// form Expense Type
export type Expense = {
    id : string, 
    name : string , 
    amount : number,
    category : string,
    date : string 
}

// database type
export type category = { 
    id : string , 
    name : string , 
    icon : string
}