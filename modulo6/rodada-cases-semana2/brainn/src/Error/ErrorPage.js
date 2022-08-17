import { useNavigate } from "react-router-dom"
import { PageError } from "./style"

const ErrorPage = () => {
    const navigate = useNavigate()

    return (
        <PageError>
            <div>
                <h1><span>ops,</span> não encontramos este caminho!</h1>
                <button onClick={() => navigate("/")}>Loterias</button>
            </div>
        </PageError>
    )
}

export default ErrorPage