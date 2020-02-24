import React, {Component} from 'react';
import './info.scss'
import {Input, Radio, Select} from "element-react";
export default class info extends Component {
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
            <div className={'sinfo_content'}>
                <div>
                    <span>基本资料</span>
                    <a>保存</a>
                </div>
                <label>
                    <span>头像</span>
                    <div className={'hp'}>
                        <img src={require('../../../../assets/images/touxiang.png')} />
                        <p>
                            <span>支持jpg、gif、png、jpeg或bmp格式的图片，建议文件小于20M</span>
                            <a>修改</a>
                        </p>
                    </div>
                </label>
                <label>
                    <span>昵称</span>
                    <div>
                        <Input/>
                    </div>
                </label>
                <label>
                    <span>姓名</span>
                    <div className={'name'}>
                        <Input placeholder={'姓名'}/><span>认证成功</span>
                    </div>
                </label>
                <label>
                    <span>性别</span>
                    <div>
                        <Radio value="1">男</Radio>
                        <Radio value="2">女</Radio>
                    </div>
                </label>
                <label>
                    <span>生日</span>
                    <div>
                        <Select style={{width:'1.8rem'}} value={this.state.value} placeholder={' '}>
                        {
                            this.state.options.map(el => {
                                return <Select.Option key={el.value} label={el.label} value={el.value} />
                            })
                        }
                    </Select>
                        <Select style={{width:'1.8rem'}} value={this.state.value}  placeholder={' '}>
                            {
                                this.state.options.map(el => {
                                    return <Select.Option key={el.value} label={el.label} value={el.value} />
                                })
                            }
                        </Select>
                        <Select style={{width:'1.8rem'}} value={this.state.value}  placeholder={' '}>
                            {
                                this.state.options.map(el => {
                                    return <Select.Option key={el.value} label={el.label} value={el.value} />
                                })
                            }
                        </Select>
                    </div>
                </label>
                <label>
                    <span>所在地区</span>
                    <div>
                        <Select style={{width:'1.8rem'}} value={this.state.value}  placeholder={'省'}>
                            {
                                this.state.options.map(el => {
                                    return <Select.Option key={el.value} label={el.label} value={el.value} />
                                })
                            }
                        </Select>
                        <Select style={{width:'1.8rem'}} value={this.state.value}  placeholder={'市'}>
                            {
                                this.state.options.map(el => {
                                    return <Select.Option key={el.value} label={el.label} value={el.value} />
                                })
                            }
                        </Select>
                        <Select style={{width:'1.8rem'}} value={this.state.value}  placeholder={'区'}>
                            {
                                this.state.options.map(el => {
                                    return <Select.Option key={el.value} label={el.label} value={el.value} />
                                })
                            }
                        </Select>
                        <Input style={{width:'5.8rem',marginTop:'0.14rem'}} placeholder={'请填写具体地址，方便证书邮递'}/>
                    </div>
                </label>
                <label>
                    <span>签名</span>
                    <div>
                        <Input/>
                    </div>
                </label>
                <label>
                    <span>专业</span>
                    <div>
                        <Input/>
                    </div>
                </label>
                <label>
                    <span>邮箱</span>
                    <div>
                        <Input/>
                    </div>
                </label>
            </div>
        )
    }
}
