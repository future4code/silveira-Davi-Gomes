import styled from "styled-components"

export const SortingResults = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
`
export const Numbers = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 7rem;
    height: 7rem;
    margin: 2%;
    border-radius: 50%;
    background-color: #fff;
    font-size: 1.4rem;
    font-weight: 900;
`
export const ResultContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: fit-content;
`
export const Alert = styled.div`
    position: absolute;
    bottom: 0;
    width: 70%;
    text-align: center;
    padding-bottom: 3%;
    @media screen and (max-width: 700px) {
    display: none;
}
`