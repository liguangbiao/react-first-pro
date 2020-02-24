import React, {Component} from 'react';
import {Tabs} from 'element-react'
import './certificateCheck.scss'

export default class certificateCheck extends Component {
    constructor(props) {
        super(props);
        this.state = {};
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
                <div>
                    <div>
                        <img src={require('../../../../assets/images/touxiang.png')}/>
                        <label>
                            <img src={require('../../../../assets/images/c_logo1.png')}/>
                            <p><span>姓名：</span><span>欧阳小小</span></p>
                        </label>
                        <label>
                            <img src={require('../../../../assets/images/c_logo2.png')}/>
                            <p><span>身份证：</span><span>654651654654</span></p>
                        </label>
                        <label>
                            <img src={require('../../../../assets/images/c_logo3.png')}/>
                            <p><span>账号：</span><span>fsdfsdfsdfsf</span></p>
                        </label>
                        <label>
                            <img src={require('../../../../assets/images/c_logo4.png')}/>
                            <p><span>准考证：</span><span>654615646545</span></p>
                        </label>
                        <label>
                            <img src={require('../../../../assets/images/c_logo5.png')}/>
                            <p><span>手机号：</span><span>1365897654</span></p>
                        </label>
                    </div>
                    <div>
                        <img src={require('../../../../assets/images/touxiang.png')}/>
                        <label>
                            <img src={require('../../../../assets/images/c_logo1.png')}/>
                            <p><span>姓名：</span><span>欧阳小小</span></p>
                        </label>
                        <label>
                            <img src={require('../../../../assets/images/c_logo2.png')}/>
                            <p><span>身份证：</span><span>654651654654</span></p>
                        </label>
                        <label>
                            <img src={require('../../../../assets/images/c_logo3.png')}/>
                            <p><span>账号：</span><span>fsdfsdfsdfsf</span></p>
                        </label>
                        <label>
                            <img src={require('../../../../assets/images/c_logo4.png')}/>
                            <p><span>准考证：</span><span>654615646545</span></p>
                        </label>
                        <label>
                            <img src={require('../../../../assets/images/c_logo5.png')}/>
                            <p><span>手机号：</span><span>1365897654</span></p>
                        </label>
                    </div>
                    <div>
                    <img src={require('../../../../assets/images/touxiang.png')}/>
                    <label>
                        <img src={require('../../../../assets/images/c_logo1.png')}/>
                        <p><span>姓名：</span><span>欧阳小小</span></p>
                    </label>
                    <label>
                        <img src={require('../../../../assets/images/c_logo2.png')}/>
                        <p><span>身份证：</span><span>654651654654</span></p>
                    </label>
                    <label>
                        <img src={require('../../../../assets/images/c_logo3.png')}/>
                        <p><span>账号：</span><span>fsdfsdfsdfsf</span></p>
                    </label>
                    <label>
                        <img src={require('../../../../assets/images/c_logo4.png')}/>
                        <p><span>准考证：</span><span>654615646545</span></p>
                    </label>
                    <label>
                        <img src={require('../../../../assets/images/c_logo5.png')}/>
                        <p><span>手机号：</span><span>1365897654</span></p>
                    </label>
                </div>
                    <div>
                        <img src={require('../../../../assets/images/touxiang.png')}/>
                        <label>
                            <img src={require('../../../../assets/images/c_logo1.png')}/>
                            <p><span>姓名：</span><span>欧阳小小</span></p>
                        </label>
                        <label>
                            <img src={require('../../../../assets/images/c_logo2.png')}/>
                            <p><span>身份证：</span><span>654651654654</span></p>
                        </label>
                        <label>
                            <img src={require('../../../../assets/images/c_logo3.png')}/>
                            <p><span>账号：</span><span>fsdfsdfsdfsf</span></p>
                        </label>
                        <label>
                            <img src={require('../../../../assets/images/c_logo4.png')}/>
                            <p><span>准考证：</span><span>654615646545</span></p>
                        </label>
                        <label>
                            <img src={require('../../../../assets/images/c_logo5.png')}/>
                            <p><span>手机号：</span><span>1365897654</span></p>
                        </label>
                    </div>
                    <div>
                        <img src={require('../../../../assets/images/touxiang.png')}/>
                        <label>
                            <img src={require('../../../../assets/images/c_logo1.png')}/>
                            <p><span>姓名：</span><span>欧阳小小</span></p>
                        </label>
                        <label>
                            <img src={require('../../../../assets/images/c_logo2.png')}/>
                            <p><span>身份证：</span><span>654651654654</span></p>
                        </label>
                        <label>
                            <img src={require('../../../../assets/images/c_logo3.png')}/>
                            <p><span>账号：</span><span>fsdfsdfsdfsf</span></p>
                        </label>
                        <label>
                            <img src={require('../../../../assets/images/c_logo4.png')}/>
                            <p><span>准考证：</span><span>654615646545</span></p>
                        </label>
                        <label>
                            <img src={require('../../../../assets/images/c_logo5.png')}/>
                            <p><span>手机号：</span><span>1365897654</span></p>
                        </label>
                    </div>
                    <div>
                        <img src={require('../../../../assets/images/touxiang.png')}/>
                        <label>
                            <img src={require('../../../../assets/images/c_logo1.png')}/>
                            <p><span>姓名：</span><span>欧阳小小</span></p>
                        </label>
                        <label>
                            <img src={require('../../../../assets/images/c_logo2.png')}/>
                            <p><span>身份证：</span><span>654651654654</span></p>
                        </label>
                        <label>
                            <img src={require('../../../../assets/images/c_logo3.png')}/>
                            <p><span>账号：</span><span>fsdfsdfsdfsf</span></p>
                        </label>
                        <label>
                            <img src={require('../../../../assets/images/c_logo4.png')}/>
                            <p><span>准考证：</span><span>654615646545</span></p>
                        </label>
                        <label>
                            <img src={require('../../../../assets/images/c_logo5.png')}/>
                            <p><span>手机号：</span><span>1365897654</span></p>
                        </label>
                    </div>
                    <div>
                        <img src={require('../../../../assets/images/touxiang.png')}/>
                        <label>
                            <img src={require('../../../../assets/images/c_logo1.png')}/>
                            <p><span>姓名：</span><span>欧阳小小</span></p>
                        </label>
                        <label>
                            <img src={require('../../../../assets/images/c_logo2.png')}/>
                            <p><span>身份证：</span><span>654651654654</span></p>
                        </label>
                        <label>
                            <img src={require('../../../../assets/images/c_logo3.png')}/>
                            <p><span>账号：</span><span>fsdfsdfsdfsf</span></p>
                        </label>
                        <label>
                            <img src={require('../../../../assets/images/c_logo4.png')}/>
                            <p><span>准考证：</span><span>654615646545</span></p>
                        </label>
                        <label>
                            <img src={require('../../../../assets/images/c_logo5.png')}/>
                            <p><span>手机号：</span><span>1365897654</span></p>
                        </label>
                    </div>
                    <div>
                        <img src={require('../../../../assets/images/touxiang.png')}/>
                        <label>
                            <img src={require('../../../../assets/images/c_logo1.png')}/>
                            <p><span>姓名：</span><span>欧阳小小</span></p>
                        </label>
                        <label>
                            <img src={require('../../../../assets/images/c_logo2.png')}/>
                            <p><span>身份证：</span><span>654651654654</span></p>
                        </label>
                        <label>
                            <img src={require('../../../../assets/images/c_logo3.png')}/>
                            <p><span>账号：</span><span>fsdfsdfsdfsf</span></p>
                        </label>
                        <label>
                            <img src={require('../../../../assets/images/c_logo4.png')}/>
                            <p><span>准考证：</span><span>654615646545</span></p>
                        </label>
                        <label>
                            <img src={require('../../../../assets/images/c_logo5.png')}/>
                            <p><span>手机号：</span><span>1365897654</span></p>
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}
