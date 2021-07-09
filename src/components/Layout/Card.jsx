import React from 'react'
import './Card.css'

export function Card(props) {

    const cardStyle = {
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00',
    }
    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">{props.titulo}</div>
            <div className="Content">
                {/* Passar propriedades "Filhos" de um componente para outro a partir do (props.children) */}
                {props.children} 
            </div>
        </div>
    )
}