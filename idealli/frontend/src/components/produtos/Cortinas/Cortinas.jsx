import React from 'react'
import Main from '../../template/Main'

import cortina1 from '../../../assets/cortinas/cortina1.jpg'
import cortina2 from '../../../assets/cortinas/cortina2.jpg'
import cortina3 from '../../../assets/cortinas/cortina3.jpg'
import cortina4 from '../../../assets/cortinas/cortina4.jpg'

import { Carousel } from 'react-bootstrap'

export default props =>
    <Main>

        <div className="content-carousel">
            <Carousel className='bg-white m-4'>
                <Carousel.Item>
                    <img src={cortina1} alt="slide1" className='d-block slide-cort mx-auto' />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={cortina2} alt="slide2" className='d-block slide-cort mx-auto' />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={cortina3} alt="slide3" className='d-block slide-cort mx-auto' />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={cortina4} alt="slide4" className='d-block slide-cort mx-auto' />
                </Carousel.Item>
            </Carousel>
        </div>
        <h1 className='m-5'>Cortinas feitas sob medida</h1>
        <p className='ml-5'>Solicite já o seu orçamento e desfrute da beleza e conforto pelo melhor cursto beneficio.</p>
        <a href="https://whatsfacil.com/b39ecd" target="_blank" rel="noopener noreferrer" className="btn btn-outline-success  ml-5 mb-5 btn-lg" >
            Solicite seu orçamento de cortinas  <i className="fa fa-whatsapp"></i>
        </a>
    </Main>