import React from 'react'

import './InlineNav.sass'

const InlineNav = (props) => {
    const className = `inlineNav ${props.classList}`
    return (
        <div className={className}>
            {props.children}
        </div>
    )
}

export default InlineNav