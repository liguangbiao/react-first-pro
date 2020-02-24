import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import './header.scss'
import {Popover} from "element-react";
import {login as actionLogin} from "../../../store/action";

class header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active:this.props.active || 0
        };
    }
    goUserCenter(){
        switch(this.props.userInfo.roleType){
            case 0 :
                this.props.history.push('/admin')
                break
            case 99 :
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
    logOut(){
        React.axios.get('/login/loginOut',{})
            .then(res => {
                let obj = {
                    headImg: null,
                    id: null,
                    roleType: null,
                    userName: null,
                };
                this.props.actionLogin(obj);
                this.props.history.go(0)
            })
    }
    render() {
        return (
            <div className={'header'}>
                <img src={require('../../../assets/images/kx.png')} />
                <div>
                    <Link className={`${this.state.active ===0 ? 'active':''}`} to={'/index'}>首页</Link>
                    <Link className={`${this.state.active ===1 ? 'active':''}`} to={'/information'}>考证信息</Link>
                    <Link className={`${this.state.active ===2 ? 'active':''}`} to={{pathname:'/index',query:1}}>考证流程</Link>
                    <Link className={`${this.state.active ===3 ? 'active':''}`} to={'/check'}>证书验真</Link>
                    <Link className={`${this.state.active ===4 ? 'active':''}`} to={'/consult'}>新闻咨询</Link>
                    <Link className={`${this.state.active ===5 ? 'active':''}`} to={'/question'}>常见问题</Link>
                </div>
                <Link style={{display:`${this.props.userInfo.id === null?'':'none'}`}} to={'/login'}>
                    <span>请先登录！</span>
                    <img src={require('../../../assets/images/touxiang.png')} />
                </Link>
                <Popover placement={'bottom'} popperClass={'inside1'} content={(
                    <div className={'inside1'}>
                        <a onClick={this.goUserCenter.bind(this)}>个人中心</a>
                        <a onClick={this.logOut.bind(this)}>退出登录</a>
                    </div>
                )}>
                    <label style={{display:`${this.props.userInfo.id !== null?'':'none'}`}}  className={'i_label'}>
                        {this.props.userInfo.userName} <img className={'img2'} src={require('../../../assets/images/touxiang.png')}/>
                    </label>
                </Popover>
            </div>
        )
    }
}

export default connect(
    state => (
        {
            userInfo:state.userInfo
        }
    ),{
        actionLogin
    }
)(header)
