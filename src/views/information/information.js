import React, {Component} from 'react';
import Header from '../../views/layout/header/header'
import Footer from '../../views/layout/footer/footer'
import './information.scss'

export default class information extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData:[
                [
                    '','', '','','','',
                ],
                [
                    '','', '','','','',
                ],
                [
                    '','', '','','','',
                ]
            ],
            isData:0
        };
    }
    change(i){
        this.setState({
            isData:i
        })
    }
    render() {
        return (
            <div className={'im_wrap'}>
                <Header {...this.props} active={1}></Header>
                <div className={'banner'}>
                    {/*<img src={require('../../assets/images/banner3.png')}/>*/}
                </div>
                <div className={'main'}>
                    <div>
                        <span>01跨境电子商务师类</span>
                        <div>
                            <a className={'active'}>
                                <strong>26</strong>2019-10
                            </a>
                            <a>
                                <strong>26</strong>2019-10
                            </a>
                            <a>
                                <strong>26</strong>2019-10
                            </a>
                            <a>
                                <strong>26</strong>2019-10
                            </a>
                            <a>
                                <strong>26</strong>2019-10
                            </a>
                            <a>
                                <strong>26</strong>2019-10
                            </a>
                            <a>
                                <strong>26</strong>2019-10
                            </a>
                        </div>
                        <div>
                            <div className="photo">
                                <div style={{width:this.state.listData.length*100+'%',marginLeft:this.state.isData*-100+'%'}}>
                                    {this.state.listData.map((val,index) => {
                                        return <div key={index} style={{width:100/this.state.listData.length+'%'}}>
                                            {
                                                val.map((v,i)=>{
                                                    return  <div key={i}>
                                                        <p>跨境电子商务师（三级）考试 武汉青英</p>
                                                        <label>
                                                            <img src={require('../../assets/images/im1.png')}/>
                                                            <p>考试时间：<br/><span>12:00-16:00（120min）</span></p>
                                                        </label>
                                                        <label>
                                                            <img src={require('../../assets/images/im2.png')}/>
                                                            <p>中心名称：<br/><span>武汉他拍档网络科技有限公司培训机房</span></p>
                                                        </label>
                                                        <label>
                                                            <img src={require('../../assets/images/im3.png')}/>
                                                            <p>指定考场：<br/><span>湖北武汉市洪山区黄家湖西路10号武汉工 商学院1号楼</span></p>
                                                        </label>
                                                        <label>
                                                            <img src={require('../../assets/images/im4.png')}/>
                                                            <p>联系电话：<br/><span>020-1234567</span></p>
                                                        </label>
                                                        <div>
                                                            <a onClick={()=>{this.props.history.push({pathname:'/applyCenter',query:{id:1}})}}>立即报名</a>
                                                        </div>
                                                    </div>
                                                })
                                            }
                                        </div>
                                    })}
                                </div>
                                <p>
                                    {this.state.listData.map((val,index) => {
                                        return <a
                                            key={index}
                                            onClick={this.change.bind(this,index)}
                                            className={`bannernoactive ${index === this.state.isData? 'banneractive':''}`}>
                                        </a>
                                    })}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span>01跨境电子商务师类</span>
                        <div>
                            <a className={'active'}>
                                <strong>26</strong>2019-10
                            </a>
                            <a>
                                <strong>26</strong>2019-10
                            </a>
                            <a>
                                <strong>26</strong>2019-10
                            </a>
                            <a>
                                <strong>26</strong>2019-10
                            </a>
                            <a>
                                <strong>26</strong>2019-10
                            </a>
                            <a>
                                <strong>26</strong>2019-10
                            </a>
                            <a>
                                <strong>26</strong>2019-10
                            </a>
                        </div>
                        <div>
                            <div className="photo">
                                <div style={{width:this.state.listData.length*100+'%',marginLeft:this.state.isData*-100+'%'}}>
                                    {this.state.listData.map((val,index) => {
                                        return <div key={index} style={{width:100/this.state.listData.length+'%'}}>
                                            {
                                                val.map((v,i)=>{
                                                    return  <div key={i}>
                                                        <p>跨境电子商务师（三级）考试 武汉青英</p>
                                                        <label>
                                                            <img src={require('../../assets/images/QQ.png')}/>
                                                            <p>考试时间：<br/><span>12:00-16:00（120min）</span></p>
                                                        </label>
                                                        <label>
                                                            <img src={require('../../assets/images/QQ.png')}/>
                                                            <p>中心名称：<br/><span>武汉他拍档网络科技有限公司培训机房</span></p>
                                                        </label>
                                                        <label>
                                                            <img src={require('../../assets/images/QQ.png')}/>
                                                            <p>指定考场：<br/><span>湖北武汉市洪山区黄家湖西路10号武汉工 商学院1号楼</span></p>
                                                        </label>
                                                        <label>
                                                            <img src={require('../../assets/images/QQ.png')}/>
                                                            <p>联系电话：<br/><span>020-1234567</span></p>
                                                        </label>
                                                        <div>
                                                            <a>立即报名</a>
                                                        </div>
                                                    </div>
                                                })
                                            }
                                        </div>
                                    })}
                                </div>
                                <p>
                                    {this.state.listData.map((val,index) => {
                                        return <a
                                            key={index}
                                            onClick={this.change.bind(this,index)}
                                            className={`bannernoactive ${index === this.state.isData? 'banneractive':''}`}>
                                        </a>
                                    })}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
