import React from 'react'

import Aleatorio from './components/basicos/Aleatorio';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import { Card } from './components/Layout/Card';

export default (props) => {
    return (
        <div id='app'>
            <h1>Fundamentos React</h1>

            <Card titulo="#04 - Desafio Aleatorio">
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="#03 - Fragmento">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parametro">
                <ComParametro
                    titulo='Situação do Aluno'
                    aluno='Pedro Silva'
                    nota={8.7}
                />
            </Card>

            <Card titulo="#01 - Primeiro Componente">
                <Primeiro />

            </Card>



        </div>
    )
}