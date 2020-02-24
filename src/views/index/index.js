import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import { connect} from "react-redux";
import {login as actionLogin} from "../../store/action";
import './index.scss'
import Header from '../../views/layout/header/header'
import Footer from '../../views/layout/footer/footer'
import {Popover} from 'element-react'

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive:0,
            src:[
                [
                    {
                        src:require('../../assets/images/1.png'),
                        school:'广东职业技术学院'
                    },
                    {
                        src:require('../../assets/images/2.png'),
                        school:'广东建设职业技术学院'
                    },
                    {
                        src:require('../../assets/images/3.png'),
                        school:'罗定职业技术学院'
                    },
                    {
                        src:require('../../assets/images/4.png'),
                        school:'广州松田职业学院'
                    },
                    {
                        src:require('../../assets/images/5.png'),
                        school:'广州大学华软软件学院'
                    },
                    {
                        src:require('../../assets/images/6.png'),
                        school:'广东食品药品职业技术学院'
                    },
                    {
                        src:require('../../assets/images/7.png'),
                        school:'广东邮电职业技术学院'
                    },
                    {
                        src:require('../../assets/images/8.png'),
                        school:'广州市交通技师学院'
                    },
                    {
                        src:require('../../assets/images/9.png'),
                        school:'东莞职业技术学院'
                    },
                    {
                        src:require('../../assets/images/10.png'),
                        school:'广东农工商职业技术学院'
                    },
                ],
                [
                    {
                        src:require('../../assets/images/11.png'),
                        school:'广州华立科技职业学院'
                    },
                    {
                        src:require('../../assets/images/12.png'),
                        school:'广东培正学院'
                    },
                    {
                        src:require('../../assets/images/13.png'),
                        school:'广东白云学院'
                    },
                    {
                        src:require('../../assets/images/14.png'),
                        school:'珠海城市职业'
                    },
                    {
                        src:require('../../assets/images/15.png'),
                        school:'惠州经济职业技术学院'
                    },
                    {
                        src:require('../../assets/images/16.png'),
                        school:'揭阳职业技术学院'
                    },
                    {
                        src:require('../../assets/images/17.png'),
                        school:'广东理工职业学院'
                    },
                    {
                        src:require('../../assets/images/18.png'),
                        school:'广东技术师范学院'
                    },
                    {
                        src:require('../../assets/images/19.png'),
                        school:'广东外语外贸大学'
                    },
                    {
                        src:require('../../assets/images/20.png'),
                        school:'中山市沙溪理工学校'
                    },
                ],
                [
                    {
                        src:require('../../assets/images/21.png'),
                        school:'广东省贸易职业技术学校'
                    },
                    {
                        src:require('../../assets/images/22.png'),
                        school:'清远工贸职业技术学校'
                    },
                    {
                        src:require('../../assets/images/23.png'),
                        school:'佛山市顺德区李伟强职业技术学校'
                    },
                    {
                        src:require('../../assets/images/24.png'),
                        school:'广州华夏职业学院'
                    },
                    {
                        src:require('../../assets/images/25.png'),
                        school:'广东科贸职业学院'
                    },
                    {
                        src:require('../../assets/images/26.png'),
                        school:'广东省外语艺术职业学院'
                    },
                    {
                        src:require('../../assets/images/27.png'),
                        school:'岭南师范学院'
                    },
                    {
                        src:require('../../assets/images/28.png'),
                        school:'佛山科学技术学院'
                    },
                    {
                        src:require('../../assets/images/29.png'),
                        school:'广东女子职业技术学院'
                    },
                ],
            ],
            isNewsActive:0,
            news:[
                ['跨境电子商务师认证系统首次','跨境电子商务师认证系统首次','跨境电子商务师认证系统首次','跨境电子商务师认证系统首次',],
                ['跨境电子商务师认证系统首次','跨境电子商务师认证系统首次','跨境电子商务师认证系统首次','跨境电子商务师认证系统首次',],
                ['跨境电子商务师认证系统首次','跨境电子商务师认证系统首次','跨境电子商务师认证系统首次','跨境电子商务师认证系统首次',],
            ],
            isShowHead:false,
            bgImg:[
                require('../../assets/images/banner1.png'),
                require('../../assets/images/banner2.png'),
                require('../../assets/images/banner3.png'),
            ],
            bgActive:1,
            newsMode:[
                {
                    src:[require('../../assets/images/banner1.png'),require('../../assets/images/banner2.png')],
                    time:['9-27','2019'],
                    title:'跨境电子商务师认证考试系统首次联测顺利完成1',
                    info:'跨境电子商务师认证考试系统首次联测顺利完成跨境电子商务师认证考试系统首次联测顺利完成跨境电子商务师认证考试系统首次联测顺利完成',
                },
                {
                    src:[require('../../assets/images/banner2.png'),require('../../assets/images/banner1.png')],
                    time:['9-28','2019'],
                    title:'跨境电子商务师认证考试系统首次联测顺利完成2',
                    info:'跨境电子商务师认证考试系统首次联测顺利完成跨境电子商务师认证考试系统首次联测顺利完成跨境电子商务师认证考试系统首次联测顺利完成',
                },
            ],
            isNewsMode:0,
            newsList:[
                {
                    is:1,
                    t:'职业教育“1+X”证书制度来了！'
                },
                {
                    is:1,
                    t:'职业教育“1+X”证书制度来了！'
                },
                {
                    is:2,
                    t:'职业教育“1+X”证书制度来了！'
                },
                {
                    is:2,
                    t:'职业教育“1+X”证书制度来了！'
                },
            ]
        };
        this.handleScroll = this.handleScroll.bind(this)
    }
    changeIs(i){
        this.setState({
            isActive:i
        })
    }
    changeIsNews(i){
        this.setState({
            isNewsActive:i
        })
    }
    clickLeft(){
        if(this.state.isNewsMode == 0){
            return
        }else{
            this.setState({
                isNewsMode:this.state.isNewsMode-1
            })
        }
    }
    clickRight(){
        if(this.state.isNewsMode == this.state.newsMode.length-1){
            return
        }else{
            this.setState({
                isNewsMode:this.state.isNewsMode+1
            })
        }
    }
    handleScroll(){
        if(document.documentElement.scrollTop > (this.refs.m1.clientHeight+this.refs.m2.clientHeight)){
            this.setState({
                isShowHead:true
            })
        }else{
            this.setState({
                isShowHead:false
            })
        }
    }
    jump(){
        setTimeout(()=>{this.refs.process.scrollIntoView(false);},400)
    }
    goUserCenter(){
        switch(this.props.userInfo.roleType){
            case 99 :
                this.props.history.push('/admin')
                break
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
    componentDidMount() {
        if(this.props.location.query === 1){
            this.jump()
        }
        this.timer = setInterval(()=>{
            let n;
            n = this.state.bgActive + 1;
            this.setState({
                bgActive:n%3
            })
        },5000);
        window.addEventListener('scroll',this.handleScroll,true)
    }
    componentWillUnmount() {
        clearInterval(this.timer);
        window.removeEventListener('scroll',this.handleScroll,true)
    }

    render() {
        return (
           <div className={'i_wrap'}>
               <div className={'index-top'}>
                  <div>
                      <div style={{display:!this.state.isShowHead?'block':'none'}} ref={'m1'}>
                          <header className={'w i-header'}>
                              <img src={require('../../assets/images/logo.png')} alt={''}/>
                              <label>
                                  <input placeholder={'请输入关键字搜索'}/>
                                  <span><img src={require('../../assets/images/search.png')}/></span>
                              </label>
                              <div>
                                  <Popover placement={'bottom'} popperClass={'inside'} content={(
                                      <div className={'inside'}>
                                          {
                                              this.state.newsList.map((val,i) => {
                                                  return <a key={i}
                                                      onClick={()=>{this.props.history.push({pathname:'/news'})}}
                                                      className={`${val.is === 1?'noread':''}`}>{val.t}</a>
                                              })
                                          }
                                      </div>
                                  )}>
                                      <label className={'i_label'}>
                                          <img className={'img1'} src={require('../../assets/images/gongao.png')}/> 公告（4）
                                      </label>
                                  </Popover>
                                  <Popover placement={'bottom'} popperClass={'inside1'} content={(
                                      <div className={'inside1'}>
                                          <a onClick={this.goUserCenter.bind(this)}>个人中心</a>
                                          <a onClick={this.logOut.bind(this)}>退出登录</a>
                                      </div>
                                  )}>
                                      <label style={{display:`${this.props.userInfo.id !== null?'':'none'}`}}  className={'i_label'}>
                                          {this.props.userInfo.userName} <img className={'img2'} src={require('../../assets/images/touxiang.png')}/>
                                      </label>
                                  </Popover>
                                  <label onClick={()=>{this.props.history.push({pathname:'/login',state: { from: this.props.location}})}} style={{display:`${this.props.userInfo.id !== null?'none':'flex'}`}} className={'i_label'}>
                                      请先登录！ <img className={'img2'} src={require('../../assets/images/touxiang.png')}/>
                                  </label>
                              </div>
                          </header>
                      </div>
                      <div style={{display:!this.state.isShowHead?'block':'none'}} ref={'m2'}>
                          <nav className={'w nav'}>
                              <Link className={'active'} to={'/index'}>首页</Link>
                              <Link to={'/information'}>考证信息</Link>
                              <a onClick={this.jump.bind(this)}>考证流程</a>
                              <Link to={'/check'}>证书验真</Link>
                              <Link to={'/consult'}>新闻咨询</Link>
                              <Link to={'/question'}>常见问题</Link>
                          </nav>
                      </div>
                      {
                          this.state.isShowHead?<Header {...this.props} active={0}></Header> : ''
                      }
                  </div>
                   <div style={{background:`url('${this.state.bgImg[this.state.bgActive]}') no-repeat`}}></div>
               </div>
               <div className={'info'}>
                   <div>
                       <div className={'w content'}>
                           <div className={'content-top'}>
                               <div>
                                   <img src={require('../../assets/images/touxiang.png')}/>
                                   <span>欧阳小小 <strong>|</strong> 共三个考试</span>
                               </div>
                               <div>
                                   <div>
                                       <span>跨境电子商务师证书（一级）</span>
                                       <p><span>26</span>/JUNE</p>
                                   </div>
                                   <div>
                                       <span>跨境电子商务师证书（一级）</span>
                                       <p><span>26</span>/JUNE</p>
                                   </div>
                                   <div>
                                       <span>跨境电子商务师证书（一级）</span>
                                       <p><span>26</span>/JUNE</p>
                                   </div>
                               </div>
                           </div>
                           <p className={'title'}>
                               <span></span>
                               <strong>考证信息</strong>
                               <span></span>
                           </p>
                           <div className={'table'}>
                               <label>
                                   <span>考试时间</span>
                                   <span>考试名称</span>
                                   <span>考试中心</span>
                                   <span>考试时长</span>
                               </label>
                               <label>
                                   <span>2019年10月22日14:00-16:00</span>
                                   <span>跨境电子商务师（三级）</span>
                                   <span>河北师范大学汇华学院</span>
                                   <span>120（分钟）</span>
                               </label>
                               <label>
                                   <span>2019年10月22日14:00-16:00</span>
                                   <span>跨境电子商务师（三级）</span>
                                   <span>河北师范大学汇华学院</span>
                                   <span>120（分钟）</span>
                               </label>
                               <label>
                                   <span>2019年10月22日14:00-16:00</span>
                                   <span>跨境电子商务师（三级）</span>
                                   <span>河北师范大学汇华学院</span>
                                   <span>120（分钟）</span>
                               </label>
                               <label>
                                   <span>2019年10月22日14:00-16:00</span>
                                   <span>跨境电子商务师（三级）</span>
                                   <span>河北师范大学汇华学院</span>
                                   <span>120（分钟）</span>
                               </label>
                               <label>
                                   <span>2019年10月22日14:00-16:00</span>
                                   <span>跨境电子商务师（三级）</span>
                                   <span>河北师范大学汇华学院</span>
                                   <span>120（分钟）</span>
                               </label>
                               <label>
                                   <span>2019年10月22日14:00-16:00</span>
                                   <span>跨境电子商务师（三级）</span>
                                   <span>河北师范大学汇华学院</span>
                                   <span>120（分钟）</span>
                               </label>
                           </div>
                       </div>
                   </div>
                   <div>
                       <div className={'w intro'}>
                           <p className={'title'}>
                               <span></span>
                               <strong>证书介绍</strong>
                               <span></span>
                           </p>
                           <div>
                               <div>
                                   <img src={require('../../assets/images/banner1.png')}/>
                                   <div>
                                       <p>阿里巴巴跨境电商人才初级证书</p>
                                       <span>阿里巴巴跨境电商人才初级证书是跨境电商领域的第一个证书，由阿里巴巴颁发，阿里平台客户认可此证书。参加考证的学生资料将留存在阿里的人才数据库中，学生在未来有极大的就业优势。此次考证内容包括出口文件、外贸流程与操作、产品发布、旺铺装修、数据管家、阿里巴巴外贸直通车等内容，时长约1小时，学生在线报名，在线考试。阿里巴巴对考试通过的学生授</span>
                                       <a>查看详情</a>
                                   </div>
                               </div>
                               <div>
                                   <div style={{alignItems:'flex-end'}}>
                                       <p>阿里巴巴跨境电商人才初级证书</p>
                                       <span>阿里巴巴跨境电商人才初级证书是跨境电商领域的第一个证书，由阿里巴巴颁发，阿里平台客户认可此证书。参加考证的学生资料将留存在阿里的人才数据库中，学生在未来有极大的就业优势。此次考证内容包括出口文件、外贸流程与操作、产品发布、旺铺装修、数据管家、阿里巴巴外贸直通车等内容，时长约1小时，学生在线报名，在线考试。阿里巴巴对考试通过的学生授</span>
                                       <a>查看详情</a>
                                   </div>
                                   <img src={require('../../assets/images/banner1.png')}/>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div>
                       <div ref={'process'} className={'w process'}>
                           <p className={'title'} style={{marginTop:'0px'}}>
                               <span></span>
                               <strong>考证流程</strong>
                               <span></span>
                           </p>
                           <div>
                               <div>
                                   <div>
                                       <img src={require('../../assets/images/process_i1.png')}/>
                                   </div>
                                   <p>注册账号</p>
                                   <span>注册考证系统账号,<br/>若已有则略过</span>
                               </div>
                               <img src={require('../../assets/images/jiantou.png')} />
                               <div>
                                   <div>
                                       <img src={require('../../assets/images/process_i2.png')}/>
                                   </div>
                                   <p>选择考试类型</p>
                                   <span>登录考证系统，选择<br/>参加的考试类型</span>
                               </div>
                               <img src={require('../../assets/images/jiantou.png')} />
                               <div>
                                   <div>
                                       <img src={require('../../assets/images/process_i3.png')}/>
                                   </div>
                                   <p>考试报名</p>
                                   <span>选择考试时间，确认<br/>后填写报名表</span>
                               </div>
                               <img src={require('../../assets/images/jiantou.png')} />
                               <div>
                                   <div>
                                       <img src={require('../../assets/images/process_i4.png')}/>
                                   </div>
                                   <p>生成准考证</p>
                                   <span>输入考试邀请码，生成<br/>准考证，参加考试</span>
                               </div>
                               <img src={require('../../assets/images/jiantou.png')} />
                               <div>
                                   <div>
                                       <img src={require('../../assets/images/process_i5.png')}/>
                                   </div>
                                   <p>申报证书</p>
                                   <span>考试通过后，<br/>申报证书</span>
                               </div>
                           </div>
                           <a>去考证</a>
                       </div>
                   </div>
                   <div>
                       <div className={'w news'}>
                           <p className={'title'} style={{marginTop:'0px'}}>
                               <span></span>
                               <strong>新闻资讯</strong>
                               <span></span>
                           </p>
                           <div>
                               <div>
                                   <a onClick={this.clickLeft.bind(this)} className={'tr'}/>
                                   <a onClick={this.clickRight.bind(this)} className={'tr'}/>
                                   <div className="photo">
                                       <div style={{width:this.state.newsMode.length*100+'%',marginLeft:this.state.isNewsMode*-100+'%'}}>
                                           {this.state.newsMode.map((val,index) => {
                                               return <div key={index} style={{width:100/this.state.newsMode.length+'%'}}>
                                                   <div>
                                                       {val.src.map((v,i) => {
                                                           return <img src={v} key={i} />
                                                       })}
                                                   </div>
                                                   <p><span>{val.time[0]}</span>/{val.time[1]}</p>
                                                   <p>{val.title}</p>
                                                   <p>{val.info}</p>
                                               </div>
                                           })}
                                       </div>
                                   </div>
                                 </div>
                               <div>
                                   <a className={'tr'}></a>
                                   <p>NEWS</p>
                                   <div className="photo">
                                       <div style={{width:this.state.news.length*100+'%',marginLeft:this.state.isNewsActive*-100+'%'}}>
                                           {this.state.news.map((val,index) => {
                                               return <div key={index} style={{width:100/this.state.news.length+'%'}}>
                                                   {val.map((v,index) => {
                                                       return  <a key={index}>{v}</a>
                                                   })}
                                               </div>
                                           })}
                                       </div>
                                   </div>
                                   <label>
                                       {this.state.news.map((val,index) => {
                                           return <a
                                               key={index}
                                               onClick={this.changeIsNews.bind(this,index)}
                                               className={` ${index === this.state.isNewsActive? 'active':''}`}>
                                           </a>
                                       })}
                                   </label>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div>
                       <div className={'w data'}>
                           <p className={'title'} style={{marginTop:'0px'}}>
                               <span></span>
                               <strong>资料推荐</strong>
                               <span></span>
                           </p>
                           <div>
                               <div>
                                   <p>阿里巴巴跨境电商人才初级证书</p>
                                   <div>
                                       <span><strong>1</strong></span>
                                       <a>《跨境电子商务基础》</a>
                                   </div>
                                   <div>
                                       <span><strong>1</strong></span>
                                       <a>《跨境电子商务基础》</a>
                                   </div>
                                   <div>
                                       <span><strong>1</strong></span>
                                       <a>《跨境电子商务基础》</a>
                                   </div>
                                   <div>
                                       <span><strong>1</strong></span>
                                       <a>《跨境电子商务基础》</a>
                                   </div>
                               </div>
                               <div>
                                   <p>阿里巴巴跨境电商人才初级证书</p>
                                   <div>
                                       <span><strong>1</strong></span>
                                       <a>《跨境电子商务基础》</a>
                                   </div>
                                   <div>
                                       <span><strong>1</strong></span>
                                       <a>《跨境电子商务基础》</a>
                                   </div>
                                   <div>
                                       <span><strong>1</strong></span>
                                       <a>《跨境电子商务基础》</a>
                                   </div>
                                   <div>
                                       <span><strong>1</strong></span>
                                       <a>《跨境电子商务基础》</a>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div>
                       <div className={'w at'}>
                           <p className={'title'} style={{marginTop:'0px'}}>
                               <span></span>
                               <strong>平台优势</strong>
                               <span></span>
                           </p>
                           <div>
                               <a>
                                   <img src={require('../../assets/images/at_i1.png')}/>
                                   <p>理实一体</p>
                               </a>
                               <a>
                                   <img src={require('../../assets/images/at_i2.png')}/>
                                   <p>课程制作</p>
                               </a>
                               <a>
                                   <img src={require('../../assets/images/at_i3.png')}/>
                                   <p>互动答疑</p>
                               </a>
                               <a>
                                   <img src={require('../../assets/images/at_i4.png')}/>
                                   <p>学习跟踪</p>
                               </a>
                               <a>
                                   <img src={require('../../assets/images/at_i5.png')}/>
                                   <p>考评考证</p>
                               </a>
                               <a>
                                   <img src={require('../../assets/images/at_i6.png')}/>
                                   <p>就业评测</p>
                               </a>
                           </div>
                       </div>
                   </div>
                   <div>
                       <div className={'w school'}>
                           <p className={'title'} style={{marginTop:'0px'}}>
                               <span></span>
                               <strong>合作院校</strong>
                               <span></span>
                           </p>
                           <div className="photo">
                               <div style={{width:this.state.src.length*100+'%',marginLeft:this.state.isActive*-100+'%'}}>
                                   {this.state.src.map((val,index) => {
                                       return <div key={index} style={{width:100/this.state.src.length+'%'}}>
                                           {val.map((v,i) => {
                                               return  <a key={i}>
                                                   <img src={v.src}/>
                                                   <p>{v.school}</p>
                                               </a>
                                           })}
                                       </div>
                                   })}
                               </div>
                           </div>
                           <p>
                               {this.state.src.map((val,index) => {
                                   return <a
                                       key={index}
                                       onClick={this.changeIs.bind(this,index)}
                                       className={` ${index === this.state.isActive? 'active':''}`}>
                                   </a>
                               })}
                           </p>
                       </div>
                   </div>
                   <Footer></Footer>
               </div>
               <div className={'fix'}>
                   <div></div>
                   <div>
                       <p>快捷入口</p>
                       <span></span>
                       <p>Quick entry</p>
                   </div>
                   <div>
                       <a>证书查询</a>
                       <a>规程下载</a>
                       <a>快速报名</a>
                       <a>成绩查询</a>
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
