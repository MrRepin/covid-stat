import React from 'react'

import Container from '../UI/Containers/Container'
import NameLink from '../UI/Links/NameLink'

import './Footer.sass'

const Footer = () => {
    return (
        <footer id='footer'>
            <Container>
                <div className="footerIns">
                    <NameLink
                        name='Developer'
                        link='https://www.instagram.com/dimonrepin/'
                        text='Dmitry Repin'
                    />
                    <NameLink
                        name='Api and data'
                        link='https://covid19api.com/'
                        text='covid19api'
                    />
                </div>
            </Container>
        </footer>
    )
}

export default Footer