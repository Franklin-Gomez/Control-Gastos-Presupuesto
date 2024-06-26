import { formatCurrency } from "../helpers"
import React from "react"

type AmountDisplayProps = { 
    label? : string // ? para ser opcional
    amount : number
}

export default function AmountDisplay( { label  , amount} : AmountDisplayProps) {
  return (
    <p className="text-2xl text-blue-600 font-bold">
        { label && `${label} : `}
        <span className="font-black text-black "> { formatCurrency( amount ) }</span>
    </p>
  )
}
