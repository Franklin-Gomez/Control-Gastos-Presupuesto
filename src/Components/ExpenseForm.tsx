import { categories } from "../data/db"

export default function ExpenseForm() {
  return (
    <>
        <h1 className=" p-5 text-center border-b-2 border-blue-600 text-2xl uppercase font-bold"> Guardar Nuevo Gasto </h1>

        <form className="flex  flex-col gap-y-4">

            <div className="flex flex-col mt-4 gap-y-2">
                <label htmlFor="nombre" className="font-bold text-xl">Nombre Gasto :</label>
                <input type="text" placeholder="Añade el Nombre del Gasto" id="nombre" className=" p-2 bg-gray-200 rounded-lg" />
            </div>

            <div className="flex flex-col">
                <label htmlFor="cantidad" className="font-bold text-xl">Cantidad Del Gasto :</label>
                <input type="number" placeholder="Añade la Cantidad del Gasto" id="cantidad" className=" p-2 bg-gray-200 rounded-lg" />
            </div>

            <div className="flex flex-col" >
                <label htmlFor="categoria" className="font-bold text-xl" >Categoria Del Gasto :</label>
                <select name="" id="categoria" className="p-2 bg-gray-200 rounded-lg">
                    <option value="" className=" text-gray-300"> -- Seleccione Una Opcion </option>
                    { categories.map( (category) => { 
                        return <option value={category.id} key={ category.id }> {category.name } </option>
                    })}
                </select>
            </div>

            <div className="flex flex-col">
                <label htmlFor="" className="font-bold text-xl">Fecha Gasto :</label>
                <input type="text" placeholder="Añade la Fecha del Gasto" className=" p-2 bg-gray-200 rounded-lg"/>
            </div>

            <input 
                type="submit" 
                value={'Guardar Gasto '} 
                className="w-full bg-blue-600 font-bold py-4 rounded text-white uppercase cursor-pointer hover:bg-blue-300"    
            />

        </form>
    </>
  )
}
