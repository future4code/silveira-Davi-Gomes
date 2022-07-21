import styled from "styled-components"

export const HeaderContainer = styled.div`
position: absolute;
width: 1440px;
height: 56px;
left: 0px;
top: 0px;
background: #5C16C5;

p{
    
}
`


export function Header(){
    return (
        <HeaderContainer>
                <h2>TMDB</h2>
        </HeaderContainer>
    )
}