import React from 'react'

export function FamiliaMembro(props) {
    return(
        <div>
            {props.nome} <strong>{props.sobrenome}</strong>
        </div>
    )
}