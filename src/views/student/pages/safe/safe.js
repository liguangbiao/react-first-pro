import React, {Component} from 'react';
import './safe.scss'
export default class safe extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={'safe_content'}>
                <p>账号安全</p>
                <div>
                    <div>
                        <p>登录密码<span>（建议定期修改密码）</span></p>
                        <span>*******</span>
                    </div>
                    <a>修改</a>
                </div>
                <div>
                    <div>
                        <p>手机绑定<span>（用于登录账号，找回密码）</span></p>
                        <span>1750314874</span>
                    </div>
                    <a>修改</a>
                </div>
                <div>
                    <div>
                        <p>邮箱绑定<span>（用于登录账号，找回密码）</span></p>
                        <span>13754986@qq.com</span>
                    </div>
                    <a>修改</a>
                </div>
                <div>
                    <div>
                        <p>账号关联<span>（关联第三方可以快速登录账号）</span></p>
                        <div>
                            <img src={require('../../../../assets/images/wechat.png')} />
                            <img src={require('../../../../assets/images/weibo.png')} />
                            <img src={require('../../../../assets/images/QQ.png')} />
                        </div>
                    </div>
                    <a>修改</a>
                </div>
            </div>
        )
    }
}
