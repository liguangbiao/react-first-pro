import React, {Component} from 'react';
import { connect} from "react-redux";
import {login as actionLogin} from "../../store/action";
import './login.scss'
import {Message} from "element-react";

class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginMode:['',''],
            active:1,
            userName:'superAdmin',
            userPwd:'123456',
        };
    }
    setActive(i){
        this.setState({active:i})
    }
    handleUserName(e){
        this.setState({
            userName:e.target.value
        })
    }
    handleUserPwd(e){
        this.setState({
            userPwd:e.target.value
        })
    }
    handleLogin(){
        React.axios.post('/usr/api/login/loginByAccount',{
            userName:this.state.userName,
            passWord:this.state.userPwd
        }).then(res => { //Message
            if(res.data.success){
                this.props.actionLogin(res.data.data)
                switch(res.data.data.roleType){
                    case 99 :
                        this.props.history.push('/admin')
                        break
                    case 0 :
                        this.props.history.push('/admin')
                        break
                    case 1 :
                        this.props.history.push('/teacher')
                        break
                    case 2 :
                        this.props.history.push('/student')
                        break
                    default :
                        this.props.history.push('/index')
                }
            }
        })
    }
    render() {
        return (
            <div className={'login_a'}>
                <div>
                    <div>
                        <img src={require('../../assets/images/logo.png')} />
                        <div>
                            <p>遇见最美的自己</p>
                            <p>To meet the most beautiful yourself</p>
                            <a onClick={()=>{this.props.history.push('/index')}}>去官网  >  </a>
                        </div>
                    </div>
                    <div>
                        <p>欢迎登录</p>
                        <div>
                            <a onClick={this.setActive.bind(this,0)} className={this.state.active === 0?'active':''}><span>免密登陆</span></a>
                            <a onClick={this.setActive.bind(this,1)} className={this.state.active === 1?'active':''}><span>密码登陆</span></a>
                        </div>
                        <div>
                            <div className="photo">
                                <div style={{width:this.state.loginMode.length*100+'%',marginLeft:this.state.active*-100+'%'}}>
                                    {this.state.loginMode.map((val,index) => {
                                        if(index ===0){
                                            return <div className={'pwd'} key={index} style={{width:100/this.state.loginMode.length+'%'}}>
                                                <div>
                                                    <input placeholder={'请输入你的账号'}/>
                                                </div>
                                                <div>
                                                    <input/>
                                                    <a>发送验证码</a>
                                                </div>
                                            </div>
                                        }else{
                                            return <div className={'pwd'} key={index} style={{width:100/this.state.loginMode.length+'%'}}>
                                                <div>
                                                    <input defaultValue={'superAdmin'} onChange={this.handleUserName.bind(this)} placeholder={'手机号/用户名/邮箱'}/>
                                                </div>
                                                <div>
                                                    <input defaultValue={'123123'} onChange={this.handleUserPwd.bind(this)} type={'password'} placeholder={'请输入你的密码'}/>
                                                </div>
                                            </div>
                                        }
                                    })}
                                </div>
                            </div>
                        </div>
                        {/*<input placeholder={'请输入您的账号'}/>*/}
                        {/*<input placeholder={'请输入您的密码'}/>*/}
                        {/*<input placeholder={'验证码'}/>*/}
                        <a onClick={this.handleLogin.bind(this)}>登录</a>
                        <div>
                            <span>还没账号？<a>立刻注册</a></span>
                            <a>忘记密码？</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(
    state => (
        {
            userInfo:state.userInfo
        }
    ),
    {
        actionLogin
    }
)(login)
