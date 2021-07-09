import React from 'react'

import Aleatorio from './components/basicos/Aleatorio';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';

export default (props) => {
    return (
        <div id='app'>
            <h1>Fundamentos React</h1>
            <Aleatorio min={10} max={60} />
            <Fragmento />
            <ComParametro
                titulo='Situação do Aluno'
                aluno='Pedro Silva'
                nota={8.7}
            />
            <Primeiro />
        </div>
    )
}