import './DropdownProdutos.css'
import React from 'react'

export default props =>
    <div className="menu-produtos">
        <div className="menu-button ml-3">
            <h3>Produtos <i className="fa fa-angle-down"></i></h3>
        </div>
        <div className="menu-dropdown ">
            <div className="menu-dropdown-content">
                <h5>
                    <a href="cortinas">
                        Cortina
                    </a>
                </h5>
                <h5>
                    <a href="perseanas">
                        Perseana
                    </a>
                </h5>
                <h5>
                    <a href="papeldeparede">
                        Papel de parede
                    </a>
                </h5>
            </div>
        </div>
    </div>