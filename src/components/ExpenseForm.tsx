import { categories } from "../data/db"
import { useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css'
import 'react-calendar/dist/Calendar.css'


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function ExpenseForm() {
  return (
    <form action="space-y-5">
        <legend
            className="uppercase text-center text-2xl font-black border-b-4 border-blue-500 py-2"
        
        > Nuevo Gasto </legend>

        <div className="flex flex-col gap-2">
            <label 
                htmlFor="expenseName"
                className="text-xl"
            > Nombre Gasto : </label>

            <input
                type="text"
                id="expenseName"
                placeholder="Añáde el Nombre del gasto"
                className="bg-slate-100 p-2"
                name="expenseName"
            />    
        </div>
        
        <div className="flex flex-col gap-2">
            <label 
                htmlFor="amount"
                className="text-xl"
            > Cantidad del  Gasto : </label>

            <input
                type="number"
                id="amount"
                placeholder="Añáde la cantidad del gasto : ej. 300"
                className="bg-slate-100 p-2"
                name="amount"
            />    
        </div>

        <div className="flex flex-col gap-2">
            <label 
                htmlFor="category"
                className="text-xl"
            > Categoria del Gasto : </label>

            <select
                id="category"
                className="bg-slate-100 p-2 mb-4"
                name="category"
            > 

                <option value=""> -- Seleccione -- </option>
                {categories.map( category => ( 
                    <option
                        key={category.id}
                        value={category.id}
                    >{category.name}</option>
                ))}

            </select>
        </div>

        <div className="flex flex-col gap-2">
            <label 
                htmlFor="date" 
                className="text-xl"
            > Fecha Gasto : </label>

            <DatePicker
                className='bg-slate-100 p-2 border-0'
            />  
            
        </div>

        <input
            type="submit"
            className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
            value={'Registrar Gasto'}
        />


    </form>
  )
}
