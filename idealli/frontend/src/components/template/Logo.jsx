import './Logo.css'
import React from 'react'
import logo from '../../assets/logo/logo.png'
import {Link} from 'react-router-dom'

export default props =>
    <aside className="logo">
        <Link to="/" className='logo'>
        {/* <a href="/"> */}
        <img src={logo} alt="logo"/>
        {/* </a> */}
        </Link>
    </aside>