import './DropdownMenu.css'
import React from 'react'

export default props =>
    <div className="menu-produtos">
        <div className="menu-button ">
            <h3><i className="menu-icone fa fa-bars"></i></h3>
        </div>
        <div className="menu-dropdown ">
            <div className="menu-dropdown-content">
                <h5><a href="cortinas">Cortina</a></h5>
                <h5><a href="perseanas">Perseana</a></h5>
                <h5><a href="papeldeparede">Papel de parede</a></h5>
                <h5><a href="toldos">Toldos</a></h5>
                <h5><a href="demais">Outros</a></h5>
                <h5><a href="localizacao">Localização</a></h5>
                <h5><a href="#footer-contact">Contato</a></h5>
            </div>
        </div>
    </div>