import React from 'react'
import { IoMdClose } from 'react-icons/io'

import './DefaultModal.sass'

const DefaultModal = (props) => {

    return (
        <div className='modal'>
            <div className='modalIns'>
                <div className='modalInfo'>
                    <IoMdClose onClick={props.changeStateModal} className='close'/>
                    <ul>
                        {props.children.map((item, index) => <li key={index}> - {item}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )

}

export default DefaultModal