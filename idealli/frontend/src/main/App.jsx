import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import './App.css'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'

import Header from '../components/template/Header'
import Logo from '../components/template/Logo'
import Routes from './Routers'
import Footer from '../components/template/Footer'

export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo/>
            <Header/>
            <Routes/>
            <Footer/>
        </div>
    </BrowserRouter>