import React from 'react'
import Main from '../../template/Main'

import papel1 from '../../../assets/papeisDeParede/papeldeparede1.jpg'
import papel2 from '../../../assets/papeisDeParede/papeldeparede2.jpg'
import papel3 from '../../../assets/papeisDeParede/papeldeparede3.jpg'
import papel4 from '../../../assets/papeisDeParede/papeldeparede4.jpg'

import {Carousel} from 'react-bootstrap'

export default props =>
    <Main>
        <div className="content-carousel">
            <Carousel className='bg-white m-4'>
                <Carousel.Item>
                    <img src={papel1} alt="slide1" className='d-block slide-cort mx-auto' />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={papel2} alt="slide2" className='d-block slide-cort mx-auto' />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={papel3} alt="slide3" className='d-block slide-cort mx-auto' />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={papel4} alt="slide4" className='d-block slide-cort mx-auto' />
                </Carousel.Item>
            </Carousel>
        </div>
    </Main>