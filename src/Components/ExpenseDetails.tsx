import { useMemo } from "react"
import { Expense } from "../Types"
import { categories } from "../data/db"
import { formatDate } from "../helpers"
import { formatCurrency } from "../helpers"

import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';  
import { useBudget } from "../CustomHook/useContext";

type ExpenseDetailsProps = { 
    expense : Expense
}

export default function ExpenseDetails( { expense } : ExpenseDetailsProps) {

    const { dispatch } = useBudget()

    const categoryInfo = useMemo(() => categories.filter(( categoria ) => categoria.id == expense.category)[0] , [expense])

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => dispatch( { type : 'select-expense' , payload : { id : expense.id} })}>
                Actualizar
            </SwipeAction>
        </LeadingActions>
    )
      
    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction
            onClick={() => dispatch( { type : 'delete-expense' , payload : { expense : expense.id }} )}
            >
                Delete
            </SwipeAction>
        </TrailingActions>
    )

    return (

        <SwipeableList>
            <SwipeableListItem
                maxSwipe={30}
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className="flex gap-5 w-full items-center border-b-2 border-blue-600 p-4" key={expense.id}>

                    <img src={`/icono_${categoryInfo.icon}.svg`} className=" w-20"/>

                    <div className="w-full gap-y-2">
                        <h6 className="uppercase font-bold"> {expense.nameExpense} </h6>
                        <p> { categoryInfo.name}  </p>
                        <time> { formatDate( expense.date!.toString() )} </time>
                    </div>

                    <p className=" text-2xl flex font-bold"> { formatCurrency (expense.amount) }</p>

                </div>
            </SwipeableListItem>
        </SwipeableList>

    )
}
