import styled from "styled-components";


export const StyledPageDetails = styled.div`
    display: flex;
    overflow: hidden;
    overflow-x: scroll;
    background-color:black;
    scrollbar-color: white;
    scrollbar-width: thin;
    color: white;
    margin: 1rem;
    margin-top: 3rem;
`

export const StyledDetailsCard = styled.div`
    box-shadow: green;
    margin: 1rem;
    min-width: 175px;
    max-width: 175px;
    height: 20rem;
    padding: 0.5em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 7px;
    transition: 0.5s;
    border: white;
    :hover{
        transform: translateY(-3px);
    }
    img{
        width: 165px;
    }
    p{
        margin: 0;
    }
    p:nth-child(1){
        font-weight: bold;
        color: black;
    }
    .card-text{
        height: 18%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0.50em;
    }
`

export const StyledRecomendations = styled.div`
    display: flex;
    margin: 2rem;
    overflow-x: scroll;
    padding: 1em;
    min-height: 15rem;
    scrollbar-color: black;
    scrollbar-width: thin;
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
        width: 150px;
        border-radius: 5px;
        box-shadow: 1px 1px 2px orangered;
        transition: 0.3s;
        cursor: pointer;
        :hover{
            opacity: 0.85;
        }
    }
`

export const StyledRecomendationsCard = styled.div`
    margin: 0.5em;
    min-width: 165px;
    max-width: 165px;
    min-height: 15rem;
    .card-text{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 15%;
        padding: 2px;
    }
`
export const StyledTrailer = styled.div`
    margin-bottom: 2rem;
    margin-left: 2rem;
    @media(max-width: 650px) {
            display: flex;
            align-items: center;
            margin-left: 10%;
        iframe{
            width: 90%;
            height: 215px;
        }
    }
`