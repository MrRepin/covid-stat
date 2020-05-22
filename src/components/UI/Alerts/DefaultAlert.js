import React from 'react'

import { IoMdClose } from 'react-icons/io'

import './DefaultAlert.sass'

const DefaultAlert = (props) => {

    let className = `defaultAlert`
    
    if(props.status) className = `defaultAlert show`

    return (
        <div className={className}>
            <div className="defaultAlertIns">
                <IoMdClose className="close" onClick={props.hideAlert} />
                <div className="info">{props.text}</div>
            </div>
        </div>
    )
}

export default DefaultAlert