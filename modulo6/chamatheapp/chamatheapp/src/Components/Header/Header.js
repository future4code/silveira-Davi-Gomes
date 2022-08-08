import styled from "styled-components"


export const Header = styled.div`
    display: flex;
    align-items: center;
    height: 10vh;
    padding: 0 4%;
    gap: 2%;
    background-color: #161b22;
    box-shadow: 0px 1px 20px #030508;
    img{ 
        height: 5vh;
        cursor: pointer;
    }
    @media screen and (max-width: 770px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        img{
            height: 4vh;
        }
    }
`

export const SearchHistoryButton = styled.button`
height: 5vh;
width: fit-content;
border: none;
border-radius: 8px;
font-family: "Roboto", sans-serif;
font-weight: 700;
font-size: 1.2rem;
color: #fff;
letter-spacing: 1px;
background-color: transparent;
cursor: pointer;
transition: all 0.3s ease;
:hover{
    color: rgba(255, 255, 255, 0.582);
}
@media screen and (max-width: 770px) {
    font-size: 0.6rem;
}
`