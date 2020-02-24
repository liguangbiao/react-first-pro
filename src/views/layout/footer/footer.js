import React, {Component} from 'react';
import './footer.scss'

export default class footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
           <div className={'foot_wrap'}>
               <div className={'w footer'}>
                   <div>
                       <img src={require('../../../assets/images/logo.png')}/>
                       <div>
                           <a>首页</a>
                           <a>考证信息</a>
                           <a>考证流程</a>
                           <a>证书验真</a>
                           <a>新闻公告</a>
                           <a>常见问题</a>
                       </div>
                       <div>
                           <label>
                               <img src={require('../../../assets/images/kxqr.jpg')} />
                               <p>酷校公众号</p>
                           </label>
                           <label>
                               <img src={require('../../../assets/images/qiyeqr.jpg')} />
                               <p>企业公众号</p>
                           </label>
                       </div>
                       <p>
                           <a>关于我们</a>
                           <a>在线帮助</a>
                           <a>操作说明</a>
                           <a>联系我们</a>
                           <a>友情链接</a>
                       </p>
                       <div>
                           <span>服务监督电话：020-83620991</span>
                           <span>技术支持与运营：广州大洋教育科技股份有限公司</span>
                           <span>粤ICP备10228807号-1</span>
                           <span>ICP证备B2-20110267</span>
                       </div>
                   </div>
               </div>
           </div>
        )
    }
}
