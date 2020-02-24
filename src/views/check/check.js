import React, {Component} from 'react';
import './check.scss'
import Header from '../../views/layout/header/header'
import {Select,Input,Dialog} from "element-react";
export default class check extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogVisible:false,
            dialogVisible1:false,
            options: [{
                value: '选项1',
                label: '跨境电子商务师（三级）'
            }, {
                value: '选项2',
                label: '跨境电子商务师（三级）'
            }],
            value: ''
        };
    }

    render() {
        return (
            <div className={'ic_wrap'}>
                <Header {...this.props} active={3}></Header>
                <div className={'main'}>
                    <div>
                        <div>
                            <p>全国跨境电子商务师</p>
                            <div>
                                <span>证书类型：</span>
                                <label>
                                    <Select value={this.state.value}  placeholder={'跨境电子商务师（三级）'}>
                                        {
                                            this.state.options.map(el => {
                                                return <Select.Option key={el.value} label={el.label} value={el.value} />
                                            })
                                        }
                                    </Select>
                                    <span>请选择证书类型</span>
                                </label>
                            </div>
                            <div>
                                <span>身份证号：</span>
                                <label>
                                    <Input/>
                                    <span>请选择证书类型</span>
                                </label>
                            </div>
                            <div>
                                <span>证书编号：</span>
                                <label>
                                    <Input/>
                                    <span>请选择证书类型</span>
                                </label>
                            </div>
                            <div>
                                <a onClick={()=>{this.setState({ dialogVisible1: true })}}>重填</a>
                                <a onClick={()=>{this.setState({ dialogVisible: true })}}>查询</a>
                            </div>
                        </div>
                        <div>
                            <p><span></span>联系我们</p>
                            <p>123456789@mail.com</p>
                            <p>12345678910</p>
                            <p><span></span>操作说明</p>
                            <p>1.输入考证人的身份证号码， 证书编号，点击查询按钮进 行查询；</p>
                            <p>2.如果输入信息正确，对应 考试的证书信息将会在下一 个页面列出；</p>
                        </div>
                    </div>
                </div>
                <div style={{display:`${this.state.dialogVisible === true?'flex':'none'}`}} className={'fix'}>
                    <div>
                        <a>打印</a>
                        <a>下载PDF</a>
                        <a onClick={()=>{this.setState({ dialogVisible: false })}}>关闭</a>
                    </div>
                    <div className={'picture'}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <img src={require('../../assets/images/qt1.png')}/>
                    </div>
                </div>
                <Dialog
                    title=""
                    size="tiny"
                    visible={ this.state.dialogVisible1 }
                    onCancel={ () => this.setState({ dialogVisible1: false }) }
                    lockScroll={ false }
                >
                    <Dialog.Body>
                        <div className={'none'}>
                            <img src={require('../../assets/images/qt1.png')}/>
                            <p>没有找到你查询的证书！</p>
                        </div>
                    </Dialog.Body>
                </Dialog>
            </div>
        )
    }
}
