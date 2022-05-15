import styled from "styled-components"


export const ScreenContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: 100vh;
color: #373737;
`


export const Header = styled.div`
display: flex;
justify-content: space-between;
position: absolute;
width: 428px;
height: 50px;
left: 0px;
top: 0px;

background: #EDEDED;
img{
position: absolute;
width: 46px;
height: 47px;
left: 191px;
top: 0px;

}
button{
position: absolute;
width: 55px;
height: 25px;
left: 330px;
top: 10px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 25px;
border:none;
text-align: center;
color: #4088CB;
background:none;
}
`
