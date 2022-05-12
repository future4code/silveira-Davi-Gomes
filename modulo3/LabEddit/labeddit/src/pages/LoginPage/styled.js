import styled from "styled-components"


export const ContainerPai = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
align-items: center;
justify-content: space-evenly;
`

export const Botoes = styled.div`
display: flex;
justify-content: space-around;
margin-top: 15px;
button {
 display: inline-block;
 border-radius: 10px;
 background-color:#3f00b5;
 border: none;
 color: #FFFFFF;
 text-align: center;
 font-size: 17px;
 padding: 16px;
 width: 130px;
 transition: all 0.5s;
 cursor: pointer;
 margin: 5px;
}

button span {
 cursor: pointer;
 display: inline-block;
 position: relative;
 transition: 0.5s;
}

button span:after {
 content: '»';
 position: absolute;
 opacity: 0;
 top: 0;
 right: -15px;
 transition: 0.5s;
}

button:hover span {
 padding-right: 15px;
}

button:hover span:after {
 opacity: 1;
 right: 0;
}
`
export const Botao2 = styled.div`
display: flex;
justify-content: space-around;
button {
background: linear-gradient(-45deg, #3f00b5, #9f69fe, #27c8b7, #3f00b5);
background-size: 800% 400%;
padding: 1em 2em;
display: inline-block;
border: none;
border-radius: 10px;
font-size: 17px;
font-weight: 700;
color: white;
transition: all .5s ease-in-out;
animation: gradient 10s infinite cubic-bezier(.62, .28, .23, .99) both;
cursor: pointer;

:hover {
animation: gradient 3s infinite;
transform: scale(1.05);
}

:active {
animation: gradient 3s infinite;
transform: scale(0.8);
}

@keyframes gradient {
0% {
background-position: 0% 50%;
}

50% {
background-position: 100% 50%;
}

100% {
background-position: 0% 50%;
}
}
}
`

export const Inputs = styled.div`

input {
  max-width: 190px;
  height: 30px;
  border: 2px solid transparent;
  outline: none;
  border-bottom: 2px solid #3f3f3f;
  caret-color: #3f3f3f;
  background-color: #212121;
  padding: 5px;
  transition: .5s linear;
  font-family: monospace;
  letter-spacing: 1px;
}

input:focus {
  border: 2px solid #fa4753;
  caret-color: #fa4753;
  color: #fa4753;
  box-shadow: 4px 4px 10px #070707;
}

input:focus::placeholder {
  color: #fa4753;
}

`