import React from 'react'
import {HashRouter as Router,Route,LinK} from 'react-router-dom'
import Main from './Main'
import About from './../route1/about'
import Topic from './../route1/topic'
import Home from './Home'
export default class IRouter extends React.Component{

    render(){
        return (
            <Router>
                <Home>
                    {/*1、外层精准匹配内层就无法匹配到了 2、render需要返回值，所以不能用括号括起来  */}
                    <Route path="/main" render={()=>
                        <Main>
                            <Route path="/main/a" component={About}></Route>
                        </Main>   
                    }></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/topics" component={Topic}></Route>
                </Home>
            </Router>
        );
    }
}