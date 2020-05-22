import React from 'react'

import './Container.sass'

const Container = (props) => {
    return (
        <div className="container">
            {props.children}
        </div>
    )
}

export default Container