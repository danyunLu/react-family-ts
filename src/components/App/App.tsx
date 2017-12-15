import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import getRouter from '../../router/router';
export default class App extends Component<any,any>{
    render(){
        return(
            <div>
                <Nav />
                {getRouter()}
            </div>
        )
    }
}