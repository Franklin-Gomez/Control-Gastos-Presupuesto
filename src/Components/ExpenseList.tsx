
import { useMemo } from "react"
import { useBudget } from "../CustomHook/useContext"
import ExpenseDetails from "./ExpenseDetails"

export default function ExpenseList() {

    const { state } = useBudget()

    const isEmpty = useMemo(() =>  state.expense.length == 0   , [state.expense])

    return (
        <>
            <h1 className="text-center font-bold text-3xl"> Listado de Gastos </h1>

                { isEmpty ? 
                
                    <h1> No hay Gastos Aun </h1>

                    :

                    state.expense.map( expense  => (
                        
                        <ExpenseDetails
                            key={expense}
                            expense={expense}
                        />
                    
                    ))
            
                }

        </>
    )
}
    