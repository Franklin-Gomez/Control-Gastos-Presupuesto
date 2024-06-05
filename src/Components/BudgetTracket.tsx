import { useBudget } from "../CustomHook/useContext"
import AmountDisplay from "./AmountDisplay";

export default function BudgetTracket() {

    const { state } =  useBudget();

    console.log( state.budget )

    return (
        <>
            <div className=" mt-3 bg-white max-w-3xl mx-auto rounded-lg border border-blue-600 p-5 shadow-lg">

                <div>
                    <img src="../public/grafico.jpg" alt="Grafica Gastos" />
                </div>

                <div>

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
