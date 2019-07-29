import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import Cortinas from '../components/Cortinas/Cortinas'
import Perseanas from '../components/perseanas/perseanas'
import PapelDeParede from '../components/PapelDeParede/PapelDeParede'
import Contato from '../components/Contato/Contato'

export default props=>
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/cortinas' component={Cortinas}/>
        <Route exact path='/perseanas' component={Perseanas}/>
        <Route exact path='/papeldeparede' component={PapelDeParede}/>
        <Route exact path='/contato' component={Contato}/>
        <Redirect from='*' to='/' />
    </Switch>