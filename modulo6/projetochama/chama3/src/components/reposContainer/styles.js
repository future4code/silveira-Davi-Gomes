import styled from "styled-components"

export const Section = styled.section`
width: 400px;
height: 400px;
background: rgba(255,255,255,.95);
border-radius: 10px;
border-bottom: 10px solid #3d4145;
margin-top: 15px;
img{ 
        position: absolute;
        height: 5vh;
        right:110vh;
        padding: 0 10px;
        cursor: pointer;
    }
@media (max-width: 430px) {
    width: 300px;
    img{
        position: absolute;
        height: 5;
        right:285px;
        padding: 0 10px;
    }
}
`

export const Title = styled.h1`
font-size: 20px;
font-weight: 700;
margin-top: 10px;
color: #444;
width: 100%;
text-align: center;
height: 30px;
`

export const ListOfReposContainer = styled.h1`
height: 350px;
width: 100%;
overflow-y: scroll;
`

export const Repo = styled.h2`

height: 80px;
background: rgba(0,0,0,.05);
border-radius: 5px;
padding: 5px;
margin-bottom: 10px;
cursor: pointer;
a {
    font-size: 15px;
    width: 100%;
    overflow: hidden;
    color: #444;
    text-decoration: none;
}
p {
    font-size: 12px;
    font-weight: 400;
    width: 100%;
    height: 30px;
    overflow: hidden;
    line-height: 1.3;
    margin-top: 10px;
}
`