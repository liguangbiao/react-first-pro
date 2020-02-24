import React, {Component} from 'react';
import './pay.scss'
import Header from "../../../layout/header/header";

export default class pay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            choose:1
        };
    }

    render() {
        return (
            <div className={'pay_wrap'}>
                <Header {...this.props} active={1}></Header>
                <div className={'main'}>
                    <div>
                        <p>支付编号：1234567890</p>
                        <p>支付金额：<span className={'price'}>￥299.00</span></p>
                        <p style={{width:'100%',margin:'0.4rem 0 0.1rem 0'}}>选择支付方式：</p>
                        <div>
                            <a onClick={()=>{this.setState({choose:1})}} className={`${this.state.choose === 1?'active':''}`}>
                                <img src={require('../../../../assets/images/wxpay.png')}/>微信支付
                            </a>
                            <a onClick={()=>{this.setState({choose:2})}} className={`${this.state.choose === 2?'active':''}`}>
                                <img src={require('../../../../assets/images/zfbpay.png')}/>支付宝支付
                            </a>
                        </div>
                        <div>
                            <img src={require('../../../../assets/images/qt1.png')}/>
                            <img src={require('../../../../assets/images/qt1.png')}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
