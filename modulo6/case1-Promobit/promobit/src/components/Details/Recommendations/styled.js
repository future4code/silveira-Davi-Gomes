import styled from "styled-components"


export const StyledRecomendations2 = styled.div`
    
    display: flex;
    margin: 5rem;
    overflow-x: scroll;
    padding: 1em;
    min-height: 15rem;
    scrollbar-color: black;
    scrollbar-width: thin;
    gap: 1em;
    p{
        margin: 0;
        font-weight: bolder;
    }
    p:nth-child(1){
        font-size: 0.75em;
    }
    p:nth-child(2){
        color: black;
        font-size: 0.55em;
    }
    img{
        max-width: 165px;
        border-radius: 5px;
        box-shadow: 1px 1px 2px;
        transition: 0.3s;
        cursor: pointer;
        :hover{
            transform: translateY(-3px);
        }
    }
`