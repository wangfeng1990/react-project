import React from 'react'
import App from './App'
import Test from './pages/demo'
import { HashRouter, Route} from 'react-router-dom'

export default class EPRouter extends React.Component{
    render(){
        return(
            <HashRouter>
                <App>
                    <Route path="/test" component={Test}/>
                </App>
            </HashRouter>
        )
    }
}