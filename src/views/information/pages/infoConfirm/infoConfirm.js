import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Header from "../../../layout/header/header";
import {Radio, Select} from "element-react";
import './infoConfirm.scss'

export default class infoConfirm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [{
                value: '选项1',
                label: '本科'
            }, {
                value: '选项2',
                label: '大专'
            }],
            value: ''
        };
    }

    render() {
        return (
            <div className={'iC_wrap'}>
                <Header {...this.props} active={1}></Header>
                <div className={'content'}>
                    <div>
                        <label>
                            <p>欢迎进入考证报名中心</p>
                            <span></span>
                        </label>
                        <div className={'table'}>
                            <div>
                                <div>
                                    <div>
                                        <span>证书类型：</span>
                                        <Select style={{width:'2.8rem'}} value={this.state.value} placeholder={' '}>
                                            {
                                                this.state.options.map(el => {
                                                    return <Select.Option key={el.value} label={el.label} value={el.value} />
                                                })
                                            }
                                        </Select>
                                    </div>
                                    <div>
                                        <span>考证中心：</span>
                                        <Select style={{width:'2.8rem'}} value={this.state.value} placeholder={' '}>
                                            {
                                                this.state.options.map(el => {
                                                    return <Select.Option key={el.value} label={el.label} value={el.value} />
                                                })
                                            }
                                        </Select>
                                    </div>
                                    <div>
                                        <span>考试日期：</span>
                                        <Select style={{width:'2.8rem'}} value={this.state.value} placeholder={' '}>
                                            {
                                                this.state.options.map(el => {
                                                    return <Select.Option key={el.value} label={el.label} value={el.value} />
                                                })
                                            }
                                        </Select>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span>证书名称：</span>
                                        <Select style={{width:'2.8rem'}} value={this.state.value} placeholder={' '}>
                                            {
                                                this.state.options.map(el => {
                                                    return <Select.Option key={el.value} label={el.label} value={el.value} />
                                                })
                                            }
                                        </Select>
                                    </div>
                                    <div>
                                        <span>考场选择：</span>
                                        <Select style={{width:'2.8rem'}} value={this.state.value} placeholder={' '}>
                                            {
                                                this.state.options.map(el => {
                                                    return <Select.Option key={el.value} label={el.label} value={el.value} />
                                                })
                                            }
                                        </Select>
                                    </div>
                                </div>
                            </div>
                            <label>
                                <label>
                                    <span>姓名：</span>
                                    <div><input /></div>
                                </label>
                                <label>
                                    <span>性别：</span>
                                    <div><input /></div>
                                </label>
                            </label>
                            <label>
                                <label>
                                    <span>出生日期：</span>
                                    <div>
                                        <Select style={{width:'1.4rem'}} value={this.state.value} placeholder={' '}>
                                            {
                                                this.state.options.map(el => {
                                                    return <Select.Option key={el.value} label={el.label} value={el.value} />
                                                })
                                            }
                                        </Select>
                                        <Select style={{width:'1.4rem'}} value={this.state.value} placeholder={' '}>
                                            {
                                                this.state.options.map(el => {
                                                    return <Select.Option key={el.value} label={el.label} value={el.value} />
                                                })
                                            }
                                        </Select>
                                        <Select style={{width:'1.4rem'}} value={this.state.value} placeholder={' '}>
                                            {
                                                this.state.options.map(el => {
                                                    return <Select.Option key={el.value} label={el.label} value={el.value} />
                                                })
                                            }
                                        </Select>
                                    </div>
                                </label>
                                <label>
                                    <span>民族：</span>
                                    <div><input /></div>
                                </label>
                            </label>
                            <label>
                                <label>
                                    <span>户口所在地：</span>
                                    <div><input /></div>
                                </label>
                                <label>
                                    <span>身份证号：</span>
                                    <div><input /></div>
                                </label>
                            </label>
                            <label>
                                <label>
                                    <span>联系地址：</span>
                                    <div><input /></div>
                                </label>
                                <label>
                                    <span>手机号码：</span>
                                    <div><input /></div>
                                </label>
                            </label>
                            <label>
                                <label>
                                    <span>考生身份：</span>
                                    <div style={{justifyContent:'center'}}>
                                        <Radio value="1" disabled={true}>在校考生</Radio>
                                        <Radio value="2" checked={true}>社会考生</Radio>
                                    </div>
                                </label>
                                <label>
                                    <span>考试费用：</span>
                                    <div><input style={{color:'#EC4949'}} value={'￥299.00'} /></div>
                                </label>
                            </label>
                        </div>
                        <p>
                            <Link to={'/pay'}>去支付</Link>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
