import { NavigateFunction } from "react-router-dom"
import React from "react"
import {HeaderContainer} from "./style"


interface Props {
    navigate: NavigateFunction
}
export function Header() {
    return (
        <HeaderContainer>
            <h2>TMDB</h2>
        </HeaderContainer>
    )
}