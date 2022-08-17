import { useContext} from "react"
import GlobalStateContext from "../../Global/GlobalStateContext"
import Logo from "../../assets/logo.png"
import {  Details,LoteryField,Select,Title } from "./style"

const LoteryArea = () => {
    const { lotteriesResult, lotteriesId, lotteries, setLotteriesId } = useContext(GlobalStateContext)

    const loteryOptions = lotteries.map((lotery) => {
        return (
            <option key={lotery.id} value={lotery.id}>
                {lotery.nome.toUpperCase()}
            </option>
        )
    })

    function onChangeLotery(event) {
        setLotteriesId(Number(event.target.value))
    }

    const loteryTitle = () => {
        return (lotteries && lotteries.map((lotery) => {
            if (lotery.id === lotteriesId) {
                return (
                    <Title key={lotery.id}>
                        <img src={Logo} alt="Lotery logo" />
                        <h1>{lotery.nome.toUpperCase()}</h1>
                    </Title>
                )
            }
            return false
        })
        )
    }

    const formatDate = () => {
        const date = lotteriesResult.data.split("-", 3)

        const day = date[2]

        const formatDay = day.substring(0, 2)

        const mounth = date[1]

        const year = date[0]

        return `${formatDay}/${mounth}/${year}`
    }

    const contestDetails = () => {
        return (lotteries && lotteries.map((lotery) => {
            if (lotery.id === lotteriesId) {
                return (
                    lotteriesResult && (
                        <Details>
                            <h3>Concurso</h3>
                            <p>
                                {lotteriesResult.id} - {formatDate()}
                            </p>
                        </Details>
                    )
                )
            }
            return false
        })
        )
    }

    return (
        <LoteryField lotteriesId={lotteriesId}>
            <Select onChange={onChangeLotery}>{loteryOptions}</Select>
            {loteryTitle()}
            {contestDetails()}
        </LoteryField>
    )
}

export default LoteryArea