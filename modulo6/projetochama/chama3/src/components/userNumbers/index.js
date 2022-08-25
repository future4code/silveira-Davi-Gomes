import { Container, NumberContainer } from "./styles"
import React from "react"
import {useNavigate} from "react-router-dom"

const UserNumbers = props => {
    const navigate = useNavigate()
    const handleOnClick = route => navigate(route)
    return (
        <Container>
        <NumberContainer onClick={() =>handleOnClick('/repos')}>
    <h1>{props.repos}</h1>
    <h2>Repositorios</h2>
        </NumberContainer>
        <NumberContainer>
        <h1>{props.followers}</h1>
    <h2>Seguidores</h2>
        </NumberContainer>
        <NumberContainer>
        <h1>{props.following}</h1>
    <h2>Seguindo</h2>
        </NumberContainer>
    </Container>
)
}

export default UserNumbers