import React, {Component} from 'react';
import {connect} from "react-redux";
import E from 'wangeditor'
import './addNews.scss'
import {DatePicker, Message} from "element-react";

class addNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time:new Date(),
            edit:new Object(),
            title:'',
        };
    }
    componentDidMount() {
        this.state.edit = new E(this.refs.myEdit);
        this.state.edit.create();
    }
    addNews(status){
        React.axios.post('/usr/api/admin/newsManage/saveNewsManage',{
            createUser:this.props.userInfo.id,
            title:this.state.title,
            content:this.state.edit.txt.html(),
            createDate:this.state.time,
            status:status
        }).then(res => {
            if(res.data.messageCode === '1000'){
                Message('添加成功!')
                this.props.history.push('/admin/newsManage')
            }
        })
    }
    render() {
        return (
            <div className={'admin_addNews'}>
                <div>
                    <input onChange={(e) => {this.setState({title:e.target.value})}} placeholder={'点击输入标题'}/>
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
                        {/*<a>预览</a>*/}
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
    ),{

    }
)(addNews)
