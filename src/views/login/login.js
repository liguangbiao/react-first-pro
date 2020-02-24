import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './login.scss'
import '../../utils/slide/jigsaw'
import {connect} from "react-redux";
import {login as actionLogin} from "../../store/action";

class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginMode:['',''],
            active:0,
            userName:'superAdmin',
            userPwd:'123456'
        };
        this.handleC = this.handleC.bind(this)
    }
    componentDidMount() {
        let w = document.getElementsByClassName('pwd')[0].clientWidth;
        window.jigsaw.init({
            el: this.refs.slide,
            width: w-10, // 可选, 默认310
            height: 155, // 可选, 默认155
            onSuccess: function () {
                console.log("1")
            },
            onFail: function () {
                console.log("2")
            },
            onRefresh: function () {
                console.log("3")
            }
        })
    }

    handleC(){
        let cs = document.getElementsByTagName('canvas');
        for(let i = 0;i < cs.length;i++){
            cs[i].style.display = 'none'
        }
        document.getElementById('slide').style.top = '0px'
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
        }).then(res => {
            if(res.data.messageCode === '1000'){
                this.props.actionLogin(res.data.data)
                if(this.props.location.state !== undefined){
                    this.props.history.push(this.props.location.state.from.pathname)
                }else{
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
            }else if(res.data.messageCode === '3005'){

            }
        })
    }
    render() {
        return (
            <div className={'login_st'}>
                <img onClick={()=>{this.handleC()}} src={require('../../assets/images/login_bg.png')}/>
                <div>
                    <p>欢迎登陆</p>
                    <div>
                        <a onClick={this.setActive.bind(this,0)} className={this.state.active === 0?'active':''}>密码登陆</a>
                        <a onClick={this.setActive.bind(this,1)} className={this.state.active === 1?'active':''}>免密登陆</a>
                    </div>
                    <div className="photo">
                        <div style={{width:this.state.loginMode.length*100+'%',marginLeft:this.state.active*-100+'%'}}>
                            {this.state.loginMode.map((val,index) => {
                                if(index ===0){
                                    return <div className={'pwd'} key={index} style={{width:100/this.state.loginMode.length+'%'}}>
                                        <div> <input defaultValue={'superAdmin'} onChange={this.handleUserName.bind(this)} placeholder={'手机号/用户名/邮箱'}/></div>
                                        <div>
                                            <input defaultValue={'123456'} onChange={this.handleUserPwd.bind(this)} type={'password'} placeholder={'请输入密码'}/>
                                            <a>忘记密码？</a>
                                        </div>
                                    </div>
                                }else{
                                    return <    div className={'nopwd'} key={index} style={{width:100/this.state.loginMode.length+'%'}}>
                                        <div> <input placeholder={'手机号/用户名/邮箱'}/></div>
                                            <div style={{display:`${this.state.active === 0?'none':'block'}`}} className={'slide'}>
                                                <div>
                                                    <div ref={'slide'} id={'slide'}>

                                                    </div>
                                                </div>
                                            </div>
                                        <div style={{marginTop:`${this.state.active === 0?'':'1.1rem'}`}}>
                                            <input onChange={this.handleUserPwd.bind(this)} type={'password'} placeholder={'请输入验证码'}/>
                                            <a>忘记密码？</a>
                                        </div>
                                    </div>
                                }
                            })}
                        </div>
                    </div>
                    <a onClick={this.handleLogin.bind(this)} className={`${this.state.userName === '' || this.state.userPwd === '' ?'':'summit_active'}`}>登录</a>
                    <label><span></span>第三方账号登录<span></span></label>
                    <div className={'logo'}>
                        <img src={require('../../assets/images/QQ.png')}/>
                        <img src={require('../../assets/images/wechat.png')}/>
                        <img src={require('../../assets/images/weibo.png')}/>
                    </div>
                    <span>还没有账号？<Link to={'/regist'}>立即注册</Link></span>
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
