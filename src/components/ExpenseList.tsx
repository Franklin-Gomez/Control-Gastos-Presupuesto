import { useMemo } from "react"
import { useBudget } from "../hooks/useBudget"
import ExpenseDetail from "./ExpenseDetail"

export default function ExpenseList() {

    const { state } = useBudget()

    const isEmpty = useMemo( () => state.expenses.length == 0 , [state.expenses])

    return (

        <div>
            { isEmpty ? 
                <p className="text-gray-600 text-2xl font-bold text-center"> No Hay Gastos</p> 
                : 
                <>
                    <p className="text-gray-600 text-2xl font-bold my-5 text-center "> Listado de Gastos </p>
                    {state.expenses.map( expense => ( 
                        <ExpenseDetail
                            key={expense.id}
                            expense={expense}
                        />
                    ))}
                </>
            }
        </div>
    )
}