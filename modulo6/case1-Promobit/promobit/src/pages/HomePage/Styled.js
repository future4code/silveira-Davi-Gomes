import styled from "styled-components"

export const CardContainer = styled.div`
/* position: absolute; */

/* background: red; */



display: flex;

/* flex-direction: column; */
/* width: 15rem;
margin: 1rem; */

padding: 0.5em;
background: blue;
img{
    margin: 60px;
    box-sizing: border-box;
        background: url(image.png);
        border: 1px solid #E7E7E7;
        border-radius: 4px;
        
        cursor: pointer;
        transition: 0.3s;
        width: 176px;
        height: 264px;
        top:534px;
        left: 112px;

        :hover{
            opacity: 0.7;
            
        }
    }
    .card-text{
        width: 190px;
        min-height: 50px;
        text-align: left;
        padding: 5px 0;
        display: flex;
        color:white ;
        flex-direction: column;
        justify-content: space-between;
        p:nth-child(1){
        margin: 0;
        font-weight: bolder;
        }
        p:nth-child(2){
            color: white;
            font-weight: bolder;
            margin: 0;
            
        }
    }
`
export const StyledCardHome = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    flex-direction: column;
    .movie-list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
`