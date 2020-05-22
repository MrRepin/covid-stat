import React from 'react'

import './OpacityCard.sass'

const OpacityCard = (props) => {
    return (
        <div className={`opacityCard ${props.state}`}>
            <p className='number'>{props.number}</p>
            <p className='title'>{props.name}</p>
        </div>
    )
}

export default OpacityCard