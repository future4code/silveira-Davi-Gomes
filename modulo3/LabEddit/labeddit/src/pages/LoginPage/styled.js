import styled from "styled-components"


export const ContainerHeader = styled.div`

text-align:center;
img{
width: 100px;
align-items: center;
}


` 


export const ScreenContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: 100vh;
color: #373737;
`


export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
gap: 15px;
input{
width: 363px;
height: 60px;
left: 35px;
top: 403px;
background: #FFFFFF;
border: 1px solid #D5D8DE;
border-radius: 4px;

}
button{
margin-top: 15px;
margin-bottom: 15px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 13px 133px;
width: 365px;
height: 51px;
left: 29px;
top: 587px;

box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 27px;
border: none;
background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
background-size: 800% 400%;

border: none;

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
}
p{
width: 91px;
height: 25px;
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 25px;
text-align: center;
color: #FFFFFF;
flex: none;
order: 0;
flex-grow: 0; 
}
}
hr {
   margin-bottom: 15px;
  background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
        width:363.01px;
        height: 0.2vh;
        left: 33px;
        top: 656px;
        border: none;
        transform: rotate(0.32deg);
    }
`
export const Button2 = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 13px 133px;
width: 365px;
height: 51px;
left: 29px;
top: 676px;
gap: 10px;
border: 1px solid #FE7E02;
border-radius: 27px;
cursor: pointer;
p{
width: 142px;
height: 25px;
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 25px;
text-align: center;
color: #FE7E02;
flex: none;
order: 0;
flex-grow: 0;
}

`
