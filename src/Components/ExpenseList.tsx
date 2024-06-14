
import { useMemo } from "react"
import { useBudget } from "../CustomHook/useContext"
import ExpenseDetails from "./ExpenseDetails"

export default function ExpenseList() {

    const { state } = useBudget()

    const filtracion =  state.filterExpense ? state.expense.filter((expense) => expense.category == state.filterExpense ) : state.expense

    const isEmpty = useMemo(() =>  filtracion.length == 0   , [state.expense])

    console.log( filtracion )

    return (
        <>
        
            <h1 className="text-center font-bold text-3xl"> Listado de Gastos </h1>

            { isEmpty ? 
            
                <h1 className="text-center font-bold uppercase mt-5"> No hay Gastos Aun </h1>

                :

                filtracion.map( expense  => (

                    <ExpenseDetails
                        key={expense.id}
                        expense={expense}
                    />

                ))
        
            }

        </>
    )
}
    