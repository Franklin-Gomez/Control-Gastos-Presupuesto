import { useBudget } from "../CustomHook/useContext"
import AmountDisplay from "./AmountDisplay";
import { CircularProgressbar , buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css'

export default function BudgetTracket() {
    
    const { state } =  useBudget();

    const totalExpense = state.expense.reduce( ( total , expense ) => total + expense.amount , 0)

    const Disponible = state.budget - totalExpense

    const porcentaje = +( ( totalExpense / state.budget) * 100 ).toFixed(2)

    return (
        <>
            <div className=" mt-3 bg-white max-w-3xl mx-auto rounded-lg border border-blue-600 p-5 shadow-lg grid grid-cols-2">

                <div className="flex justify-center ">
                    <CircularProgressbar
                        value={porcentaje}
                        styles={ buildStyles ({ 
                            // estilos a la grafica
                            pathColor: porcentaje == 100  ? '#DC2626' : '#3b82f6', //Color de grafica lleno
                            trailColor : '#F5F5F5', // Color grafica sin llenar
                            textSize : 8,
                            textColor : porcentaje == 100  ? '#DC2626' : '#3b82f6'
                        })}
                       text={`${porcentaje}% Gastado`} // texto en el centro del circulo
                    />
                </div>

                <div className="flex flex-col gap-y-5 justify-center items-center ">

                    <button className=" w-full bg-blue-600 font-bold py-4 rounded text-white uppercase cursor-pointer hover:bg-blue-300 "> Reset App </button>

                    <AmountDisplay
                        disponible={ state.budget } 
                        texto={'Monto Disponible'}
                    />

                    <AmountDisplay
                        disponible={ totalExpense } 
                        texto={'Monto Gastado'}
                    />

                    <AmountDisplay
                        disponible={ Disponible } 
                        texto={'Saldo Disponible'}
                    />
                    
                </div>

            </div>
        
        </>
    )
}
