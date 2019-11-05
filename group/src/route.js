import React, { Component,Fragment } from 'react'
import {HashRouter,Link,Switch,Route,withRouter,Redirect} from 'react-router-dom'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'
import Reg from './pages/reg/reg'
// const Login = loadable(()=>import('./pages/login/login'))


export default class RootRoute extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Redirect exact from='/' to='/login'></Redirect>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/admin' component={Admin}></Route>
                    <Route path='/reg' component={Reg}></Route>
                </Switch>
            </HashRouter>
        )
    }
}
