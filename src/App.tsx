import Header from "./Components/Header"
import FormPresupuesto from "./Components/FormPresupuesto"
import { useBudget } from "./CustomHook/useContext"

function App() {

  const { state } = useBudget()

  console.log( state.budget )

  return (
    <>
      <Header/>

      <FormPresupuesto/>      
      
    </>
  )
}

export default App
