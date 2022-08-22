import styled from "styled-components"


export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 350px;
    visibility: ${({ message }) => message ? 'visible' : 'hidden'};
`

export const MessageAlert = styled.p`
    font-size: 15px;
    color: red;
    font-weight: 700;
    align-self: flex-start;
`