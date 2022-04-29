import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

const Div = styled.div`
    
    display: flex;
    justify-content: center;
    max-width:750vh;     
    max-height:750vh;     
    width: auto;     
    height: auto;
    margin-top:10vh;
`

const Card = styled.div`
    display: flex;
    justify-content: center;
    border: 5px double black;
    border-radius:60px;
    padding-bottom:10vh;
    width: 50vh;
    text-align: center;
    align-items: flex-end;
`
const Imagem = styled.div`
img{
    max-width:250px;     
    max-height:250px;     
    width: auto;     
    height: auto;
}
`
const Botoes = styled.div`
display: flex;
justify-content: space-around;
`
const DivHeader = styled.div`
    color :#6101BD ;
    display: flex;
    justify-content: space-around;
    Button{
        width: 20px;
        height: 20px;
        margin:30px;
        margin-left: 10px;
    }

`
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),

        },
    },
}));

const StyledButton = withStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

export default function Home(props) {
    const classes = useStyles();
    const [profile, setProfile] = useState({})
    const getProfile = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/davi-silveira/person"
        axios
            .get(url)
            .then((res) => {
                setProfile(res.data.profile)
            })
            .catch((err) => {
                alert("erro!!!!!!!!")
            })
    }
    useEffect(() => {
        getProfile()
    }, [])
    const escolhePessoa = (choice, profile) => {
        getProfile()
        const body = {
            choice: choice,
            id: profile
        }

        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/davi-silveira/choose-person"
        axios
            .post(url, body)
            .then((res) => {
            })
            .catch((err) => {
                alert("ERROOOOOOOOOOOOOOOOO!")
            })
    }


    return (
        <Div className={classes.root}>
            <Card>
                <div>
                    <DivHeader>
                        <h1>AstroMatch</h1>
                        <Button variant="contained" color="primary" onClick={props.irParaMatches}>match</Button>
                    </DivHeader>
                    <Imagem>
                        <img src={profile.photo}></img>
                    </Imagem>
                    <div>
                        <h2>{profile.name}, {profile.age}</h2>
                        <p>{profile.bio}</p>
                    </div>
                    <Botoes>
                        <StyledButton onClick={() => escolhePessoa(true, profile.id)}>❤</StyledButton>
                        <StyledButton onClick={() => escolhePessoa(false, profile.id)}>x</StyledButton>
                    </Botoes>
                </div>
            </Card>
        </Div>
    )
}
