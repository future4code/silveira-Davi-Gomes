import React from 'react'
import styled from 'styled-components'
export default class Etapa1 extends React.Component {
    render() {
        return (
            <div>
            <div>
                <h1>Etapa 1 - Dados Gerais</h1>
                <p>1. Qual o seu nome?</p><input />
                <p>2. Qual sua idade?</p><input />
                <p>3. Qual seu e-mail?</p><input />
                <p>4. Qual a sua escolaridade?</p>
                <select>
                    <option>Ensino médio incompleto</option>
                    <option>Ensino médio completo</option>
                    <option>Ensiso superior incompleto</option>
                    <option>Ensino superior completo</option>
                </select>
            </div>
            </div>
        )

    }
}

