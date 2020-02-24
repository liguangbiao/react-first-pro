import React, {Component} from 'react';
import './myCertificate.scss'

export default class myCertificate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogVisible:false
        };
    }

    render() {
        return (
            <div className={'mC_content'}>
                <p>我的证书</p>
                <div className={'content'}>
                    <div>
                        <img src={require('../../../../assets/images/banner1.png')}/>
                        <span>跨境电子商务师（三级）</span>
                        <div>
                            <a onClick={()=>{this.setState({ dialogVisible: true })}}>查看</a>
                        </div>
                    </div>
                    <div>
                        <img src={require('../../../../assets/images/banner1.png')}/>
                        <span>跨境电子商务师（三级）</span>
                        <div>
                            <a>查看</a>
                        </div>
                    </div>
                    <div>
                        <img src={require('../../../../assets/images/banner1.png')}/>
                        <span>跨境电子商务师（三级）</span>
                        <div>
                            <a>查看</a>
                        </div>
                    </div>
                    <div>
                        <img src={require('../../../../assets/images/banner1.png')}/>
                        <span>跨境电子商务师（三级）</span>
                        <div>
                            <a>查看</a>
                        </div>
                    </div>
                    <div>
                        <img src={require('../../../../assets/images/banner1.png')}/>
                        <span>跨境电子商务师（三级）</span>
                        <div>
                            <a>查看</a>
                        </div>
                    </div>
                    <div>
                        <img src={require('../../../../assets/images/banner1.png')}/>
                        <span>跨境电子商务师（三级）</span>
                        <div>
                            <a>查看</a>
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
                        <img src={require('../../../../assets/images/qt1.png')}/>
                    </div>
                </div>
            </div>
        )
    }
}
