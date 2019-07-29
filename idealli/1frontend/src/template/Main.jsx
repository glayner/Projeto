import './Main.css'
import React from 'react'
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
    <main className="content">
        <Carousel>
            <Carousel.Item>
                <img src={slide1} alt="slide1" className='d-block w-100'/>
                <Carousel.Caption>
                    <h3>descrição do primeiro slide</h3>
                    <p>aqui vai na minuncia</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={slide2} alt="slide2" className='d-block w-100'/>
                <Carousel.Caption>
                    <h3>descrição do segundo slide</h3>
                    <p>aqui vai na minuncia</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={slide3} alt="slide3" className='d-block w-100'/>
                <Carousel.Caption>
                    <h3>descrição do terceiro slide</h3>
                    <p>aqui vai na minuncia</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={slide4} alt="slide4" className='d-block w-100'/>
                <Carousel.Caption>
                    <h3>descrição do quarto slide</h3>
                    <p>aqui vai na minuncia</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={slide5} alt="slide5" className='d-block w-100'/>
                <Carousel.Caption>
                    <h3>descrição do quinto slide</h3>
                    <p>aqui vai na minuncia</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={slide6} alt="slide6" className='d-block w-100'/>
                <Carousel.Caption>
                    <h3>descrição do sexto slide</h3>
                    <p>aqui vai na minuncia</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={slide7} alt="slide7" className='d-block w-100'/>
                <Carousel.Caption>
                    <h3>descrição do setimo slide</h3>
                    <p>aqui vai na minuncia</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={slide8} alt="slide8" className='d-block w-100'/>
                <Carousel.Caption>
                    <h3>descrição do oitavo slide</h3>
                    <p>aqui vai na minuncia</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        
    </main>