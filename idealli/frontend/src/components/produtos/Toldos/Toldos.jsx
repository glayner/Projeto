import React from 'react'
import Main from '../../template/Main'

import toldo1 from '../../../assets/toldos/toldo1.jpg'
import toldo2 from '../../../assets/toldos/toldo2.jpg'
import toldo3 from '../../../assets/toldos/toldo3.jpg'
import toldo4 from '../../../assets/toldos/toldo4.jpg'

import {Carousel} from 'react-bootstrap'

export default props =>
    <Main>
        <div className="content-carousel">
            <Carousel className='bg-white m-4'>
                <Carousel.Item>
                    <img src={toldo1} alt="slide1" className='d-block slide-cort mx-auto' />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={toldo2} alt="slide2" className='d-block slide-cort mx-auto' />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={toldo3} alt="slide3" className='d-block slide-cort mx-auto' />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={toldo4} alt="slide4" className='d-block slide-cort mx-auto' />
                </Carousel.Item>
            </Carousel>
        </div>
        <h1 className='m-5'>Toldos articulados</h1>
        <p className='ml-5'>Solicite já o seu orçamento e desfrute da beleza e conforto pelo melhor cursto beneficio.</p>
        <a href="https://whatsfacil.com/b39ecd" target="_blank" rel="noopener noreferrer" className="btn btn-outline-success ml-5 mb-5 btn-lg" >
            Solicite seu orçamento de toldos  <i className="fa fa-whatsapp"></i>
        </a>
    </Main>