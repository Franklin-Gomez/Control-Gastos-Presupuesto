import { useState } from "react"


export default function BudgetForm() {

    const [ budget , setBudget ] = useState(0)

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => { 
        setBudget( +e.target.value )
    }

    return (
        <div>
            <form className="space-y-5">

                <div className=" flex flex-col space-y-5">
                    <label htmlFor="budget" className=" text-4xl text-blue-600 font-bold text-center">
                        Definir Presupuesto
                    </label>

                    <input
                        id="budget"
                        type="number"
                        className=" w-full bg-white border border-gray-200 p-2"
                        placeholder="Define tu Presupuesto"
                        name="budget"
                        onChange={handleChange}
                    />
                    
                </div>

                <input 
                    type="submit" 
                    value='Definit Presupuesto'
                    className=" bg-blue-600 hover:bg-blue-700 cursor-pointer w-full p-2 text-white font-black uppercase"
                />
            </form>
        </div>
    )
}
