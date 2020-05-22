import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import './NewsCard.sass'

const NewsCard = (props) => {
    return (
        <div className={`newsCard ${props.state}`}>
            <div className="info">
                <p className="title">{props.title}</p>
                <p className="description">{props.description}</p>
            </div>
            <div className='link'>
                <Link to={`/news/${props.id}`}>
                    <p>Show more</p>
                    <FiArrowRight />
                </Link>
            </div>
        </div>
    )
}

export default NewsCard