import Header from "./Components/Header"
import FormPresupuesto from "./Components/FormPresupuesto"
import { useBudget } from "./CustomHook/useContext"
import BudgetTracket from "./Components/BudgetTracket"
import ExpenseList from "./Components/ExpenseList"
import ExpenseModal from "./Components/ExpenseModal"

function App() {

  const { state } = useBudget()

  return (
    <>
      <Header/>

      { state.budget ?  <BudgetTracket/>  :  <FormPresupuesto/>}


      { state.budget > 0  && ( 
        <main className="max-w-3xl mx-auto py-10 mt-6 border border-blue-600 shadow-lg rounded-lg p-5 mb-5">
          <ExpenseList/>                                                              
          <ExpenseModal/>
        </main>
      )}
    </>
  )
}

export default App
