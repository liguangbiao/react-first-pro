import React, {Component} from 'react';
import {Checkbox, Tabs} from 'element-react'
import './certificateCheck.scss'
import {Link} from "react-router-dom";

export default class certificateCheck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users:['','','']
        };
        this.tabClick = this.tabClick.bind(this)
    }
    tabClick(v){
        if(v.props.name === '1'){
            this.props.history.push({pathname:'/admin/infoCheck'})
        }
    }
    render() {
        return (
            <div className={'admin_certificateCheck'}>
                <div>
                    <div>
                        <p>考试审核</p>
                        <label>
                            <input placeholder={'请输入账号用户搜索'}/>
                            <a><i className={'el-icon-search'}> </i></a>
                        </label>
                    </div>
                    <div>
                        <Tabs type="card" value="2" onTabClick={(tab)=>{this.tabClick(tab)}}>
                            <Tabs.Pane label="考试信息审核" name="1" >
                                <a className={'active'}>三级考证</a>
                                <a>教育部1+X考证</a>
                                <a>教育学会考证</a>
                            </Tabs.Pane>
                            <Tabs.Pane label="证书发布审核" name="2">
                                <a className={'active'}>三级考证</a>
                                <a>教育部1+X考证</a>
                                <a>教育学会考证</a>
                            </Tabs.Pane>
                        </Tabs>
                    </div>
                </div>
                <div className={'table'}>
                    <div>
                        <div>用户名称</div>
                        <div>身份证</div>
                        <div>准考证</div>
                        <div>手机号</div>
                    </div>
                    {
                        this.state.users.map((val,index) => {
                            return (
                                <div key={index}>
                                    <div>
                                        <Checkbox onChange={(val)=>{}} checked={false}> </Checkbox>
                                        {/*<img alt='' src={val.headImg}/>*/}
                                        <img alt='' src={require('../../../../assets/images/touxiang.png')}/>
                                        <div>
                                            <p>1111112132</p>
                                            <span>111</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span>13453453453411</span>
                                    </div>
                                    <div>
                                        <span>564542234234234</span>
                                    </div>
                                    <div>
                                        <div>
                                            <span>13645445456</span>
                                        </div>
                                        <Link to={'/admin/certificateCheck'}>通过审核</Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
