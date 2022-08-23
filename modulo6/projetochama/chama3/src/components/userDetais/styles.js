import styled from "styled-components"

export const Container =styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
`
export const Name = styled.h1`
width: 100%;
text-align: center;
font-size: 20px;
font-weight: 700;
color: aqua;

`

export const Username = styled.h2`
width: 100%;
text-align: center;
font-size:13px;
font-weight: 500;
color: red;
padding:5px;

`

export const Description = styled.p`
width: 300%;
height: 30px;
margin:10px 0;
font-size: 12px;
text-align: justify;
color: red;
line-height: 1.3;
overflow: hidden;

@media (max-width:400px){
    width: 250px;
}
`