import './Footer.css'
import React from 'react'
export default props =>
    <footer className="footer  d-flex flex-row">
        <div className='footer-endereco '>
            <div>Visite nosso Showroon</div>
            <a href="https://www.google.com/maps/place/Idealli+Decora%C3%A7%C3%B5es/@-15.7429411,-47.9124543,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x103069ff6c6105bc!8m2!3d-15.7429411!4d-47.9102656" target="_blank" rel="noopener noreferrer">SHCNW EQ 10/11 Bl. B Loja 09 - Setor Noroeste</a>
        </div>
        <div className='footer-contato'>
            <div>Telefone e WhatsApp</div>
            <div>
                <a href="tel:+55-61-32749501" >(61)3274-9501</a>  -  <a href="tel:+55-61-984460210" >(61)98446-0210</a></div>
        </div>
        <div className="footer-func">
            <div>Funcionamento:</div>
            <div>Segunda - Sexta (09:00 - 18:00) e Sabádo  - (09:00 - 13:00)</div>
        </div>
        <div className="assinatura">
            Developed by Glayner
        </div>
    </footer>