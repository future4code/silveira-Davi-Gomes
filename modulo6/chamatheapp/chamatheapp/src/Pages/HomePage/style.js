import styled from "styled-components"

export const PageWrapper = styled.div`
    min-height: 100vh;
    max-width: 100vw;
    background-image: linear-gradient(220deg, #0d1117 40%, #000 90% );
`

export const Main = styled.main`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    height: fit-content;
    width: 100%;
    gap: 4%;
    @media screen and (max-width: 1000px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }
`