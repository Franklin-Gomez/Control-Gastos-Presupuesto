import { useMemo, useState } from "react"
import { useBudget } from "../CustomHook/useContext"

export default function FormPresupuesto() {

  const [ budget , setBudget ] = useState(0)
  const { dispatch } = useBudget()

  const handleChange = ( e : React.ChangeEvent<HTMLInputElement> ) => { 
    setBudget( +e.target.value )
  }

  const isValid = useMemo(() => { 

    return budget == 0 ? true : false ;

  } , [ budget ] )

  const handleSubmit = ( e : React.FormEvent<HTMLFormElement> ) => { 

    e.preventDefault();

    dispatch( {type : 'add-budget' , payload : { budget : budget } } )

  }

  return (

    <div className=" my-10 items-center max-w-3xl mx-auto shadow-xl" >

      <form action="" className=" space-y-5 bg-white p-10 rounded-xl" onSubmit={ handleSubmit} >

        <div className=" flex flex-col ">

          <label htmlFor="" className=" text-blue-600 font-bold mb-4 text-center text-4xl"> Definir Presupuesto</label>
          <input type="number" className=" px-2 py-1 w-auto rounded border border-blue-600 " placeholder="Define tu Presupuesto" onChange={  handleChange  }/>

        </div>

        <input type="submit" value={'Definir Presupuesto'} className=" py-3 w-full bg-blue-600 text-white font-bold uppercase disabled:bg-blue-300" disabled= {isValid}  />

      </form>

    </div>
  )
}
