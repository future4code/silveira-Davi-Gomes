import React, { useContext } from "react"
import { Alert, Numbers, ResultContent, SortingResults } from "./style"
import GlobalStateContext from "../../Global/GlobalStateContext"

const SortingNumber = () => {

    const { lotteriesResult } = useContext(GlobalStateContext)

    const resultNumbers = () => {
        return ( lotteriesResult && lotteriesResult.numeros && lotteriesResult.numeros.map((number) => {
                
                return <Numbers key={number}>{number}</Numbers>
            })
        )
    }


    console.log(lotteriesResult)

    return (
        
        <SortingResults>
            
            <ResultContent>
                {resultNumbers()}
            </ResultContent>
            
            <Alert>
                <p>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
            </Alert>
        </SortingResults>
    )
}

export default SortingNumber 