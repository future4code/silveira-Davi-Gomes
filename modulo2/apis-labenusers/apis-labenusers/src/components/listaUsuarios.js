import React from 'react';
// import styled from 'styled-components';
import axios from 'axios';

const headers = {
    headers: {
        Authorization: "davi-araujo-silveira",
    }
}

const urlAllUsers = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

export default class ListarUsuario extends React.Component {
    state = {
        userList: [],
        name: "",
    };

    componentDidMount() {
        this.getAllUsers();
    }

    getAllUsers = () => {
        axios
            .get(urlAllUsers, headers)
            .then((res) => {
                this.setState({ userList: res.data })
            })
            .catch((err) => {
                alert("Usuário não existe, tente novamente");
            });
    };

    render() {
        const componentelistaNomes = this.state.userList.map((userList) => {
            return (<li>{userList.name}</li>)
        })

        return (
            <div>
                <h1>Lista de Usuário</h1>

                <ul>{componentelistaNomes}</ul>
            </div>
        )
    }
}