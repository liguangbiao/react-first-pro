import React, {Component} from 'react';
import Header from '../../views/layout/header/header'
import Footer from '../../views/layout/footer/footer'
import './consult.scss'

export default class consult extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={'consult_wrap'}>
                <Header {...this.props} active={4}></Header>
                <div className={'banner'}>
                    {/*<img src={require('../../assets/images/banner3.png')}/>*/}
                </div>
                <div className={'main'}>
                    <div>
                        <p className={'title'}>热点要闻</p>
                        <div className={'content'}>
                            <div>
                                <div>
                                    <img src={require('../../assets/images/qt1.png')}/>
                                    <a>
                                        <strong>26</strong>2019-10
                                    </a>
                                </div>
                                <p>跨境电子商务师（三级）跨境电子商务师（三级）</p>
                                <span>跨境电子商务师（三级）跨境电子商务师（三级）跨境电子商务师（三级）跨境电子商务师（三级）跨境电子商务师（三级）跨境电子商务师（三级）</span>
                                <a>MORE+</a>
                            </div>
                            <div>
                                <div>
                                    <a>
                                        <strong>26</strong>2019-10
                                    </a>
                                    <div>
                                        <p>跨境电子商务师（三级）跨境电子商务师（三级）</p>
                                        <span>跨境电子商务师（三级）跨境电子商务师（三级）跨境电子商务师（三级）跨境电子商务师（三级）跨境电子商务师（三级）跨境电子商务师（三级）</span>
                                    </div>
                                </div>
                                <div>
                                    <a>
                                        <strong>26</strong>2019-10
                                    </a>
                                    <div>
                                        <p>跨境电子商务师（三级）跨境电子商务师（三级）</p>
                                        <span>跨境电子商务师（三级）跨境电子商务师（三级）跨境电子商务师（三级）跨境电子商务师（三级）跨境电子商务师（三级）跨境电子商务师（三级）</span>
                                    </div>
                                </div>
                                <div>
                                    <a>
                                        <strong>26</strong>2019-10
                                    </a>
                                    <div>
                                        <p>跨境电子商务师（三级）跨境电子商务师（三级）</p>
                                        <span>跨境电子商务师（三级）跨境电子商务师（三级）跨境电子商务师（三级）跨境电子商务师（三级）跨境电子商务师（三级）跨境电子商务师（三级）</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className={'title'}>媒体报道</p>
                        <div>
                            <div>
                                <img src={require('../../assets/images/qt1.png')}/>
                                <p>跨境电子商务师（三级）跨境电子商务师（三级）</p>
                                <span>跨境电子商务师（三级）跨境电子商务师（三级）跨境电子商务师（三级）跨境电子商务师（三级）跨境电子商务师（三级）跨境电子商务师（三级）</span>
                            </div>
                            <div>
                                <img src={require('../../assets/images/qt1.png')}/>
                                <p>跨境电子商务师（三级）跨境电子商务师（三级）</p>
                                <span>跨境电子商务师（三级）跨境电子商务师（三级）跨境电子商务师（三级）跨境电子商务师（三级）跨境电子商务师（三级）跨境电子商务师（三级）</span>
                            </div>  <div>
                            <img src={require('../../assets/images/qt1.png')}/>
                            <p>跨境电子商务师（三级）跨境电子商务师（三级）</p>
                            <span>跨境电子商务师（三级）跨境电子商务师（三级）跨境电子商务师（三级）跨境电子商务师（三级）跨境电子商务师（三级）跨境电子商务师（三级）</span>
                        </div>

                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
