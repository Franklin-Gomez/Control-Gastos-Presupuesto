import { ReactNode } from "react";

type ErrorMessageProps = {
    children : ReactNode
}

export default function ErrorMessage( { children } : ErrorMessageProps ) {
    return (
        <div className=" p-2 text-center bg-red-600 text-white font-bold mt-2 uppercase">
            {children}
        </div>
    )
}
