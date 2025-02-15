'use client'
export  default function Error({error}:{error:Error}) {
    return(
        <>
                <h1>Упс !!! {error.message}</h1>
        </>
    )
}