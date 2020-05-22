import React from 'react'

import './NameLink.sass'

const NameLink = (props) => {
    return (
        <div className='nameLink'>
            <p className='name'>{props.name}:</p>
            <a href={props.link} className='person'>{props.text}</a>
        </div>
    )
}

export default NameLink