import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Header from '../../../layout/header/header'
import './applyCenter.scss'
import {Radio, Select} from "element-react";

export default class applyCenter extends Component {
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
    componentDidMount() {
        // if(!this.props.location.query || !this.props.location.query.id){
        //     this.props.history.goBack()
        // }
    }

    render() {
        return (
            <div className={'aC_wrap'}>
                <Header {...this.props} active={1}></Header>
                <div className={'content'}>
                    <div>
                        <label>
                            <p>欢迎进入考证报名中心</p>
                            <span></span>
                        </label>
                        <div className={'table'}>
                            <label>
                                <span>证书：</span>
                                <p>跨境电子商务师（三级）考试</p>
                            </label>
                            <label>
                                <span>考试时间：</span>
                                <p>2019.10.11  14:00 - 16:00</p>
                            </label>
                            <label>
                                <span>考证中心：</span>
                                <p>武汉他拍档网络科技有限公司培训机房</p>
                            </label>
                            <label>
                                <span>考场地址：</span>
                                <p>湖北武汉市洪山区黄家湖西路10号武汉工商学院1号楼；</p>
                            </label>
                            <label></label>
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
                                        <Radio value="1" checked={true}>在校考生</Radio>
                                        <Radio value="2" disabled={true}>社会考生</Radio>
                                    </div>
                                </label>
                                <label>
                                    <span>邀请码：</span>
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
                            <Link to={'/infoConfirm'}>提交报名</Link>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
