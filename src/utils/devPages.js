import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import routes from '../router/route'

export default class devPages extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            s:[],
        };
    }

    loads(val){
        if(val.routes){
            val.routes.map((val)=>{this.loads(val)})
        }else{
            this.state.s.push(<Link style={{display:'block',fontSize:'20px',margin:'10px 40px'}} key={val.key ||val.path} to={val.path}>{val.path}</Link>)
        }
    }
    render() {
        routes.map((val)=>{this.loads(val)});
        return (
            <div>
                {this.state.s}
            </div>
        )
    }
}
