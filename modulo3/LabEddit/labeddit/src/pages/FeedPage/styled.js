import styled from 'styled-components';

export const ScreenContainer =  styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 5px;
color: #373737;
button{
margin-bottom: 10px;
}
input{
width: 364px;
height: 50px;
left: 30px;
top: 124px;
margin-top: 25px;
background: #EDEDED;
border-radius: 12px;
border: none;
}
textarea{
width: 364px;
height: 131px;
left: 30px;
top: 124px;
margin-top: 25px;
background: #EDEDED;
border-radius: 12px;
border: none;
resize:none;
}
`

export const ContainerPost = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 9px 10px;

width: 364px;
height: 167px;
background: #FBFBFB;
border: 1px solid #E0E0E0;
border-radius: 12px;
flex: none;
order: 0;
flex-grow: 0;
p{
font-size: 18px;
}
h3{
    font-weight: normal;
}
img{   
margin: 12px;    
width: 25px;
height: 25px;
    
}
`

export const ButtonLike = styled.div`
display: flex;
flex-direction: row;
p{
font-size: 10px;    
display: flex;
}
`

export const Form =  styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 15px;
button{
margin-top: 15px;
margin-bottom: 15px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 13px 133px;
width: 359px;
height: 51px;
left: 29px;
top: 587px;
background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 12px;
border: none;
p{
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
hr{
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
export const Header3 = styled.div` 
display: flex;
justify-content: space-between;
width: 100%;
height: 50px;
left: 0px;
top: 0px;

background: #EDEDED;
img{
position: absolute;
width: 46px;
height: 47px;
left: 180px;
top: 0px;

}
button{
position: absolute;
width: 55px;
height: 25px;
left: 310px;
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