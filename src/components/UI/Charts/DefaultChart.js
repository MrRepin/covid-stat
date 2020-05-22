import React from 'react'
import { Bar } from 'react-chartjs-2'

import Container from '../../UI/Containers/Container'

import './DefaultChart.sass'

const DefaultChart = (props) => {
    return (
        <div className="chartStat">
            <Container>
                <Bar data={props.data} options={props.options}/>
            </Container>
        </div>
    )
}

export default DefaultChart