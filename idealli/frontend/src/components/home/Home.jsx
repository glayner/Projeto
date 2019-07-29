import React from 'react'
import Main from '../template/Main'

import slide1 from '../../assets/carousel/slide1.jpg'
import slide2 from '../../assets/carousel/slide2.jpg'
import slide3 from '../../assets/carousel/slide3.jpg'
import slide4 from '../../assets/carousel/slide4.jpg'
import slide5 from '../../assets/carousel/slide5.jpg'
import slide6 from '../../assets/carousel/slide6.jpg'
import slide7 from '../../assets/carousel/slide7.jpg'
import slide8 from '../../assets/carousel/slide8.jpg'

import { Carousel } from 'react-bootstrap'

export default props =>
    <Main>
        
        <div className="content-carousel d-block">
            <Carousel className='bg-white'>
                <Carousel.Item>
                    <img src={slide1} alt="slide1" className='d-block w-100 mx-auto' />
                    <Carousel.Caption>
                        <h1>descrição do primeiro slide</h1>
                        <p>aqui vai na minuncia</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slide2} alt="slide2" className='d-block w-100 mx-auto' />
                    <Carousel.Caption>
                        <h1>descrição do segundo slide</h1>
                        <p>aqui vai na minuncia</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slide3} alt="slide3" className='d-block w-100 mx-auto' />
                    <Carousel.Caption>
                        <h1>descrição do terceiro slide</h1>
                        <p>aqui vai na minuncia</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slide4} alt="slide4" className='d-block w-100 mx-auto' />
                    <Carousel.Caption>
                        <h1>descrição do quarto slide</h1>
                        <p>aqui vai na minuncia</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slide5} alt="slide5" className='d-block w-100 mx-auto' />
                    <Carousel.Caption>
                        <h1>descrição do quinto slide</h1>
                        <p>aqui vai na minuncia</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slide6} alt="slide6" className='d-block w-100 mx-auto' />
                    <Carousel.Caption>
                        <h1>descrição do sexto slide</h1>
                        <p>aqui vai na minuncia</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slide7} alt="slide7" className='d-block w-100 mx-auto' />
                    <Carousel.Caption>
                        <h1>descrição do setimo slide</h1>
                        <p>aqui vai na minuncia</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slide8} alt="slide8" className='d-block w-100 mx-auto' />
                    <Carousel.Caption>
                        <h1>descrição do oitavo slide</h1>
                        <p>aqui vai na minuncia</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        <div>
            
        </div>
    </Main>