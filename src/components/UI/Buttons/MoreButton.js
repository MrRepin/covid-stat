import React from 'react'

import './MoreButton.sass'

const MoreButton = (props) => {
    
    return (
        <button className='moreButton' onClick={props.function}>
            {props.children}
        </button>
    )

}

export default MoreButton