export default function ExpenseList() {
    return (
        <>
            <h1 className="text-center font-bold text-3xl"> Listado de Gastos </h1>

            <div className="flex gap-5 w-full items-center border-b-2 border-blue-600 p-4">
                <img src="./public/icono_comida.svg" className=" w-20"/>

                <div className="w-full gap-y-2">
                    <h6 className="uppercase font-bold"> Comida </h6>
                    <p> Papa </p>
                    <time> 6 / 11 / 2024 - 10 : 53 AM  </time>
                </div>

                <p className=" text-2xl flex font-bold">$1.200</p>
            </div>
        </>
    )
}
    