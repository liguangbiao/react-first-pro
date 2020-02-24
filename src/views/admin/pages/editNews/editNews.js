import React, {Component} from 'react';
import {connect} from "react-redux";
import E from 'wangeditor'
import './editNews.scss'
import {DatePicker, Message} from "element-react";

class editNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time:new Date(),
            edit:new Object(),
            // title:'',
            news:{
                title:'',
                content:''
            }
        };
    }
    componentDidMount() {
        this.state.edit = new E(this.refs.myEdit);
        this.state.edit.create();
        if(this.props.location.query === undefined){
            this.props.history.goBack()
        }else{
            this.setState({
                news:this.props.location.query.val
            },()=>{this.state.edit.txt.html(this.state.news.content);this.setState({time:new Date(this.state.news.createDate)})})
        }
    }
    addNews(status){
        React.axios.post('/usr/api/admin/newsManage/updateNewsManage',{
            id:this.state.news.id,
            title:this.state.news.title,
            content:this.state.edit.txt.html(),
            createDate:this.state.time,
            status:status
        }).then(res => {
            if(res.data.messageCode === '1000'){
                Message('修改成功!')
                this.props.history.push('/admin/newsManage')
            }
        })
    }
    render() {
        return (
            <div className={'admin_editNews'}>
                <div>
                    <input value={this.state.news.title} onChange={(e) => {this.setState({news:{...this.state.news,...{title:e.target.value}}})}} placeholder={'点击输入标题'}/>
                    <label>还能输入50个字符
                        <div>
                            <DatePicker
                                value={this.state.time}
                                placeholder="选择日期"
                                onChange={date=>{
                                    console.debug('DatePicker1 changed: ', date)
                                    this.setState({time: date})
                                }}
                                disabledDate={time=>time.getTime() < Date.now() - 8.64e7}
                            />
                        </div>
                    </label>
                    <div ref={'myEdit'} className={'edit'}>

                    </div>
                    <div className={'btn'}>
                        <a onClick={this.addNews.bind(this,1)}>发布</a>
                        <a onClick={this.addNews.bind(this,2)}>草稿</a>
                        <a onClick={()=>{this.props.history.push('/admin/newsManage')}}>取消</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(
    state => (
        {
            userInfo:state.userInfo
        }
    )
)(editNews)
