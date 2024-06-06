import { useBudget } from "../CustomHook/useContext"
import AmountDisplay from "./AmountDisplay";

export default function BudgetTracket() {

    const { state } =  useBudget();

    console.log( state.budget )

    return (
        <>
            <div className=" mt-3 bg-white max-w-3xl mx-auto rounded-lg border border-blue-600 p-5 shadow-lg grid grid-cols-2">

                <div className="flex justify-center ">
                    <img src="../public/grafico.jpg" alt="Grafica Gastos" />
                </div>

                <div className="flex flex-col gap-y-5 justify-center items-center ">

                    <button className=" w-full bg-blue-600 font-bold py-4 rounded text-white uppercase cursor-pointer hover:bg-blue-300 "> Reset App </button>

                    <AmountDisplay
                        disponible={ state.budget } 
                        texto={'Monto Disponible'}
                    />

                    <AmountDisplay
                        disponible={ 1000 } 
                        texto={'Monto Gastado'}
                    />

                    <AmountDisplay
                        disponible={ state.budget } 
                        texto={'Saldo Disponible'}
                    />
                    
                </div>

            </div>
        
        
        </>
    )
}
