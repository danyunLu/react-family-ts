import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class Nav extends Component {
    render() {
        return (
            <ul>
                <li><Link to="/">首页</Link></li>
            </ul>
        )
    }
}