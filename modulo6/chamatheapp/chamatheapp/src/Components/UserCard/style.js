import styled from "styled-components"

export const UserContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: 30rem;
    padding: 2%;
    margin: 5% 0 5% 3%;
    border-radius: 10px;
    box-shadow: 20px 20px 30px #000;
    background-color: #161b22;
    h1{
        font-size: 2rem;
        color: #C9D1D9;
    }
    h2{
        font-size: 1.6rem;
        font-weight: 300;
        margin-bottom: 10%;
        color: #8B949E;
    }
    @media screen and (max-width: 770px) {
        width: 80%;
        padding: 5% 5% 5% 5%;
        margin: 20% 0 20% 0%;
        border-radius: 10px;
        background-color: transparent;
        h1{
            font-size: 1.7rem;
        }
        h2{
            font-size: 1.3rem;
        }
    }
`
export const ProfilePicture = styled.img`
    align-self: center;
    height: 20rem;
    width: 20rem;
    border-radius: 100%;
    margin-bottom: 10%;
    @media screen and (max-width: 770px) {
        height: 10rem;
        width: 10rem;
    }
`
export const SeeMoreLink = styled.a`
    font-size: 1rem;
    text-decoration: none;
    text-align: center;
    padding: 4%;
    border: 1px solid #535557a1;
    border-radius: 10px;
    cursor: pointer;
    color: #c9d1d9;
    background-color: #21262D;
`
export const Bio = styled.p`
    height: fit-content;
    margin: 8% 0 10% 0;
    font-size: 1.2rem;
    font-weight: 400;
    color: #C9D1D9;
    @media screen and (max-width: 770px) {
        font-size: 0.9rem;
    }
`
export const Info = styled.p`
    display: flex;
    align-items: flex-end;
    font-size: 1.1rem;
    font-weight: 300;
    gap: 2%;
    color: #fff;
    span{
        font-weight: 700;
    }
    @media screen and (max-width: 770px) {
        font-size: 0.8rem;
    }
`
export const Icon = styled.img`
    height: 1.5rem;
    margin-right: 1.8%;
`
export const UserNotFound = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50vh;
    width: 45%;
    margin-left: 3%;
    margin-top: 10%;
    border-radius: 10px;
    background-color: #161b22;
    h1{
        font-size: 2rem;
        color: #C9D1D9;
    }
    @media screen and (max-width: 770px){
        height: 30vh;
        width: 90%;
        margin-top: 20%;
        h1{
            font-size: 1.3rem;
        }  
    }
`