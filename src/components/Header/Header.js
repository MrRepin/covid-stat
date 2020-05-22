import React from 'react'
import {Link} from 'react-router-dom'
import { RiErrorWarningLine } from 'react-icons/ri'

import Container from '../UI/Containers/Container'

import './Header.sass'

const Header = (props) => {
    return (
        <header id='header'>
            <Container>
                <Link to='/'>
                    <p className='logo'>Cov19info</p>
                </Link>
                <RiErrorWarningLine onClick={props.changeStateModal} className='openModal'/>
            </Container>
        </header>
    )
}

export default Header