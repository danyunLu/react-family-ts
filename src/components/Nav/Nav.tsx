import React, { Component } from 'react';
import {Link} from "react-router-dom";

import './styles/nav.css';

export default class Nav extends Component<any,any> {
    render() {
        return (
            <ul className="m-nav">
                <li><Link to="/">首页</Link></li>
            </ul>
        )
    }
}