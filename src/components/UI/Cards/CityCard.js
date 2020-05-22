import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import moment from 'moment'

import OpacityCard from './OpacityCard'

import './CityCard.sass'

const CityCard = (props) => {

    const date = moment(props.Date).format('YYYY.MM.DD')
    const getParam = `name=${props.Country.toLowerCase().replace(/\W/g, '-')}`

    return (
        <div className={`cityCard ${props.state}`}>
            <div className='info'>
                <h3 className='cityCardTitle'>{props.Country}</h3>
                <OpacityCard name='Total confirmed' number={props.TotalConfirmed} />
                <small>{date}</small>
            </div>
            <div className='link'>
                <Link to={`/country?${getParam}`}>
                    <p>Show more</p>
                    <FiArrowRight />
                </Link>
            </div>
        </div>
    )

}

export default CityCard