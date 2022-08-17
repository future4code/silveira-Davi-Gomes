import { useContext } from "react";
import useForm from "../../CustomHoocks/useForm";
import { ParticipationContext } from "../../GlobalState/Context";
import * as s from "./style";

const Inputs = () => {
    const globalState = useContext(ParticipationContext)
    const {form, onChange, clearFields} = useForm({firstName: '', lastName: '', participation: ''})

    const preventDefaultFunction = (event) => {
        event.preventDefault()
        globalState.add(form)
        clearFields()
    }

    return (
        
            <s.Form onSubmit={preventDefaultFunction}>

            <s.Inputs
            name="firstName"
            value={form.firstName}
            onChange={onChange}
            placeholder="Nome"
            required/>

            <s.Inputs
            name="lastName"
            value={form.lastName}
            onChange={onChange}
            placeholder="Sobrenome"
            required/>

            <s.Inputs
            name="participation"
            value={form.participation}
            onChange={onChange}
            placeholder="Participação"
            type={'number'}
            required/>
            <s.ButtonSend>ENVIAR</s.ButtonSend>
            </s.Form>
    )
}

export default Inputs