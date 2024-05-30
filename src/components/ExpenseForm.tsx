import { categories } from "../data/db"
import { useEffect, useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css'
import 'react-calendar/dist/Calendar.css'
import { DraftExpense, Value } from "../types";
import ErrorMessage from "./ErrorMessage";
import { useBudget } from "../hooks/useBudget";

export default function ExpenseForm() {

    const [ expense , setExpense ] = useState<DraftExpense>({
        amount : 0,
        expenseName : '',
        category : '',
        date : new Date()
    })

    const [ error , setError ] = useState('')
    const { dispatch , state } = useBudget()

    useEffect(() => { 
        if( state.editingId ) { 
            const editingExpense = state.expenses.filter( expense => expense.id == state.editingId )[0]

            setExpense( editingExpense )
        }
    } , [ state.editingId ])

    const handleChange = ( e : React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement> ) => { 

        const { name , value } = e.target
        const isAmountField = ['amount'].includes( name )


        setExpense({
            ...expense,
            // si es amoun lo covertimosa number, sino se queda en string
            [ name ] : isAmountField ? +value : value
        })

    }

    const handleChangeDate = ( value : Value)  => { 
        setExpense({
            ...expense,
            date : value
        })
    }

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>)  => { 
        
        e.preventDefault();

        // validar
        if( Object.values(expense).includes('') ) { 
            setError('Todos los campos son obligatorios')
            return
        }

        // agregar o actualizar  un nuevo gasto
        if( state.editingId ) { 
            // Actualizar
            dispatch( { type : 'update-expense' , payload: { expense : { id : state.editingId , ...expense } } } )
        } else { 
            // Guardar
            dispatch( { type : 'add-expense' , payload: { expense } } )
        }

        // reiniciar form a traves del state
        setExpense( { 
            amount : 0,
            expenseName : '',
            category : '',
            date : new Date()
        })
    }


    return (
        <form action="space-y-5" onSubmit={handleSubmit }>
            <legend
                className="uppercase text-center text-2xl font-black border-b-4 border-blue-500 py-2"
            
            > { state.editingId ? 'Guardar Cambios' : 'Guardar Nuevo Gasto'}  </legend>

            { error && <ErrorMessage>{error}</ErrorMessage>}

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
                    value={expense.expenseName}
                    onChange={handleChange}
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
                    value={expense.amount}
                    onChange={handleChange}
                    
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
                    value={expense.category}
                    onChange={handleChange}
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
                    value={expense.date}
                    onChange={handleChangeDate}
                />  

            </div>

            <input
                type="submit"
                className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
                value={ state.editingId ? 'Guardar Cambios' : 'Guardar Nuevo Gasto'} 
            />


        </form>
    )
}
