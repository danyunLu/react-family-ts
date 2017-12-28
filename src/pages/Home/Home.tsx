import React,{Component} from "react";
import { Banner } from "./index";

import './styles/home.css';

export default class Home extends Component<any,any>{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className='m-home'>
                <Banner />
            </div>
        )
    }
}