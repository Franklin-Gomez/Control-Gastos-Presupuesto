import { formatCurrency } from "../helpers"

type AmountDisplayProps = { 
  disponible : number,
  texto : string
}

export default function AmountDisplay ( { disponible  , texto } : AmountDisplayProps ) {
  return (
    <div className=" flex font-bold pr-2 text-blue-600 uppercase text-xl ">
      { texto } : <span className=" text-black ml-2 "> { formatCurrency( disponible ) }  </span> 
    </div>
  )
}
