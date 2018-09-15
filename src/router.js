import React from 'react'
import App from './App'
import Test from './pages/demo'
import Page404 from './pages/404'
import { HashRouter, Route, Switch} from 'react-router-dom'

export default class EPRouter extends React.Component{
    render(){
        return(
            <HashRouter>
                <App>
                    <Switch>
                    <Route path="/test" component={Test}/>
                    <Route exact component={Page404}/>
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}