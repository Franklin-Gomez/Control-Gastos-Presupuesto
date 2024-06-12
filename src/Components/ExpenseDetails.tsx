import { useMemo } from "react"
import { Expense } from "../Types"
import { categories } from "../data/db"
import { formatDate } from "../helpers"

type ExpenseDetailsProps = { 
    expense : Expense
}



export default function ExpenseDetails( { expense } : ExpenseDetailsProps) {

    const categoryInfo = useMemo(() => categories.filter(( categoria ) => categoria.id == expense.category)[0] , [expense])

    return (
        <div className="flex gap-5 w-full items-center border-b-2 border-blue-600 p-4" key={expense.id}>

            <img src={`/icono_${categoryInfo.icon}.svg`} className=" w-20"/>

            <div className="w-full gap-y-2">
                <h6 className="uppercase font-bold"> { categoryInfo.name} </h6>
                <p> {expense.nameExpense} </p>
                <time> { formatDate( expense.date!.toString() )} </time>
            </div>

            <p className=" text-2xl flex font-bold">{ expense.amount }</p>

        </div>
    )
}
