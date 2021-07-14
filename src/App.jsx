import React from 'react'

import Aleatorio from './components/basicos/Aleatorio';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import { Familia } from './components/basicos/Familia';

import { Card } from './components/Layout/Card';

import './App.css'

export default (props) => {
    return (
        <div className='App'>
            <h1>Fundamentos React</h1>

            <div className="Cards">
                {/* Propriedades Filhos */}
                <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                    <Familia sobrenome="Ferreira"/>
                </Card>

                <Card titulo="#04 - Desafio Aleatorio" color="#FA6900">
                    <Aleatorio min={1} max={60} />
                </Card>

                <Card titulo="#03 - Fragmento" color="#E94C6F">
                    <Fragmento />
                </Card>

                <Card titulo="#02 - Com Parametro" color="#E8B71A">
                    <ComParametro
                        titulo='Situação do Aluno'
                        aluno='Pedro Silva'
                        nota={8.7}
                    />
                </Card>

                <Card titulo="#01 - Primeiro Componente" color="#588C73">
                    <Primeiro />

                </Card>
            </div>
        </div>
    )
}