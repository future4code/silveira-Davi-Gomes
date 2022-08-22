import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-items: center;
    gap: 10px;
`
export const Form = styled.form`
    display: flex;
    gap: 10px;
`
export const Inputs = styled.input`
    border: 1px solid RGB(0, 184, 226);
    width: 200px;
    height: 30px;
    padding-left: 10px; 
`
export const ButtonUpdate = styled.button`
    width: 100px;
    height: 30px;
    border: 1px solid white;
    background-color: RGB(0, 184, 226);
    color: white;
    font-weight: 700;
`
export const ButtonDelete = styled.button`
    width: 100px;
    height: 30px;
    border: 1px solid white;
    background-color: red;
    color: white;
    font-weight: 700;
`