import styled from "styled-components"

export const PageContent = styled.div`
    display: flex;
    min-height: 100vh;
    background-color: #efefef;
    @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    }
`
export const Divider = styled.div`
    width: 5vh;
    height: 100vh;
    max-height: 100vh;
    background-color: #efefef;
    position: absolute;
    left: 27vw;
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
    @media screen and (max-width: 700px) {
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
    border-top-left-radius: 0%;
    transform: rotate(180deg);
    width: 100vw;
    height: 5vh;
    position: absolute;
    top: 58vh;
    left: 0;
}
`