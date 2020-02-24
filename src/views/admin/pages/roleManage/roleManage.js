import React, {Component} from 'react';
import './roleManage.scss'
import {Checkbox, DatePicker} from "element-react";

export default class roleManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:{
                userName:'',
                phone:''
            }
        };
    }
    componentDidMount() {
        if(this.props.location.query === undefined){
            this.props.history.goBack()
        }else{
            this.setState({
                user:this.props.location.query.val
            })
        }
    }

    render() {
        return (
            <div className={'admin_roleManage'}>
                <div>
                    <div>
                        <p>角色管理</p>
                        <a>保存</a>
                    </div>
                    <span>用户：{this.state.user.userName}</span>
                    <span>账号：{this.state.user.phone}</span>
                    {/*<span>昵称：默默默默</span>*/}
                </div>
                <div>
                    <div>
                        <span>角色权限：</span>
                        <div>
                            <a>学生用户</a>
                            <a>老师用户</a>
                            <a className={'active'}>管理员用户</a>
                        </div>
                    </div>
                    <div>
                        <span>权限内容：</span>
                        <div>
                            <a>用户管理</a>
                            <a>考试信息</a>
                            <a>新闻公告</a>
                            <a>考试审核</a>
                        </div>
                    </div>
                    {/*<div>*/}
                    {/*    <span>账号有效期：</span>*/}
                    {/*    <div>*/}
                    {/*        <DatePicker*/}
                    {/*            value={this.state.time}*/}
                    {/*            placeholder="选择日期"*/}
                    {/*            onChange={date=>{*/}
                    {/*                console.debug('DatePicker1 changed: ', date)*/}
                    {/*                this.setState({time: date})*/}
                    {/*            }}*/}
                    {/*            disabledDate={time=>time.getTime() < Date.now() - 8.64e7}*/}
                    {/*        />*/}
                    {/*        <Checkbox checked>永久</Checkbox>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        )
    }
}
