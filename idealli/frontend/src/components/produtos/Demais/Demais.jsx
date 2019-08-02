import React from 'react'
import Main from '../../template/Main'

import demais1 from '../../../assets/demais/demais1.jpg'
import demais2 from '../../../assets/demais/demais2.jpg'
import demais3 from '../../../assets/demais/demais3.jpg'
import demais4 from '../../../assets/demais/demais4.jpg'
import demais5 from '../../../assets/demais/demais5.jpg'

import {Carousel} from 'react-bootstrap'

export default props =>
    <Main>
        <div className="content-carousel">
            <Carousel className='bg-white m-4'>
                <Carousel.Item>
                    <img src={demais1} alt="slide1" className='d-block slide-cort mx-auto' />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={demais2} alt="slide2" className='d-block slide-cort mx-auto' />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={demais3} alt="slide3" className='d-block slide-cort mx-auto' />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={demais4} alt="slide4" className='d-block slide-cort mx-auto' />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={demais5} alt="slide4" className='d-block slide-cort mx-auto' />
                </Carousel.Item>
            </Carousel>
        </div>
        <h1 className='m-5'>Almofada, Futton e Tapete</h1>
        <p className='ml-5'>Solicite já o seu orçamento e desfrute da beleza e conforto pelo melhor cursto beneficio.</p>
        <a href="https://whatsfacil.com/b39ecd" target="_blank" rel="noopener noreferrer" className="btn btn-outline-success  ml-5 mb-5 btn-lg" >
            Solicite seu orçamento  <i className="fa fa-whatsapp"></i>
        </a>
    </Main>