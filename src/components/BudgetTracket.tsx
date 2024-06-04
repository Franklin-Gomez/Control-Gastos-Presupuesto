import { CircularProgressbar , buildStyles  } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import React from "react"


import AmountDisplay from "./AmountDisplay"
import { useBudget } from "../hooks/useBudget"


export default function BudgetTracket() {

    const { state  , totalExpense , disponible , dispatch } = useBudget();

    // calulo del porcentaje gastado
    const porcentaje = +( ( totalExpense / state.budget) * 100 ).toFixed(2)

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5"> 
                
                <div className='flex justify-center'> 
                    <CircularProgressbar
                        value={porcentaje} // valor que graficaremos
                        styles={ buildStyles ({ 
                            // estilos a la grafica
                            pathColor: porcentaje == 100  ? '#DC2626' : '#3b82f6', //Color de grafica lleno
                            trailColor : '#F5F5F5', // Color grafica sin llenar
                            textSize : 8,
                            textColor : porcentaje == 100  ? '#DC2626' : '#3b82f6'
                        })}
                        text={`${porcentaje}% Gastado`}
                    />
                </div>
                

                <div className="flex flex-col justify-center items-center gap-8">

                    <button
                        type="button"
                        className="bg-pink-600 w-full p-2 text-while uppercase font-bold rounded-lg"
                        onClick={() => dispatch({ type : 'reset-app' } )}
                    >

                        Resetear App

                    </button>

                    <AmountDisplay
                        label="Presupuesto"
                        amount={state.budget}
                    />

                    <AmountDisplay
                        label="Gastado"
                        amount={totalExpense}
                    />

                    <AmountDisplay
                        label="Disponible"
                        amount={disponible}
                    />


                </div>
                
            </div>
        </div>
    )
}
