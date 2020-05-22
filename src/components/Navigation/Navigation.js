import React from 'react'
import { NavLink } from 'react-router-dom'
import { TiHome } from 'react-icons/ti'
import { BsNewspaper, BsInfoSquareFill } from 'react-icons/bs'

import classes from './Navigation.module.sass'

const Navigation = () => {
    return (
        <div className={classes.navigation}>
            <NavLink to='/'>
                <TiHome />
            </NavLink>
            <NavLink to='/news'>
                <BsNewspaper />
            </NavLink>
            <NavLink to='/about'>
                <BsInfoSquareFill />
            </NavLink>
        </div>
    )
}

export default Navigation