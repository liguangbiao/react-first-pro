import React, {Component} from 'react';
import {connect} from "react-redux";
import './applyerInfo.scss'
import {Upload, Input, Steps, Message,} from 'element-react'


class applyerInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rootPath:null,
            fileList:[],
            fileList1:[],
            step:2,
            applicantName:'',//申请人姓名
            applicantId:'',//身份证号
            applicantPhone:'',//手机
            organizationEmail:'',//邮箱
            lastPageData:{}
        };
        this.upLoad = this.upLoad.bind(this)
        this.remove = this.remove.bind(this)
    }
    componentDidMount() {
        if(!this.props.location.query){
            this.props.history.push('/admin/addOrg')
        }
        this.setState({
            lastPageData:this.props.location.query
        })
        let fd = new FormData();
        fd.append('moduleName','organization');
        React.axios.post('/usr/api/upDownload/getImgPath',fd)
            .then(res => {
                if(res.data.messageCode === '1000'){
                    this.setState({
                        rootPath:res.data.data.imgPath
                    })
                }
            })
    }
    addOrg(){
        if(this.state.fileList === []){Message('请上传身份证明！');return}
        if(this.state.fileList1 === []){Message('请上传身份证明！');return}
        if(this.state.applicantName === ''){Message('请填写申请人姓名！');return}
        if(this.state.applicantId === ''){Message('请填写申请人身份证号！');return}
        if(this.state.applicantPhone === ''){Message('请填写申请人手机！');return}
        if(this.state.organizationEmail === ''){Message('请填写申请人邮箱！');return}
        React.axios.post('/usr/api/admin/organization/saveOrganization',{
            organizationName:this.state.lastPageData.organizationName,//机构名称
            corporationName:this.state.lastPageData.corporationName,//法人姓名
            corporationImg:this.state.lastPageData.fileList[0].name+','+this.state.lastPageData.fileList1[0].name,//法人身份证照片
            corporationId:this.state.lastPageData.corporationId,//法人身份证号
            organizationPhone:this.state.lastPageData.organizationPhone,//机构电话
            properties:this.state.lastPageData.properties,//机构营业性质 0.没有营业执照 1.有营业执照
            certificateImg:this.state.lastPageData.fileList2[0].name,//教育资质证书
            certificateNumber:this.state.lastPageData.certificateNumber,//教育资质证书编号
            attribute:this.state.lastPageData.attribute,//标签
            applicantName:this.state.applicantName,//申请人姓名
            applicantId:this.state.applicantId,//身份证号
            applicantImg:this.state.fileList[0].name+','+this.state.fileList1[0].name,//身份证
            applicantPhone:this.state.applicantPhone,//手机
            organizationEmail:this.state.organizationEmail,//邮箱
            createUser:this.props.userInfo.id,//申请人ID,
            orgImg:this.state.lastPageData.orgImg,
            // expireDate:this.state.lastPageData.isForever?'':this.state.lastPageData.expireDate,
            // isForever:this.state.lastPageData.addIsForever?1:0,
        }).then(res => {
            if(res.data.success){
                this.setState({step:3})
                setTimeout(()=>{
                    this.props.history.push('/admin/orgManage')
                },3000)
            }
        })
    }
    upLoad(v,type){
        let fd = new FormData();
        fd.append('file',v.file);
        fd.append('moduleName','organization');
        React.axios({
            url:'/usr/api/upDownload/uploadImg',
            headers:{'Content-Type':"multipart/form-data"},
            data:fd,
            method:'post',
        }).then(res => {
            if(res.data.messageCode === '1000'){
                if(type ===1){
                    this.setState({
                        fileList:[{
                            name:res.data.data.imgName,
                            url:this.state.rootPath+res.data.data.imgName,
                            uid:new Date().getTime(),
                            status:'success'
                        }]
                    });
                    v.onSuccess();
                }else if(type === 2){
                    this.setState({
                        fileList1:[{
                            name:res.data.data.imgName,
                            url:this.state.rootPath+res.data.data.imgName,
                            uid:new Date().getTime(),
                            status:'success'
                        }]
                    });
                    v.onSuccess();
                }
            }
        })
    }
    remove(type){
        let fd = new FormData();
        if(type === 1){
            fd.append('imgName',this.state.fileList[0].name)
        }else if(type === 2){
            fd.append('imgName',this.state.fileList[1].name)
        }
        fd.append('moduleName','organization');
        React.axios.post('/usr/api/upDownload/deleteImg',fd)
            .then(res => {
                if(res.data.messageCode === '1000'){
                    if(type === 1){
                        this.setState({
                            fileList:[]
                        })
                    }else if(type === 2){
                        this.setState({
                            fileList1:[]
                        })
                    }
                }
            })
    }
    render() {
        return (
            <div className={'admin_addOrg'}>
                <div>
                    <Steps active={this.state.step}>
                        <Steps.Step title="机构信息填写"></Steps.Step>
                        <Steps.Step title="申请人信息填写"></Steps.Step>
                        <Steps.Step title="完成"></Steps.Step>
                    </Steps>
                </div>
                <div style={{display:`${this.state.step === 2?'block':'none'}`}}>
                    <label>
                        <span>申请人姓名</span>
                        <div>
                            <Input onChange={(v)=>{this.setState({applicantName:v})}}/>
                        </div>
                    </label>
                    <label>
                        <span>身份证号</span>
                        <div>
                            <Input onChange={(v)=>{this.setState({applicantId:v})}}/>
                        </div>
                    </label>
                    <div className={'up'}>
                        <span>身份证</span>
                        <div className={'id'}>
                            <div className={'upload'}>
                                <a>上传正面照</a>
                                <Upload
                                    action="string"
                                    onRemove={()=>{this.remove(1)}}
                                    listType="picture-card"
                                    limit={1}
                                    httpRequest={(v)=>{this.upLoad(v,1)}}
                                    fileList={this.state.fileList}
                                >
                                </Upload>
                            </div>
                            <div className={'upload'}>
                                <a>上传反面照</a>
                                <Upload
                                    action="string"
                                    onRemove={()=>{this.remove(2)}}
                                    listType="picture-card"
                                    limit={1}
                                    httpRequest={(v)=>{this.upLoad(v,2)}}
                                    fileList={this.state.fileList1}
                                >
                                </Upload>
                            </div>
                        </div>
                    </div>
                    <label>
                        <span>手机</span>
                        <div>
                            <Input onChange={(v)=>{this.setState({applicantPhone:v})}}/>
                        </div>
                    </label>
                    <label>
                        <span>邮箱</span>
                        <div>
                            <Input onChange={(v)=>{this.setState({organizationEmail:v})}}/>
                        </div>
                    </label>
                    <div>
                        <a onClick={this.addOrg.bind(this)}>完成</a>
                    </div>
                </div>
                <div style={{display:`${this.state.step === 3?'block':'none'}`}}>
                    <img src={require('../../../../assets/images/org2.png')}/>
                    <p>机构添加完成</p>
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
)(applyerInfo)
