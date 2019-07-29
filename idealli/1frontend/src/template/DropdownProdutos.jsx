import './DropdownProdutos.css'
import React from 'react'

export default props =>
    <div className="menu-produtos">
        <div className="menu-button ml-3">
            <h3>Produtos <i className="fa fa-angle-down"></i></h3>
        </div>
        <div className="menu-dropdown ">
            <div className="menu-dropdown-content">
                <a href="/">
                    Cortina
                </a>
                <a href="/">
                    Perseana
                </a>
                <a href="/">
                    Papel de parede
                </a>
            </div>
        </div>
    </div>