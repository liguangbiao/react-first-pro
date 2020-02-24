import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './noticeManage.scss'

export default class noticeManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search:'',
            listData:[]
        };
    }
    componentDidMount() {
        this.getData(1)
    }
    getData(status){
        React.axios.post('/usr/api/admin/proclamationManage/queryProclamationManage',{
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
            <div className={'admin_noticeManage'}>
                <div>
                    <div>
                        <p>公告管理</p>
                        <label>
                            <input onChange={(e)=>{this.setState({search:e.target.value})}} placeholder={'请输入账号用户搜索'}/>
                            <a onClick={this.getData.bind(this)}><i className={'el-icon-search'}> </i></a>
                        </label>
                        <Link to={'/admin/addNotes'}>添加公告</Link>
                    </div>
                    <div className={'type-top'}>
                        <label>
                            <span>排序：</span>
                            <a className={'active'}>最新发布</a>
                            <a className={`${this.state.bool?'active':''}`} onClick={this.handle.bind(this)}>草稿箱</a>
                        </label>
                    </div>
                </div>
                <div>
                    {
                        this.state.listData.map((v,i)=>{
                            return (
                                <div key={i}>
                                    <p className={'noread'}>{v.title}</p>
                                    <a onClick={()=>{this.props.history.push({pathname:'/admin/editNotes',query:{val:v}})}}>编辑</a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
