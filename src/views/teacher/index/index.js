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
            activePath:'/teacher/info',
            unListen:null,
        };
    }
    componentDidMount() {
        this.state.unListen = this.props.history.listen((v) => {
            this.setState({
                activePath:v.pathname
            })
        })
    }
    componentWillUnmount() {
        this.state.unListen();
    }
    render() {
        return (
            <div className={'tc_wrap'}>
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
                                            <Link className={`${this.state.activePath === '/teacher/info'? 'active':''}`} to={'/teacher/info'}>基本资料</Link>
                                            <Link className={`${this.state.activePath === '/teacher/safe'? 'active':''}`} to={'/teacher/safe'}>账号安全</Link>
                                            <Link className={`${this.state.activePath === '/teacher/idCheck'? 'active':''}`} to={'/teacher/idCheck'}>身份认证</Link>
                                        </div>
                                    </Collapse.Item>
                                </Collapse>
                            </div>
                        </div>
                        <div>
                            <img src={require('../../../assets/images/menu3.png')}/>
                            <div>
                                <Collapse value={'testInfo'} accordion>
                                    <Collapse.Item title="题库管理" name="testInfo">
                                        <div>
                                            <Link className={`${this.state.activePath === '/teacher/resourceManage'? 'active':''}`} to={'/teacher/resourceManage'}>题库管理</Link>
                                            <a>题目管理</a>
                                        </div>
                                    </Collapse.Item>
                                </Collapse>
                            </div>
                        </div>
                        <div>
                            <img src={require('../../../assets/images/menu4.png')}/>
                            <div>
                                <Collapse value={'news'} accordion>
                                    <Collapse.Item title="试卷管理" name="news">
                                        <div>
                                            <Link className={`${this.state.activePath === '/teacher/paperManage'? 'active':''}`} to={'/teacher/paperManage'}>试卷管理</Link>
                                            <a>试卷批改</a>
                                        </div>
                                    </Collapse.Item>
                                </Collapse>
                            </div>
                        </div>
                        <div>
                            <img src={require('../../../assets/images/menu5.png')}/>
                            <div>
                                <Collapse value={'check'} accordion>
                                    <Collapse.Item title="成绩管理" name="check">
                                        <div>
                                            <a>成绩管理</a>
                                            <a>成绩查询</a>
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
