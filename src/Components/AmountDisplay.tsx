
type AmountDisplayProps = { 
    disponible : number,
    texto : string
}

export default function AmountDisplay ( { disponible  , texto } : AmountDisplayProps ) {
  return (
    <div className=" flex ">
        <span className=" font-bold pr-2 text-blue-600 uppercase "> { texto } :  </span> { disponible  } 
    </div>
  )
}
