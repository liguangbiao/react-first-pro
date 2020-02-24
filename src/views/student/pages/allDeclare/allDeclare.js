import React, {Component} from 'react';
import './allDeclare.scss'

export default class allDeclare extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={'allD_content'}>
                <p>全部申报</p>
                <div>
                    <div>
                        <img src={require('../../../../assets/images/login_bg.png')}/>
                        <p><span>跨境电子商务师</span><span className={'pass'}>待申报</span></p>
                        <span>公需|3学时|适用于2017</span>
                        <div>
                            <a>去申报</a>
                        </div>
                    </div>
                    <div>
                        <img src={require('../../../../assets/images/login_bg.png')}/>
                        <p><span>跨境电子商务师</span><span className={'pass'}>待申报</span></p>
                        <span>公需|3学时|适用于2017</span>
                        <div>
                            <a>去申报</a>
                        </div>
                    </div>
                    <div>
                        <img src={require('../../../../assets/images/login_bg.png')}/>
                        <p><span>跨境电子商务师</span><span className={'nopass'}>未生成</span></p>
                        <span>公需|3学时|适用于2017</span>
                        <div>
                            <a>去申报</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
