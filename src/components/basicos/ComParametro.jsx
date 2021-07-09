import React from 'react'

export default function ComParametro(props) {
    const status = props.nota >= 7 ? 'Aprovado' : 'Reprovado'
    const notaInt = Math.round(props.nota)
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>
                <strong> {props.aluno} </strong>
                Tem Nota
                <strong> {notaInt} </strong>
                e está
                <strong> {status} </strong>!
            </p>
        </div>
    )
}