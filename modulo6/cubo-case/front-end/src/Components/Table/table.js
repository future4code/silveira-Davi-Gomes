import { useContext } from "react"
import { ParticipationContext } from "../../GlobalState/Context"
import { Aligned,  Celula, CelulaTd,  Container,  Id, Participation, Table1 } from "./style"
import { Message } from "../Message/Message"

const Table = () => {
    const globalState = useContext(ParticipationContext)

    const twoFunctionsCall = (firstName, lastName) => {
        globalState.editTableDataFn(firstName,lastName)
        globalState.showEditFn()
    }

    return (
        <Container>
            <Message/>
            <Table1>
                <thead>
                    <tr>
                        <Id>&nbsp;</Id>
                        <Aligned>First Name</Aligned>
                        <Aligned>Last Name</Aligned>
                        <Participation>Participation</Participation>
                    </tr>
                </thead>
                <tbody>
                    {globalState.list && globalState.list.map(people => {
                        return(
                            <tr key={people.id} onDoubleClick={() => twoFunctionsCall(people.firstName,people.lastName)}>
                                <Celula>{people.id}</Celula>
                                <CelulaTd>{people.firstName}</CelulaTd>
                                <CelulaTd>{people.lastName}</CelulaTd>
                                <Celula>{people.participation}%</Celula>
                            </tr>
                        )
                    })}
                </tbody>
            </Table1>
            <p>Para editar ou deletar uma cota de participação, dê 2 clicks no nome da pessoa</p>
        </Container>
    )
}

export default Table