import './Header.css'
import React from 'react'
import Dropdown from './DropdownProdutos'
import { Button } from 'react-bootstrap';
// const wpp = `http://api.whatsapp.com/send?1=pt_BR&phone=5561984460210`



export default props =>
    <header className='header '>
        
        <Dropdown />
        <h5 className='nav d-none d-xl-flex'><a href="quemsomos">Quem somos</a></h5>
        <h5 className='nav d-none d-xl-flex'><a href="localizacao">Localização</a></h5>
        <h5 className='nav d-none d-xl-flex'><a href="contato">Contato</a></h5>
        <a href="https://whatsfacil.com/b39ecd" target="_blank" rel="noopener noreferrer" className='link-orcamento mx-auto'>
            <Button variant='success' size='lg'>Solicite seu orçamento</Button>
        </a>

    </header>