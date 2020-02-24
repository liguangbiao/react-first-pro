import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './newsManage.scss'
import {Message} from "element-react";

export default class newsManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search:'',
            listData:[],
            bool:false
        };
    }
    componentDidMount() {
        this.getData(1)
    }
    getData(status){
        React.axios.post('/usr/api/admin/newsManage/queryNewsManage',{
            title:this.state.search,
            status:status
        }).then(res => {
            if(res.data.messageCode === '1000'){
                this.setState({listData:res.data.data})
            }
        })
    }
    handle(){
        if(this.state.bool){
            this.getData(1)
            this.setState({
                bool:!this.state.bool
            })
        }else{
            this.getData(2)
            this.setState({
                bool:!this.state.bool
            })
        }
    }
    render() {
        return (
            <div className={'admin_newsManage'}>
                <div>
                    <div>
                        <p>新闻管理</p>
                        <label>
                            <input onChange={(e)=>{this.setState({search:e.target.value})}} placeholder={'请输入账号用户搜索'}/>
                            <a onClick={this.getData.bind(this)}><i className={'el-icon-search'}> </i></a>
                        </label>
                        <Link to={'/admin/addNews'}>添加新闻</Link>
                    </div>
                    <div className={'type-top'}>
                        <label>
                            <span>排序：</span>
                            <a className={'active'}>最新发布</a>
                            {/*<a>浏览最多</a>*/}
                            {/*<a>评论最多</a>*/}
                            <a className={`${this.state.bool?'active':''}`} onClick={this.handle.bind(this)}>草稿箱</a>
                        </label>
                    </div>
                </div>
                <div>
                    {
                        this.state.listData.map((v,i)=>{
                            return (
                                <div key={i}>
                                    <img src={require('../../../../assets/images/qt1.png')}/>
                                    <p>{v.title}</p>
                                    {/*<label><span>11月26日考</span><span>12345人已报名</span></label>*/}
                                    <a onClick={()=>{this.props.history.push({pathname:'/admin/editNews',query:{val:v}})}}>编辑</a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
