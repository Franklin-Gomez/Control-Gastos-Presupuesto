// form Expense Type
export type Expense = {
    id : string, 
    name : string , 
    amount : number,
    category : string,
    date : Value 
}

// Types Date
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];


// database type
export type category = { 
    id : string , 
    name : string , 
    icon : string
}