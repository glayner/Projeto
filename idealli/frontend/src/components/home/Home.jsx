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
import cortina from '../../assets/cortinas/cortina1.jpg'
import perseana from '../../assets/perseanas/perseana1.jpg'
import papelDeParede from '../../assets/papeisDeParede/papeldeparede1.jpg'
import toldo from '../../assets/toldos/toldo1.jpg'

import { Carousel, Button } from 'react-bootstrap'

export default props =>
    <Main>

        <div className="content-carousel d-block">
            <Carousel className='bg-white'>
                <Carousel.Item>
                    <img src={slide1} alt="slide1" className='d-block w-100 mx-auto' />
                    <Carousel.Caption className='text-carousel'>
                        <h1>descrição do primeiro slide</h1>
                        <p>aqui vai na minuncia</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slide2} alt="slide2" className='d-block w-100 mx-auto' />
                    <Carousel.Caption className='text-carousel'>
                        <h1>descrição do segundo slide</h1>
                        <p>aqui vai na minuncia</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slide3} alt="slide3" className='d-block w-100 mx-auto' />
                    <Carousel.Caption className='text-carousel'>
                        <h1>descrição do terceiro slide</h1>
                        <p>aqui vai na minuncia</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slide4} alt="slide4" className='d-block w-100 mx-auto' />
                    <Carousel.Caption className='text-carousel'>
                        <h1>descrição do quarto slide</h1>
                        <p>aqui vai na minuncia</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slide5} alt="slide5" className='d-block w-100 mx-auto' />
                    <Carousel.Caption className='text-carousel'>
                        <h1>descrição do quinto slide</h1>
                        <p>aqui vai na minuncia</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slide6} alt="slide6" className='d-block w-100 mx-auto' />
                    <Carousel.Caption className='text-carousel'>
                        <h1>descrição do sexto slide</h1>
                        <p>aqui vai na minuncia</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slide7} alt="slide7" className='d-block w-100 mx-auto' />
                    <Carousel.Caption className='text-carousel'>
                        <h1>descrição do setimo slide</h1>
                        <p>aqui vai na minuncia</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={slide8} alt="slide8" className='d-block w-100 mx-auto' />
                    <Carousel.Caption className='text-carousel'>
                        <h1>descrição do oitavo slide</h1>
                        <p>aqui vai na minuncia</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

        <div className="grid d-sm-flex">
            <figure className="effect-layla">
                <img src={cortina} alt="img01" />
                <figcaption>
                    <h2> <span>Cortinas</span></h2>
                    <p>Conheça nossas cortinas sob medida para voĉe.</p>
                    <a href="cortinas">View more</a>
                </figcaption>
            </figure>
            <figure className="effect-layla">
                <img src={perseana} alt="img02" />
                <figcaption>
                    <h2> <span>Perseanas</span></h2>
                    <p>As melhores perseanas para sua casa.</p>
                    <a href="perseanas">View more</a>
                </figcaption>
            </figure>
            </div>
            <div className="grid d-sm-flex">
            <figure className="effect-layla">
                <img src={papelDeParede} alt="img03" />
                <figcaption>
                    <h2><span>Papel de parede</span></h2>
                    <p>Papeis de parede para embelezar o seu lar.</p>
                    <a href="papeldeparede">View more</a>
                </figcaption>
            </figure>
            <figure className="effect-layla">
                <img src={toldo} alt="img04" />
                <figcaption>
                    <h2><span>Toldo</span></h2>
                    <p>Toldos Articulados: Proteção e Privacidade.</p>
                    <a href="toldos">View more</a>
                </figcaption>
            </figure>
        </div>

        <div className="container">
            <div className="apresentacao">
                <h1 className="display-4">Idealli decorações</h1>
                <p className="lead">O melhor para o seu ambiente</p>
                <hr className="my-4" />
                <p>Entre em contato com nossos vendedores para fazer um orçamento perfeito para você</p>
                <a href="https://whatsfacil.com/b39ecd" target="_blank" rel="noopener noreferrer" className='link-orcamento mx-auto'>
                    <Button variant='success' size='lg'>Solicite seu orçamento <i className="fa fa-whatsapp"></i></Button>
                </a>
            </div>
        </div>
        <div className="container mb-5">
            <div className='quemsomos d-xl-flex' id='info-quemsomos'>
                <span className="fa fa-history"></span>
                <div className="ml-3">
                    <h3>Quem somos</h3>
                    <p>A Idealli Decorações foi fundada em 2004, como uma empresa familiar, que zela pela qualidade e excelência segmento. Atuando há mais de 10 anos no mercado,  a Idealli Decorações vem prestando um serviço inovador,  disponibilizando produtos diferenciados, exclusivos  e de qualidade. Ao analisar o setor de  decorações de interiores,  identificamos  algumas deficiências,  então  a empresa abraçou  o desafio de oferecer soluções criativas  e personalizadas tornando assim seu principal objetivo.</p>
                </div>
            </div>
            <div className='quemsomos d-xl-flex mt-4'>
                <span className="fa fa-bullseye"></span>
                <div className="ml-3">
                    <h3>Objetivo</h3>
                    <p>“Comercializar produtos e serviços com o compromisso de oferecer soluções práticas e criativas para as necessidades do cliente e do mercado de decoração de interiores.<br /> Ser reconhecida pela qualidade dos produtos e serviços prestados com compromisso, inovação e aprimoramento contínuo”</p>
                </div>
            </div>
            <div className='quemsomos d-xl-flex mt-4'>
                <span className="fa fa-heart"></span>
                <div className="ml-3">
                    <h3>Valores</h3>
                    <p>Temos a consciência de que o sucesso é a consequência da fidelização e da conquista de novos clientes:</p>
                    <p>Agregando valor</p>
                    <p>Respeitando nossos colaboradores, clientes e parceiros</p>
                    <p>Agindo com ética, disciplina, honestidade e transparência</p>
                    <p>Promovendo o desenvolvimento da equipe</p>
                </div>
            </div>
        </div>
    </Main>