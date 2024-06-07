import { categories } from "../data/db"
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";

export default function ExpenseForm() {

    // valores iniciales 
    const formValue = { 
        nombre : '',
        amount : 0,
        category : '',
        date : new Date()
    }

    // state para los valores ingresados
    const [expense , setExpense] = useState(formValue)

    const handleChange = (e : React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => { 
        const { name , value } = e.target

        const isAmountField = ['amount'].includes(name)

        setExpense({
            ...expense,
            [ name ] : isAmountField ? +value : value
        })

        console.log( expense )
    }

    const handleDate = () => { 

    }


    return (
        <>
            <h1 className=" p-5 text-center border-b-2 border-blue-600 text-2xl uppercase font-bold"> Guardar Nuevo Gasto </h1>

            <form className="flex  flex-col gap-y-4">

                <div className="flex flex-col mt-4 gap-y-2">
                    <label htmlFor="nombre" className="font-bold text-xl">Nombre Gasto :</label>
                    <input 
                        type="text" 
                        placeholder="Añade el Nombre del Gasto" 
                        id="nombre" 
                        className=" p-2 bg-gray-200 rounded-lg" 
                        name="nombre"
                        onChange={ handleChange }
                        value={expense.nombre}
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="cantidad" className="font-bold text-xl">Cantidad Del Gasto :</label>
                    <input 
                        type="number" 
                        placeholder="Añade la Cantidad del Gasto" 
                        id="cantidad" 
                        className=" p-2 bg-gray-200 rounded-lg" 
                        onChange={ handleChange }    
                        name="amount"
                        value={expense.amount}
                    />
                </div>

                <div className="flex flex-col" >
                    <label htmlFor="category" className="font-bold text-xl" >Categoria Del Gasto :</label>
                    <select 
                        id="category"
                        name="category"
                        className="p-2 bg-gray-200 rounded-lg"
                        onChange={ handleChange  }  
                        value={expense.category}       
                    >

                        <option value={expense.category} className=" text-gray-300"> -- Seleccione Una Opcion -- </option>
                        { categories.map( (category) => { 
                            return <option value={category.id} key={ category.id }> {category.name }</option>
                        })}

                    </select>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="" className="font-bold text-xl">Fecha Gasto :</label>
                    <DatePicker 
                        className={"bg-slate-100 border-none"} 
                        onChange={ handleDate }
                    />
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
