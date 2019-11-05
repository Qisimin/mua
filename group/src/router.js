import React from 'react'
import {HashRouter,Link,Switch,Route,withRouter,Redirect} from 'react-router-dom'
import loadable from './utils/loadable'

const Login =loadable(()=>import('./pages/login/login'))
const Admin =loadable(()=>import('./pages/admin/admin'))

class RootRoute extends React.Component{
    render(){
        return(
            <HashRouter>
                <Switch>
                    <Redirect exact from='/' to='/login'></Redirect>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/admin' component={()=>{
                        return(
                            <Admin>
                                {/*<Route path='/admin/home' component={Home}></Route> */}
                                
                            </Admin>
                        )
                    }}></Route>
                </Switch>
            </HashRouter>
        )
    }
}
export default RootRoute