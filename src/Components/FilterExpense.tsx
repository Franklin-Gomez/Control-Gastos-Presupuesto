import { useBudget } from "../CustomHook/useContext"
import { categories } from "../data/db"

export default function FilterExpense() {

    const { state , dispatch } = useBudget()

    const handleChange = ( e : React.ChangeEvent<HTMLSelectElement>) => { 

        dispatch( { type : 'filter-expense' , payload : { id : e.target.value }})
    }

    return (
        <>
            <div className=" mt-6 bg-white max-w-3xl mx-auto rounded-lg border border-blue-600 p-5 shadow-lg">
                <form action="">

                    <div className="flex flex-col md:flex-row items-center gap-2">
                        <label htmlFor="" className="font-bold  "> Filtrar Gastos </label>
                        <select 
                            name="cateogira" 
                            id="categoria"
                            className="p-3 rounded bg-slate-100 flex-1"
                            onChange={ handleChange }
                        >
                            <option value="" className=" text-gray-300"> -- Selecciona un Opcion -- </option>

                            { categories.map (( cate ) => ( 

                                <option  id={cate.id } value={cate.id} key={cate.id} > { cate.name }</option>

                            ))}

                        </select>
                    </div>

                </form>
            </div>
        </>
    )
}
