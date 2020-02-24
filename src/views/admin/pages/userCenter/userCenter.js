import React, {Component} from 'react';
import {connect} from "react-redux";
import './userCenter.scss'
import {Input, Radio, Upload, Message} from "element-react";
import {login} from '../../../../store/action'

class userCenter extends Component {
    constructor(props){
        super(props);
        this.state = {
            rootPath:'',
            data:{
                headImg:'',
                userName: null,
                nickName: null,
                sex: null,
                email: null,
            }
        };
        this.upLoad = this.upLoad.bind(this)
    }
    componentDidMount() {
        let fd = new FormData();
        fd.append('moduleName','user');
        React.axios.post('/usr/api/upDownload/getImgPath',fd)
            .then(res => {
                if(res.data.messageCode === '1000'){
                    this.setState({
                        rootPath: res.data.data.imgPath,
                    })
                }
            })
        this.setState({
            data:this.props.userInfo
        })
    }
    upLoad(v){
        let fd = new FormData();
        fd.append('file',v.file);
        fd.append('moduleName','user');
        React.axios({
            url:'/usr/api/upDownload/uploadImg',
            headers:{'Content-Type':"multipart/form-data"},
            data:fd,
            method:'post',
        }).then(res => {
            if(res.data.messageCode === '1000'){
                this.setState({
                    data:{...this.state.data,...{headImg:res.data.data.imgName}}
                });
            }
        })
    }
    render() {
        return (
            <div className={'admin_userCenter'}>
                <div>
                    <p>基本资料</p>
                    <div>
                        <span>头像</span>
                        <div className={'hp'}>
                            <img src={this.state.rootPath + this.state.data.headImg} />
                            <div>
                                <span>支持jpg、png格式的图片，建议文件小于1MB</span>
                                <Upload
                                    className="upload-demo"
                                    action="string"
                                    httpRequest={(v)=>{this.upLoad(v)}}
                                >
                                    <a>修改</a>
                                </Upload>
                            </div>
                            {/*<p>*/}
                            {/*    <span>支持jpg、gif、png、jpeg或bmp格式的图片，建议文件小于20M</span>*/}
                            {/*    <a>修改</a>*/}
                            {/*</p>*/}
                        </div>
                    </div>
                    <label>
                        <span>昵称</span>
                        <div>
                            <Input onChange={(v)=>{this.setState({data:{...this.state.data,...{nickName:v}}})}} defaultValue={this.props.userInfo.nickName}/>
                        </div>
                    </label>
                    <label>
                        <span>姓名</span>
                        <div className={'name'}>
                            <Input onChange={(v)=>{this.setState({data:{...this.state.data,...{userName:v}}})}}  defaultValue={this.props.userInfo.userName}/><span>认证成功</span>
                        </div>
                    </label>
                    <label>
                        <span>性别</span>
                        <div>
                            <Radio value="0" checked={this.state.data.sex === 0} onChange={(v)=>{this.setState({data:{...this.state.data,...{sex:parseInt(v)}}})}}>男</Radio>
                            <Radio value="1" checked={this.state.data.sex === 1} onChange={(v)=>{this.setState({data:{...this.state.data,...{sex:parseInt(v)}}})}}>女</Radio>
                        </div>
                    </label>
                    <label>
                        <span>邮箱</span>
                        <div>
                            <Input onChange={(v)=>{this.setState({data:{...this.state.data,...{email:v}}})}}  defaultValue={this.props.userInfo.email}/>
                        </div>
                    </label>
                    <div>
                        <a onClick={()=>{
                            React.axios.post('/usr/api/admin/updateSysUser',{
                                id:this.state.data.id,
                                headImg:this.state.data.headImg,
                                userName: this.state.data.userName,
                                nickName: this.state.data.nickName,
                                sex: parseInt(this.state.data.sex),
                                email: this.state.data.email,
                            }).then(res => {
                                if(res.data.messageCode === '1000'){
                                    Message('修改成功！')
                                    this.props.login(this.state.data)
                                }
                            })
                        }}>修改</a>
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
        login
    }
)(userCenter)
