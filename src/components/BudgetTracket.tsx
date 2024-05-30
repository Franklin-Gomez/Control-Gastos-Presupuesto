import { useEffect, useMemo } from "react"
import AmountDisplay from "./AmountDisplay"
import { useBudget } from "../hooks/useBudget"


export default function BudgetTracket() {

    const { state } = useBudget();

    const totalExpense = useMemo(() => state.expenses.reduce(( total , expense) => expense.amount + total , 0) , [state.expenses] )

    const disponible = state.budget - totalExpense

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5"> 

                <div className="flex justify-center"> 
                    <img src="/grafico.jpg" alt="Grafico de gastos"/>
                </div>

                <div className="flex flex-col justify-center items-center gap-8">

                    <button
                        type="button"
                        className="bg-pink-600 w-full p-2 text-while uppercase font-bold rounded-lg"
                    >
                        Resetear App
                    </button>


                    <AmountDisplay
                        label="Presupuesto"
                        amount={state.budget}
                    />

                    <AmountDisplay
                        label="Gastado"
                        amount={totalExpense}
                    />

                    <AmountDisplay
                        label="Disponible"
                        amount={disponible}
                    />


                </div>
                
            </div>
        </div>
    )
}
