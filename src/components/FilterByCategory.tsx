import { categories } from "../data/db";
import { useBudget } from "../hooks/useBudget";
import React from "react"


export default function FilterByCategory() {

    const { dispatch  } = useBudget()

    const handleChange = (e : React.ChangeEvent<HTMLSelectElement>) => { 
       dispatch({ type : 'add-filter-category' , payload : { id : e.target.value}})
    }

    return (  
        <div className="bg-white shadow-lg rounded-lg p-10">
            <form>
                <div className=" flex flex-col md:flex-row md:items-center gap-5">
                    <label htmlFor="category" className=" font-bold"> Filtrar Gastos</label>
                    <select 
                        id="category"
                        className="bg-slate-100 p-3 flex-1 rounded"
                        onChange={handleChange}
                    >
                        <option value=""> -- Selecciona una Categoria -- </option>

                        {categories.map((categoria) => 
                        
                            <option 

                                value={categoria.id}
                                key={categoria.id}
                               
                            > { categoria.name}</option>
                        )}
                    </select>
                    
                </div>
            </form>
        </div>
    )
}
