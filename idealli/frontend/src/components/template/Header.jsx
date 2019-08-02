import './Header.css'
import React from 'react'
import Dropdown from './DropdownMenu'




export default props =>
    <header className='header '>

        <h6 className='nav d-none d-xl-flex'><a href="cortinas">Cortinas</a></h6>
        <h6 className='nav d-none d-xl-flex'><a href="perseanas">Perseanas</a></h6>
        <h6 className='nav d-none d-xl-flex'><a href="papeldeparede">Papel de parede</a></h6>
        <h6 className='nav d-none d-xl-flex'><a href="toldos">Toldos</a></h6>
        <h6 className='nav d-none d-xl-flex'><a href="demais">Outros</a></h6>
        <h6 className='nav d-none d-xl-flex'><a href="localizacao">Localização</a></h6>
        <h6 className='nav d-none d-xl-flex'><a href="#footer-contact">Contato</a></h6>

        <div className='ml-5 mr-5'>
            <a href="https://whatsfacil.com/b39ecd" target="_blank" rel="noopener noreferrer"
                className="link-orcamento mx-auto d-none d-sm-flex btn btn-success btn-lg" >
                Solicite seu orçamento <i className="ml-2 fa fa-whatsapp"></i>
            </a>
            <a href="https://whatsfacil.com/b39ecd" target="_blank" rel="noopener noreferrer"
                className="link-orcamento mx-auto d-flex d-sm-none btn btn-success btn-lg" >
                orçamento <i className="ml-2 fa fa-whatsapp"></i>
            </a>
        </div>
        <div className='d-flex d-xl-none'>
            <Dropdown />
        </div>
    </header>