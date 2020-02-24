import React, {Component} from 'react';
import { Link} from 'react-router-dom'
import { connect} from "react-redux";
import Header from '../../../views/layout/header/header'
import './testing.scss'
import {Radio, Checkbox} from "element-react";
import {handleAnswer} from '../../../store/action'

class Time extends Component {
    constructor(props){
        super(props);
        this.state = {
            time:7200,
            process:2,
            isShowTimers:false
        }
        this.countDown = this.countDown.bind(this)
        this.handleScroll = this.handleScroll.bind(this)
    }
    componentDidMount() {
        this.setState({
            isShowTimers:this.props.isShowTimers
        })
        window.addEventListener('scroll',this.handleScroll,true)
        this.timer = setInterval(()=>{
            this.setState({
                time:this.state.time - 1
            })
        },1000)
        this.timer2 = setInterval(()=>{
            this.setState({
                process:(this.state.process+1) % 3
            },)
        },5000)
    }
    componentWillUnmount() {
        clearInterval(this.timer)
        clearInterval(this.timer2)
    }
    handleScroll(){
        if((this.refs.timers.offsetTop - document.documentElement.scrollTop) > 0 ){
            this.props.handleScroll(true)

        }else{
            this.props.handleScroll(false)
        }
    }
    countDown(time){
        function getzf(s) {
            if(s<10) return '0'+s;
            return s
        }
        // var d = getzf(Math.floor(time / 86400));
        let h = getzf(Math.floor((time % 86400) / 3600));
        let m = getzf(Math.floor(((time % 86400) % 3600) / 60));
        let s = getzf(Math.floor(((time % 86400) % 3600) % 60));

        if (time>0) {
            return h + ":" + m + ":" + s;
        }else{
            return '00:00:00'
        }
    }

    render() {
        return (
            <div ref={'timers'} className={`${!this.props.isShowTimers?'fixed':''}`}>
                {(()=>{
                    switch (this.state.process) {
                        case 2:
                            return (
                                <div className={'full'}>
                                    <div><img src={require('../../../assets/images/timelogo.png')}/></div>
                                    <span>时间充足哦</span>
                                    <p>{this.countDown(this.state.time)}</p>
                                    <Link to={'/student/result'}>我要交卷</Link>
                                </div>
                            )
                            break
                        case 1:
                            return (
                                <div className={'over'}>
                                    <div><img src={require('../../../assets/images/timelogo.png')}/></div>
                                    <span>已超时</span>
                                    <p>{this.countDown(this.state.time)}</p>
                                    <Link to={'/student/result'}>我要交卷</Link>
                                </div>
                            )
                            break
                        case 0:
                            return (
                                <div className={'count'}>
                                    <div><img src={require('../../../assets/images/timelogo.png')}/></div>
                                    <span>还剩半个小时</span>
                                    <p>{this.countDown(this.state.time)}</p>
                                    <Link to={'/student/result'}>我要交卷</Link>
                                </div>
                            )
                            break
                        default:
                            return false
                    }
                })()}
            </div>
        )
    }
}

class testing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            radio1:null,
            radio2:null,
            radio3:null,
            answer:[],
            isShowTimers:true
        };
    }
    componentDidMount() {
        this.props.test.qt.map((v) => {
            switch (v.t) {
                case 0://单选
                    this.state.answer.push('')
                    break
                case 1://多选
                    this.state.answer.push([])
                    break
                case 2://填空
                    this.state.answer.push('')
                    break
                case 3://简单
                    this.state.answer.push('')
                    break
                default :
                    return false
            }
        })
    }
    handleScroll(bool){
        this.setState({
            isShowTimers:bool
        })
    }
    render() {
        return (
            <div className={'testing_wrap'}>
                <Header {...this.props}></Header>
                <div className={'content'}>
                    <div>
                        <Time
                            isShowTimers={this.state.isShowTimers}
                            handleScroll={this.handleScroll.bind(this)}
                        />
                        <div className={`${!this.state.isShowTimers?'mgLeft':''}`}>
                            <p>跨境电子商务师（三级）考证</p>
                            <label>
                                <span>答题卡：</span>
                                <p>
                                    {
                                        this.props.test.qt.map((v,i)=>{
                                            return <a key={i} className={`${v.tip?'active':''}`}>{v.s}</a>
                                        })
                                    }
                                </p>
                            </label>
                            <div className={'test'}>
                                {
                                    this.props.test.qt.map((v,i)=>{
                                        switch (v.t) {
                                            case 0://单选
                                                return (
                                                    <div key={i}>
                                                        <p>{v.s}、【单选】{v.q}：</p>
                                                        <div>
                                                            <Radio.Group onChange={(value)=>{
                                                                let arr = this.state.answer;
                                                                arr[i] = value;
                                                                this.setState({
                                                                    answer:arr
                                                                })
                                                                let obj = {
                                                                    r:value,
                                                                    tip:false
                                                                };
                                                                value === '' || (obj.tip = true);
                                                                this.props.handleAnswer(i,obj)
                                                            }}>
                                                                {
                                                                    v.a.map((value,index)=>{
                                                                        return (
                                                                            <Radio key={index} checked={this.props.test.qt[i].r === value.b} value={value.b}>{value.t}</Radio>
                                                                        )
                                                                    })
                                                                }
                                                            </Radio.Group>
                                                        </div>
                                                    </div>
                                                )
                                                break
                                            case 1://多选
                                                return (
                                                    <div key={i}>
                                                        <p>{v.s}、【多选】{v.q}：</p>
                                                        <div>
                                                            <Checkbox.Group onChange={(value)=>{
                                                                let arr = this.state.answer;
                                                                arr[i] = value;
                                                                this.setState({
                                                                    answer:arr
                                                                })
                                                                let obj = {
                                                                    r:value,
                                                                    tip:false
                                                                };
                                                                value.length == 0 || (obj.tip = true);
                                                                this.props.handleAnswer(i,obj)
                                                            }}>
                                                                {
                                                                    v.a.map((value,index)=>{
                                                                        return (
                                                                            <Checkbox key={index} checked={this.props.test.qt[i].r.includes(value.b)} label={value.b}>{value.t}</Checkbox>
                                                                        )
                                                                    })
                                                                }
                                                            </Checkbox.Group>
                                                        </div>
                                                    </div>
                                                )
                                                break
                                            case 2://填空
                                                return (
                                                    <div key={i}>
                                                        <p>{v.s}、【填空】{v.q}：</p>
                                                        <div>
                                                            <textarea rows={1} onChange={(e)=>{
                                                                let arr = this.state.answer;
                                                                arr[i] = e.target.value;
                                                                this.setState({
                                                                    answer:arr
                                                                })
                                                                let obj = {
                                                                    r:e.target.value,
                                                                    tip:false
                                                                };
                                                                e.target.value === '' || (obj.tip = true);
                                                                this.props.handleAnswer(i,obj)
                                                            }} defaultValue={this.props.test.qt[i].r}></textarea>
                                                        </div>
                                                    </div>
                                                )
                                                break
                                            case 3://简单
                                                return (
                                                    <div key={i}>
                                                        <p>{v.s}、【简单】{v.q}：</p>
                                                        <div>
                                                            <textarea style={{height:'3rem'}} onChange={(e)=>{
                                                                let arr = this.state.answer;
                                                                arr[i] = e.target.value;
                                                                this.setState({
                                                                    answer:arr
                                                                })
                                                                let obj = {
                                                                    r:e.target.value,
                                                                    tip:false
                                                                };
                                                                e.target.value === '' || (obj.tip = true);
                                                                this.props.handleAnswer(i,obj)
                                                            }} defaultValue={this.props.test.qt[i].r}></textarea>
                                                        </div>
                                                    </div>
                                                )
                                                break
                                            default :
                                                return false
                                        }
                                    })
                                }
                                {/*<div>*/}
                                {/*    <a onClick={this.handlePost.bind(this)}>提交</a>*/}
                                {/*</div>*/}
                            </div>
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
            test:state.test
        }
    ),
    {
        handleAnswer
    }
)(testing)
