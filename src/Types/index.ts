// form Expense Type
export type Expense = {
    id : string, 
    nameExpense : string , 
    amount : number,
    category : string,
    date : Value 
}

// Form Expense Type sin id
export type DraftExpense = Omit<Expense, 'id'>

// Types Date
export type ValuePiece = Date | null;
export type Value = ValuePiece | [ValuePiece, ValuePiece];


// database type
export type category = { 
    id : string , 
    name : string , 
    icon : string
}