import styled from "styled-components"

export const LoteryField = styled.div`
    height: 100vh;
    width: 40vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    @media screen and (max-width: 700px) {
    height: 60vh;
    width: 100vw;
}
    background-color: ${(props) => {
        switch (props.lotteriesId) {
            case 0:
                return "#6befa3";
            case 1:
                return "#8666ef";
            case 2:
                return "#dd7ac6";
            case 3:
                return "#ffab64";
            case 4:
                return "#6befa3";
            case 5:
                return "#bfaf83";
            default:
                return;
        }
    }}
`
export const Select = styled.select`
    height: 7vh;
    width: 15vw;
    border: none;
    border-radius: 15px;
    margin-left: 10%;
    padding-left: 4%;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #848484;
    @media screen and (max-width: 700px) {
    height: 8vh;
    width: 50vw;
    font-size: 0.9rem;
    }
`
export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 10%;
    gap: 10px;
    img{
    height: 10vh;
}
    h1{
    font-size: 1.7rem;
    font-weight: 700;
    color: #fff;
}
    @media screen and (max-width: 700px) {
    img{
    height: 10vh;
    }
    h1{
    font-size: 1.4rem;
    font-weight: 700;
    }
}
`
export const Details = styled.div`
    padding-left: 10%;
    h3{
    text-transform: uppercase;
    font-weight: 300;
    font-size: 1.1rem;
    color: #fff;
}
    p{
    font-weight: 700;
    font-size: 1.3rem;
    color: #fff;
}
    @media screen and (max-width: 700px) {
    h3{
    font-size: 0.9rem;
    }
    p{
    font-size: 1.1rem;
    }
}
`