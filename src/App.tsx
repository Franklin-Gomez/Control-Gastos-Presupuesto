import Header from "./Components/Header"
import FormPresupuesto from "./Components/FormPresupuesto"
import { useBudget } from "./CustomHook/useContext"
import BudgetTracket from "./Components/BudgetTracket"
import ExpenseList from "./Components/ExpenseList"
import ExpenseModal from "./Components/ExpenseModal"
import { useEffect } from "react"
import FilterExpense from "./Components/FilterExpense"

function App() {

  const { state } = useBudget()

  useEffect(() =>{
    localStorage.setItem('budget', state.budget.toString())
    localStorage.setItem('expenses', JSON.stringify(state.expense))
  }, [state] )

  return (
    <>
      <Header/>

      { state.budget ?  <BudgetTracket/>  :  <FormPresupuesto/>}

      { state.budget > 0  && ( 

        <>

          <FilterExpense/>

          <main className="max-w-3xl mx-auto py-10 mt-6 border border-blue-600 shadow-lg rounded-lg p-5 mb-5 bg-white">
          
            <ExpenseList/>                                                              
            <ExpenseModal/>

          </main>

        </>

      )}
    </>
  )
}

export default App
