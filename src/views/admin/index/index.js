import React, {Component} from 'react';
import {connect} from "react-redux";
import { Switch, Link, } from 'react-router-dom'
import './index.scss'
import {Collapse, Badge} from 'element-react'
import renderRoutes from '../../../router/renderRoutes'
import {login as actionLogin} from "../../../store/action";
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rootPath:'',
            activePath:'/admin/userCenter',
            unListen:null,
        };
    }
    componentDidMount() {
        this.state.unListen = this.props.history.listen((v) => {
            this.setState({
                activePath:v.pathname
            })
        })
        let fd = new FormData();
        fd.append('moduleName','user');
        React.axios.post('/usr/api/upDownload/getImgPath',fd)
            .then(res => {
                if(res.data.messageCode === '1000'){
                    this.setState({
                        rootPath: res.data.data.imgPath,
                    })
                }
            })
    }
    componentWillUnmount() {
        this.state.unListen();
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
                this.props.history.push({pathname: '/login_a'})
            })
    }
    render() {
        return (
            <div className={'admin-wrap'}>
                <div className={'menu'}>
                    <div onClick={()=>{this.props.history.push({pathname:'/admin/homePage'})}}><img alt='' src={require('../../../assets/images/logo.png')}/></div>
                    <div>
                        <img alt='' src={require('../../../assets/images/menu1.png')}/>
                        <div className={'userCenter'}>
                            <Link className={`${this.state.activePath === '/admin/userCenter'? 'active':''}`} to={'/admin/userCenter'}>个人中心</Link>
                        </div>
                    </div>
                    <div>
                        <img alt='' src={require('../../../assets/images/menu2.png')}/>
                        <div>
                                    <Collapse value={'userManage'} accordion>
                                <Collapse.Item title="用户管理" name="userManage">
                                    <div>
                                        <Link className={`${this.state.activePath === '/admin/userManage'? 'active':''}`} to={'/admin/userManage'}>用户管理</Link>
                                        <Link className={`${this.state.activePath === '/admin/roleManage'? 'active':''}`} to={'/admin/roleManage'}>角色管理</Link>
                                        <Link className={`${this.state.activePath === '/admin/orgManage'? 'active':''}`} to={'/admin/orgManage'}>机构管理</Link>
                                    </div>
                                </Collapse.Item>
                            </Collapse>
                        </div>
                    </div>
                    <div>
                        <img alt='' src={require('../../../assets/images/menu3.png')}/>
                        <div>
                            <Collapse value={'testInfo'} accordion>
                                <Collapse.Item title="考证信息" name="testInfo">
                                    <div>
                                        <Link className={`${this.state.activePath === '/admin/information'? 'active':''}`} to={'/admin/information'}>考试信息</Link>
                                        <Link className={`${this.state.activePath === '/admin/type'? 'active':''}`} to={'/admin/type'}>考证类型</Link>
                                    </div>
                                </Collapse.Item>
                            </Collapse>
                        </div>
                    </div>
                    <div>
                        <img alt='' src={require('../../../assets/images/menu4.png')}/>
                        <div>
                            <Collapse value={'news'} accordion>
                                <Collapse.Item title="新闻公告" name="news">
                                    <div>
                                        <Link className={`${this.state.activePath === '/admin/newsManage'? 'active':''}`} to={'/admin/newsManage'}>新闻管理</Link>
                                        <Link className={`${this.state.activePath === '/admin/noticeManage'? 'active':''}`} to={'/admin/noticeManage'}>公告管理</Link>
                                    </div>
                                </Collapse.Item>
                            </Collapse>
                        </div>
                    </div>
                    <div>
                        <img alt='' src={require('../../../assets/images/menu5.png')}/>
                        <div>
                            <Collapse value={'check'} accordion>
                                <Collapse.Item title="考试审核" name="check">
                                    <div>
                                        <Link className={`${this.state.activePath === '/admin/infoCheck'? 'active':''}`} to={'/admin/infoCheck'}>考试信息审核</Link>
                                        <Link className={`${this.state.activePath === '/admin/certificateCheck'? 'active':''}`} to={'/admin/certificateCheck'}>证书发布审核</Link>
                                    </div>
                                </Collapse.Item>
                            </Collapse>
                        </div>
                    </div>
                </div>
                <div className={'content-wrap'}>
                    <div className={'content-top'}>
                        <div>
                            <input placeholder={'请输入关键字搜索'}/>
                            <span><img alt='' src={require('../../../assets/images/search1.png')}/></span>
                        </div>
                        <div>
                            <div>
                                <Badge value={ 200 } max={ 99 }>
                                   <img alt='' className={'msg'} src={require('../../../assets/images/msg.png')}/>
                                </Badge>
                            </div>
                            <span> </span>
                            <div>
                                <img src={this.state.rootPath + this.props.userInfo.headImg} />
                                <span>{this.props.userInfo.userName}</span>
                            </div>
                            <span> </span>
                            <Link to={'login_a'} onClick={this.logOut.bind(this)}>退出</Link>
                        </div>
                    </div>
                    <div className={'content'}>
                        <Switch>
                            {renderRoutes(this.props.route.routes)}
                        </Switch>
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
    ),{
        actionLogin
    }
)(index)
