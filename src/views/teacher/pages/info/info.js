import React, {Component} from 'react';
import './info.scss'
import {Radio,Select,} from 'element-react'

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
            <div className={'tinfo_content'}>
                <div>
                    <span>基本资料</span>
                    <a>保存</a>
                </div>
                <label>
                    <span>昵称：</span><br/>
                    <input placeholder={'欧阳小小'}/>
                </label>
                <label>
                    <span>性别：</span>
                    <div>
                        <Radio value="1">备选项</Radio>
                        <Radio value="2">备选项</Radio>
                    </div>
                </label>
                <label>
                    <span>所在城市：</span><br/>
                    <Select style={{width:'1.8rem'}} value={this.state.value} placeholder="请选择省/市">
                        {
                            this.state.options.map(el => {
                                return <Select.Option key={el.value} label={el.label} value={el.value} />
                            })
                        }
                    </Select>
                    <Select style={{width:'1.8rem'}} value={this.state.value} placeholder="请选择省/市">
                        {
                            this.state.options.map(el => {
                                return <Select.Option key={el.value} label={el.label} value={el.value} />
                            })
                        }
                    </Select>
                    <Select style={{width:'1.8rem'}} value={this.state.value} placeholder="请选择省/市">
                        {
                            this.state.options.map(el => {
                                return <Select.Option key={el.value} label={el.label} value={el.value} />
                            })
                        }
                    </Select>
                </label>
                <label>
                    <span>教育程度：</span>
                    <Select style={{width:'1.8rem'}} value={this.state.value} placeholder="请选择">
                        {
                            this.state.options.map(el => {
                                return <Select.Option key={el.value} label={el.label} value={el.value} />
                            })
                        }
                    </Select>
                </label>
                <label>
                    <span>真实姓名：</span><br/>
                    <input placeholder={'欧阳小小'}/>
                </label>
                <label>
                    <span>身份证号码：</span><br/>
                    <input placeholder={'6546123216545'}/>
                </label>
                <label>
                    <span>工作单位：</span><br/>
                    <input placeholder={'大洋教育科技有限公司'}/>
                </label>
            </div>
        )
    }
}
