import React, {Component} from 'react';
import {Switch, Link} from 'react-router-dom'
import './index.scss'
import {Collapse, CollapseItem} from 'element-react'
import renderRoutes from '../../../router/renderRoutes'
import Header from '../../layout/header/header'


export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePath:'/student/info'
        };
    }
    componentDidMount() {
        this.props.history.listen((v) => {
            this.setState({
                activePath:v.pathname
            })
        })
    }

    render() {
        return (
            <div className={'stu_wrap'}>
                <Header {...this.props}></Header>
                <div className={'main'}>
                    <div className={'menu'}>
                        <img src={require('../../../assets/images/touxiang.png')}/>
                        <div>
                            <img src={require('../../../assets/images/menu2.png')}/>
                            <div>
                                <Collapse value={'userManage'} accordion>
                                    <Collapse.Item title="个人设置" name="userManage">
                                        <div>
                                            <Link className={`${this.state.activePath === '/student/info'? 'active':''}`} to={'/student/info'}>基本资料</Link>
                                            <Link className={`${this.state.activePath === '/student/safe'? 'active':''}`} to={'/student/safe'}>账号安全</Link>
                                            <Link className={`${this.state.activePath === '/student/idCheck'? 'active':''}`} to={'/student/idCheck'}>身份认证</Link>
                                        </div>
                                    </Collapse.Item>
                                </Collapse>
                            </div>
                        </div>
                        <div>
                            <img src={require('../../../assets/images/menu3.png')}/>
                            <div>
                                <Collapse value={'testInfo'} accordion>
                                    <Collapse.Item title="我的考试" name="testInfo">
                                        <div>
                                            <Link className={`${this.state.activePath === '/student/allTest'? 'active':''}`} to={'/student/allTest'}>全部考试</Link>
                                            <Link className={`${this.state.activePath === '/student/allTest'? 'active':''}`} to={'/student/allTest'}>待考试</Link>
                                            <Link className={`${this.state.activePath === '/student/allTest'? 'active':''}`} to={'/student/allTest'}>已通过</Link>
                                        </div>
                                    </Collapse.Item>
                                </Collapse>
                            </div>
                        </div>
                        <div>
                            <img src={require('../../../assets/images/menu4.png')}/>
                            <div>
                                <Collapse value={'news'} accordion>
                                    <Collapse.Item title="我的申报" name="news">
                                        <div>
                                            <Link className={`${this.state.activePath === '/student/allDeclare'? 'active':''}`} to={'/student/allDeclare'}>全部申报</Link>
                                            <Link className={`${this.state.activePath === '/student/allDeclare'? 'active':''}`} to={'/student/allDeclare'}>待申报</Link>
                                            <Link className={`${this.state.activePath === '/student/allDeclare'? 'active':''}`} to={'/student/allDeclare'}>已申报</Link>
                                        </div>
                                    </Collapse.Item>
                                </Collapse>
                            </div>
                        </div>
                        <div>
                            <img src={require('../../../assets/images/menu5.png')}/>
                            <div>
                                <Collapse value={'check'} accordion>
                                    <Collapse.Item title="证明档案" name="check">
                                        <div>
                                            <Link className={`${this.state.activePath === '/student/myCertificate'? 'active':''}`} to={'/student/myCertificate'}>我的证书</Link>
                                            {/*<a>证书发布审核</a>*/}
                                        </div>
                                    </Collapse.Item>
                                </Collapse>
                            </div>
                        </div>
                        <div>
                            <a>退出</a>
                        </div>
                    </div>
                    <div className={'content-wrap'}>
                        <Switch>
                            {renderRoutes(this.props.route.routes)}
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}
