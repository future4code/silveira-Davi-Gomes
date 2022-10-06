import { useContext } from "react"
import { ParticipationContext } from "../../GlobalState/Context"
import { Container, MessageAlert } from "./style"

export const Message = () => {
    const globalState = useContext(ParticipationContext)
    return (
        <Container message={globalState.message}>
            <MessageAlert>A soma de todas as participações excede 100%</MessageAlert>
        </Container>
    )
}