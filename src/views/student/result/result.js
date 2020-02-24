import React, {Component} from 'react';
import Header from '../../../views/layout/header/header'
import { connect} from "react-redux";
import {handleAnswer} from '../../../store/action'
import './result.scss'
import {Checkbox, Radio} from "element-react";
class result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            length:1,
            count:0,
            selectScore:0,
            fillScore:0
        };
    }
    componentDidMount() {
        this.setState({
            length:this.props.test.qt.length
        });
        let c = 0;
        let s = 0;
        let f = 0;
        this.props.test.qt.map((v,i)=>{
            if(v.r === v.real){
                c++;
                if(v.t ===0 || v.t ===1){
                    s += 10;
                }else{
                    f += 10;
                }
            }
        });
        this.setState({
            count:c,
            selectScore:s,
            fillScore:f,
    })
    }

    render() {
        return (
            <div className={'result_wrap'}>
                <Header {...this.props}></Header>
                <div className={'content'}>
                    <div>
                        <div>
                            <div>
                                <label>
                                    <span>得分：</span>
                                    <p>{(this.state.count / this.state.length) * 100}<span>/100分</span></p>
                                </label>
                                <div>
                                    <label>
                                        试题量<br/><strong>{this.state.length}</strong>道
                                    </label>
                                    <label>
                                        正确数<br/><strong>{this.state.count}</strong>道
                                    </label>
                                    <label>
                                        正确率<br/><strong>{(this.state.count / this.state.length) * 100}</strong>%
                                    </label>
                                </div>
                                <div>
                                    <p>共{this.state.length}道题，您答对了{this.state.count}道</p>
                                    <div>
                                        {
                                            this.props.test.qt.map((v,i)=>{
                                                if(v.t === 2 || v.t === 3){
                                                    if(v.r === v.real){
                                                        return (
                                                            <a key={i} style={{fontSize:'0.24rem'}}><span>{v.s}</span>√</a>
                                                        )
                                                    }else{
                                                        return (
                                                            <a key={i} style={{fontSize:'0.24rem'}} className={'wrong'}><span>{v.s}</span>×</a>
                                                        )
                                                    }
                                                }else{
                                                    return (
                                                        <a key={i} className={`${v.r !== v.real?'wrong':''}`}><span>{v.s}</span>{v.real}</a>
                                                    )
                                                }
                                            })
                                        }
                                    </div>
                                </div>
                                <div>
                                    <label>
                                        <span>{this.state.selectScore}</span><br/>选择题得分
                                    </label>
                                    <label>
                                        <span>{this.state.fillScore}</span><br/>填空题得分
                                    </label>
                                    <label>
                                        <span>{(this.state.count / this.state.length) * 100}</span><br/>历史最高分
                                    </label>
                                    <label>
                                        <span>834</span><br/>我的排名
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>跨境电子商务师（三级）考证</p>
                            <label>
                                <span>答题卡：</span>
                                <p>
                                    {
                                        this.props.test.qt.map((v,i)=>{
                                            return <a key={i} className={`${v.r !== v.real?'active':''}`}>{v.s}</a>
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
                                                            <Radio.Group>
                                                                {
                                                                    v.a.map((value,index)=>{
                                                                        return (
                                                                            <Radio disabled={true} key={index} checked={this.props.test.qt[i].r === value.b} value={value.b}>{value.t}</Radio>
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
                                                            <Checkbox.Group>
                                                                {
                                                                    v.a.map((value,index)=>{
                                                                        return (
                                                                            <Checkbox disabled={true} key={index} checked={this.props.test.qt[i].r.includes(value.b)} label={value.b}>{value.t}</Checkbox>
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
                                                            <textarea readOnly={true} rows={1} value={this.props.test.qt[i].r}></textarea>
                                                        </div>
                                                    </div>
                                                )
                                                break
                                            case 3://简单1
                                                return (
                                                    <div key={i}>
                                                        <p>{v.s}、【简答】{v.q}：</p>
                                                        <div>
                                                            <textarea readOnly={true} style={{height:'3rem'}} value={this.props.test.qt[i].r}></textarea>
                                                        </div>
                                                    </div>
                                                )
                                                break
                                            default :
                                                return false
                                        }
                                    })
                                }
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
)(result)
