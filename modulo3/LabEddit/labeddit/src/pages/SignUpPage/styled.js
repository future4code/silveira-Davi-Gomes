import styled from "styled-components"


export const ScreenContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: 100vh;
color: #373737;
h2{
    position: absolute;
width: 364px;
height: 86px;
left: 50px;
top: 40px;

font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 700;
font-size: 33px;
line-height: 43px;
color: #373737;

}
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


export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
gap: 5px;
input{
width: 363px;
height: 60px;
left: 33px;
top: 403px;
}
button{
margin-top: 15px;
margin-bottom: 15px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 13px 133px;
width: 100px;
height: 51px;
left: 29px;
top: 587px;
background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 27px;
border: none;
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
`

export const Button = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 13px 133px;
width: 100px;
height: 51px;
left: 29px;
top: 676px;
border: 1px solid #FE7E02;
border-radius: 27px;
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