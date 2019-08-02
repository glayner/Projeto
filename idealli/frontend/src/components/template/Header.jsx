import './Header.css'
import React from 'react'
import Dropdown from './DropdownMenu'
import { Button } from 'react-bootstrap'



export default props =>
    <header className='header '>

        <h6 className='nav d-none d-xl-flex'><a href="cortinas">Cortinas</a></h6>
        <h6 className='nav d-none d-xl-flex'><a href="perseanas">Perseanas</a></h6>
        <h6 className='nav d-none d-xl-flex'><a href="papeldeparede">Papel de parede</a></h6>
        <h6 className='nav d-none d-xl-flex'><a href="toldos">Toldos</a></h6>
        <h6 className='nav d-none d-xl-flex'><a href="localizacao">Localização</a></h6>
        <h6 className='nav d-none d-xl-flex'><a href="#footer-contact">Contato</a></h6>
        <a href="https://whatsfacil.com/b39ecd" target="_blank" rel="noopener noreferrer" className='link-orcamento mx-auto'>
            <Button variant='success' size='lg' className="d-none d-sm-block">Solicite seu orçamento <i className="fa fa-whatsapp"></i></Button>
            <Button variant='success' size='lg' className="d-block d-sm-none">orçamento <i className="fa fa-whatsapp"></i></Button>
        </a>
        <div className='d-flex d-xl-none'>
            <Dropdown />
        </div>
    </header>