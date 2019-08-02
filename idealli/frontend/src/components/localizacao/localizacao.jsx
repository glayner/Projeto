import React from 'react'
import Main from '../template/Main'


export default props =>
    <Main>
        <div className="row localizacao">
            <div className="col-12">
                <h3 className='title-loc'><strong>Show Room </strong> Noroeste</h3>
                <p>Setor Noroeste</p>
                <p>SHCNW EQ 10/11 Bl. B Loja 09 B </p>
                <p>Brasília-DF</p>
                <p>70297-400</p>
            </div>
            <div className='col-12'>
                <iframe width="100%" height="200" title='mapa noroeste'  src="https://maps.google.com/maps?width=700&amp;height=200&amp;hl=pt&amp;q=idealli%20decora%C3%A7%C3%B5es+(Idealli%20decora%C3%A7%C3%B5es)&amp;ie=UTF8&amp;t=&amp;z=16&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                </iframe>
            </div>
        </div>
        <div className="row localizacao">
            <div className="col-12">
                <h3 className='title-loc'><strong>Loja e fabrica</strong> Ceilândia</h3>
                <p>Ceilândia Sul</p>
                <p>EQNM 21/23 Bl A Conjunto B </p>
                <p>Brasília-DF</p>
                <p>72215-580</p>
            </div>
            <div className="col-12">
            <iframe width="100%" height="200" title='mapa ceilandia' src="https://maps.google.com/maps?width=700&amp;height=200&amp;hl=pt&amp;q=-15.829100%2C%20-48.096057+(Idealli%20Decora%C3%A7%C3%B5es)&amp;ie=UTF8&amp;t=&amp;z=16&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
        </div>
    </Main>