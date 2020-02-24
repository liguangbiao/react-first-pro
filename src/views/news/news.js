import React, {Component} from 'react';
import './news.scss'
import Header from '../../views/layout/header/header'

export default class news extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    look(i){
        this.props.history.push({pathname:'/details/'+i})
    }
    render() {
        return (
            <div className={'inews_wrap'}>
                <Header {...this.props}></Header>
                <div className={'inews_content'}>
                    <div>
                      <div onClick={this.look.bind(this,1)}>
                          <div>
                              <p>万圣节的动图表情包，看这里就够了！</p>
                              <p>万圣节的动图表情包，看这里就够了！</p>
                          </div>
                          <div>
                              <p>2019/10/28  10:00</p>
                              <p>浏览：2080</p>
                          </div>
                      </div>
                        <div>
                            <div>
                                <p>万圣节的动图表情包，看这里就够了！</p>
                                <p>万圣节的动图表情包，看这里就够了！</p>
                            </div>
                            <div>
                                <p>2019/10/28  10:00</p>
                                <p>浏览：2080</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>万圣节的动图表情包，看这里就够了！</p>
                                <p>万圣节的动图表情包，看这里就够了！</p>
                            </div>
                            <div>
                                <p>2019/10/28  10:00</p>
                                <p>浏览：2080</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>万圣节的动图表情包，看这里就够了！</p>
                                <p>万圣节的动图表情包，看这里就够了！</p>
                            </div>
                            <div>
                                <p>2019/10/28  10:00</p>
                                <p>浏览：2080</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>万圣节的动图表情包，看这里就够了！</p>
                                <p>万圣节的动图表情包，看这里就够了！</p>
                            </div>
                            <div>
                                <p>2019/10/28  10:00</p>
                                <p>浏览：2080</p>
                            </div>
                        </div>
                        <div className={'more'}>
                            <a>查看更多</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
