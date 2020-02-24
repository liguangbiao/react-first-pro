import React, {Component} from 'react';
import Header from '../../views/layout/header/header'
import './process.scss'

export default class process extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={'process_wrap'}>
                <Header {...this.props} active={2}></Header>
                <div className={'banner'}></div>
                <div className={'content'}>
                    <p>考前须知</p>
                    <span></span>
                </div>
            </div>
        )
    }
}
