import { useContext } from "react";
import { useInput } from "../../CustomHoocks/useInputs"
import { ParticipationContext } from "../../GlobalState/Context";
import { ButtonDelete, ButtonUpdate, Container, Form, Inputs } from "./style";



export const EditInputs = () => {
    const GlobalState = useContext(ParticipationContext)
    const [value, handleValue, clearInput] = useInput('')
    const preventDefaultFunction = (event) => {
        event.preventDefault()
        GlobalState.editParticipation(value)
        GlobalState.showEditFn()
        clearInput()
    }
    const callTwoFunctions = () => {
        GlobalState.del()
        GlobalState.showEditFn()
    }
    return(
        <Container>
            {
                GlobalState.edit &&
                <>
                    <Form onSubmit={preventDefaultFunction}>
                        <Inputs
                            name="participation"
                            value={value}
                            onChange={handleValue}
                            placeholder="participation"
                            required
                        />
                        <ButtonUpdate>ATUALIZAR</ButtonUpdate>
                    </Form>
                    <ButtonDelete onClick={() => callTwoFunctions()}>DELETAR</ButtonDelete>
                </>
            }
        </Container>
    )
}