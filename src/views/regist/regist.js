import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './regist.scss'
import '../../utils/slide/jigsaw'

export default class regist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginMode:['',''],
            active:0,
            userName:'',
            userPwd:''
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
        React.axios.post('/usr/api/login/register',{
            phone:this.state.userName,
            passWord:this.state.userPwd,
            roleType:2
        }).then(res => {
            // console.log(res.data)
        })
        // let xhr = new XMLHttpRequest();
        // let data = {
        //     phone:this.state.userName,
        //     passWord:this.state.userPwd,
        //     roleType:2
        // };
        // xhr.open('post','/api1/usr/api/login/register');
        // xhr.setRequestHeader('X-Requested-With','XMLHttpRequest');
        // xhr.setRequestHeader('Content-Type','application/json;charset=UTF-8');
        // xhr.send({
        //     phone:this.state.userName,
        //     passWord:this.state.userPwd,
        //     roleType:2
        // })
    }
    render() {
        return (
            <div className={'login_st'}>
                <img onClick={()=>{this.handleC()}} src={require('../../assets/images/login_bg.png')}/>
                <div>
                    <p>注册账号</p>
                    <div className="photo">
                        <div style={{width:this.state.loginMode.length*100+'%',marginLeft:this.state.active*-100+'%'}}>
                            {this.state.loginMode.map((val,index) => {
                                if(index ===0){
                                    return <div className={'pwd'} key={index} style={{width:100/this.state.loginMode.length+'%'}}>
                                        <div> <input onChange={this.handleUserName.bind(this)} placeholder={'手机号'}/></div>
                                        <div className={'slide'}>
                                            <div>
                                                <div ref={'slide'} id={'slide'}>

                                                </div>
                                            </div>
                                        </div>
                                        <div style={{marginTop:'1.1rem'}}>
                                            <input onChange={this.handleUserPwd.bind(this)} type={'password'} placeholder={'请输入密码'}/>
                                            {/*<a>忘记密码？</a>*/}
                                        </div>
                                    </div>
                                }
                            })}
                        </div>
                    </div>
                    <a onClick={this.handleLogin.bind(this)} className={`${this.state.userName === '' || this.state.userPwd === '' ?'':'summit_active'}`}>注册</a>
                    <label><span></span>第三方账号登录<span></span></label>
                    <div className={'logo'}>
                        <img src={require('../../assets/images/QQ.png')}/>
                        <img src={require('../../assets/images/wechat.png')}/>
                        <img src={require('../../assets/images/weibo.png')}/>
                    </div>
                    <span>已有账号？<Link to={'/login'}>立即登录</Link></span>
                </div>
            </div>
        )
    }
}
