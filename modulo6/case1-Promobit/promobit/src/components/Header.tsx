import styled from "styled-components"
import { NavigateFunction } from "react-router-dom"
import React from "react"

// const HeaderContainer = styled.div`

// width: 100%;
// height: 56px;
// left: 0px;
// top: 0px;
// background: #5C16C5;

// h2{
//     font-size: 1.5em;
//     margin-block-start: 10px;
//     margin-block-end: 10px;
//     margin-inline-start:50px;
//     margin-inline-end: 0px;
//     font-weight: bold;
//     color: #FFFFFF ;
// }
// `

interface Props {
    navigate: NavigateFunction
}
export function Header() {
    return (
        <div>
            <h2>TMDB</h2>
        </div>
    )
}