import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './allTest.scss'
export default class allTest extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={'alltest_content'}>
                <p>全部考试</p>
                <div>
                    <div>
                        <img src={require('../../../../assets/images/login_bg.png')}/>
                        <p><span>跨境电子商务师</span><span className={'pass'}>已通过</span></p>
                        <span>公需|3学时|适用于2017</span>
                        <div>
                            <a>去考试</a>
                        </div>
                    </div>
                    <div>
                        <img src={require('../../../../assets/images/login_bg.png')}/>
                        <p><span>跨境电子商务师</span><span className={'pass'}>已通过</span></p>
                        <span>公需|3学时|适用于2017</span>
                        <div>
                            <a>去考试</a>
                        </div>
                    </div>
                    <div>
                        <img src={require('../../../../assets/images/login_bg.png')}/>
                        <p><span>跨境电子商务师</span><span className={'nopass'}>未考试</span></p>
                        <span>公需|3学时|适用于2017</span>
                        <div>
                            <Link to={'/student/testing'}>去考试</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
