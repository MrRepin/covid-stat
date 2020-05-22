import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import './BackButton.sass'

const BackButton = (props) => {
    return (
        <Link to={props.link} className='backLink'>
            <FiArrowLeft />
        </Link>
    )
}

export default BackButton