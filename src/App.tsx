import Header from "./Components/Header"
import FormPresupuesto from "./Components/FormPresupuesto"
import { useBudget } from "./CustomHook/useContext"
import BudgetTracket from "./Components/BudgetTracket"

function App() {

  const { state } = useBudget()

  return (
    <>
      <Header/>

      { state.budget ? <BudgetTracket/> : <FormPresupuesto/>   }     
      
    </>
  )
}

export default App
