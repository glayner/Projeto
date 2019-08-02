import React from 'react'
import Main from '../../template/Main'

import perseana1 from '../../../assets/perseanas/perseana1.jpg'
import perseana2 from '../../../assets/perseanas/perseana2.jpg'
import perseana3 from '../../../assets/perseanas/perseana3.jpg'
import perseana4 from '../../../assets/perseanas/perseana4.jpg'

import {Carousel} from 'react-bootstrap'

export default props =>
    <Main>
        <div className="content-carousel">
            <Carousel className='bg-white m-4'>
                <Carousel.Item>
                    <img src={perseana1} alt="slide1" className='d-block slide-cort mx-auto' />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={perseana2} alt="slide2" className='d-block slide-cort mx-auto' />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={perseana3} alt="slide3" className='d-block slide-cort mx-auto' />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={perseana4} alt="slide4" className='d-block slide-cort mx-auto' />
                </Carousel.Item>
            </Carousel>
        </div>
        <h1 className='m-5'>Perseanas</h1>
        <p className='ml-5'>Solicite já o seu orçamento e desfrute da beleza e conforto pelo melhor cursto beneficio.</p>
        <a href="https://whatsfacil.com/b39ecd" target="_blank" rel="noopener noreferrer" className="btn btn-outline-success  ml-5 mb-5 btn-lg" >
            Solicite seu orçamento de perseanas  <i className="fa fa-whatsapp"></i>
        </a>
    </Main>