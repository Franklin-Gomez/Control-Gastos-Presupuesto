// types para el registro  gruardado
export type Expense = { 
    id : string
    expenseName : string
    amount : number 
    category : string 
    date : Value
}

//  no le añáde el id , por que se un registro temporal
export type DraftExpense = Omit<Expense, 'id'>

// types de la dependencia de date
export type ValuePiece = Date | null;
export type Value = ValuePiece | [ValuePiece, ValuePiece];

// types para la database
export type category = { 
    id : string
    name : string 
    icon : string 
}