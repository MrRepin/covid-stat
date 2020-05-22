import React from 'react'
import './ColorButton.sass'

const ColorButton = (props) => {

    let style = {
        background: '#fff',
        color: 'rgb(133, 128, 137)'
    }

    if(props.status === 'active') {
        style = {
            background: props.color,
            color: '#fff'
        }
    }

    return (
        <button
            style={style}
            className='colorButton'
            data-category={props.children}
            onClick={props.function}
        >
            {props.children}
        </button>
    )
}

export default ColorButton