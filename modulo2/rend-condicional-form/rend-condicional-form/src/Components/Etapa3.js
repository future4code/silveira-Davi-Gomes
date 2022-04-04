import React from 'react'
import styled from 'styled-components'
export default class Etapa3 extends React.Component {
    render() {
        return (
            <div>
            <div>
                <h1>Etapa 3 - Informações Gerais de ensino</h1>
                <p>7. Por que você terminou um curso de gradação?</p><input />
                <p>8. Voçê fez algum curso complementar?</p>
                <select>
                <option>Nenhum</option>
                <option>Curso Técnico</option>
                <option>Curso de inglês</option>
               </select>
            </div>
            </div>
        )

    }
}
