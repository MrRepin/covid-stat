import React, { Component } from 'react'

import MainLayout from '../../hoc/Layouts/MainLayout'
import Container from '../../components/UI/Containers/Container'
import NameLink from '../../components/UI/Links/NameLink'

import './About.sass'

class About extends Component {
    render() {
        return (
            <MainLayout>
                <div className="aboutPage">
                    <Container>
                        <div className="aboutPageContent">
                            <NameLink
                                name='Developer'
                                link='https://www.instagram.com/dimonrepin/'
                                text='Dmitry Repin'
                            />
                            <NameLink
                                name='Covid-19 api and data'
                                link='https://covid19api.com/'
                                text='covid19api'
                            />
                            <NameLink
                                name='News api and data'
                                link='https://jsonplaceholder.typicode.com/'
                                text='jsonplaceholder'
                            />
                        </div>
                    </Container>
                </div>
            </MainLayout>
        )
    }
}

export default About