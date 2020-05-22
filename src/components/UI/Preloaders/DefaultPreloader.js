import React from 'react'
import { RiLoader3Line } from 'react-icons/ri'

import './DefaultPreloader.sass'

const DefaultPreloader = () => {
    return (
        <div className="defaultPreloader">
            <div className="defaultPreloaderRotate">
                <RiLoader3Line />
            </div>
        </div>
    )
}

export default DefaultPreloader