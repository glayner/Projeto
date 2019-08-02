import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import Cortinas from '../components/produtos/Cortinas/Cortinas'
import Perseanas from '../components/produtos/perseanas/perseanas'
import PapelDeParede from '../components/produtos/PapelDeParede/PapelDeParede'
import Toldos from '../components/produtos/Toldos/Toldos'
import Localizacao from '../components/localizacao/localizacao'

export default props=>
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/cortinas' component={Cortinas}/>
        <Route exact path='/perseanas' component={Perseanas}/>
        <Route exact path='/papeldeparede' component={PapelDeParede}/>
        <Route exact path='/toldos' component={Toldos}/>
        <Route exact path='/localizacao' component={Localizacao}/>
        <Redirect from='*' to='/' />
    </Switch>