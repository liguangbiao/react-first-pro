import React, {Component} from 'react';
import './addOrg.scss'
import {Upload, Input, Radio, Steps, Checkbox, Message} from 'element-react'


export default class addOrg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rootPath:null,
            fileList:[],
            fileList1:[],
            fileList2:[],
            orgImg:'',
            organizationName:'',//机构名称
            corporationName:'',//法人姓名
            corporationId:'',//法人身份证号
            organizationPhone1:'',//机构电话
            organizationPhone2:'',//机构电话
            organizationPhone:'',//机构电话
            properties:'',//机构营业性质 0.没有营业执照 1.有营业执照
            certificateNumber:'',//教育资质证书编号
            attribute:'',//标签
        };
        this.upLoad = this.upLoad.bind(this)
        this.remove = this.remove.bind(this)
    }
    componentDidMount() {
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
                if(type === -1){
                    this.setState({
                        orgImg:res.data.data.imgName
                    });
                } else if(type ===1){
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
                }else if(type === 3){
                    this.setState({
                        fileList2:[{
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
            fd.append('imgName',this.state.fileList1[0].name)
        }else if(type === 3){
            fd.append('imgName',this.state.fileList2[0].name)
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
                    }else if(type === 3){
                        this.setState({
                            fileList2:[]
                        })
                    }
                }
            })
    }
    render() {
        return (
            <div className={'admin_addOrg'}>
                <div>
                    <Steps active={1}>
                        <Steps.Step title="机构信息填写"></Steps.Step>
                        <Steps.Step title="申请人信息填写"></Steps.Step>
                        <Steps.Step title="完成"></Steps.Step>
                    </Steps>
                </div>
                <div>
                    <div>
                        <span>机构头像</span>
                        <div className={'hp'}>
                            <img src={this.state.orgImg === ''?require('../../../../assets/images/touxiang.png'):this.state.rootPath+this.state.orgImg} />
                            <div>
                                <span>支持jpg、png格式的图片，建议文件小于1MB</span>
                                <Upload
                                    className="upload-demo"
                                    action="string"
                                    httpRequest={(v)=>{this.upLoad(v,-1)}}
                                >
                                    <a>修改</a>
                                </Upload>
                            </div>
                        </div>
                    </div>
                    <label>
                        <span>机构名称</span>
                        <div>
                            <Input onChange={(e)=>{this.setState({organizationName:e})}}/>
                        </div>
                    </label>
                    <label>
                        <span>法人姓名</span>
                        <div>
                            <Input onChange={(e)=>{this.setState({corporationName:e})}}/>
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
                        <span>法人身份证号</span>
                        <div>
                            <Input onChange={(e)=>{this.setState({corporationId:e})}}/>
                        </div>
                    </label>
                    <label>
                        <span>机构服务电话</span>
                        <div>
                            <Input onChange={(e)=>{this.setState({organizationPhone1:e,organizationPhone:e+'-'+this.state.organizationPhone2})}} style={{width:'1.4rem',marginRight:'0.2rem'}}/>
                            <Input onChange={(e)=>{this.setState({organizationPhone2:e,organizationPhone:this.state.organizationPhone1+'-'+e})}} style={{width:'2.8rem'}}/>
                        </div>
                    </label>
                    <label>
                        <span>机构营业性质</span>
                        <div>
                            <Radio.Group value={this.state.properties} onChange={(v)=>{this.setState({properties:v})}}>
                                <Radio value="1">有营业执照</Radio>
                                <Radio value="0">没有营业执照</Radio>
                            </Radio.Group>
                        </div>
                    </label>
                    <div className={'up'}>
                        <span>教育资质证书</span>
                        <Upload
                            action="string"
                            onRemove={()=>{this.remove(3)}}
                            listType="picture-card"
                            limit={1}
                            httpRequest={(v)=>{this.upLoad(v,3)}}
                            fileList={this.state.fileList2}
                        >
                            <i className="el-icon-plus"></i>
                        </Upload>
                    </div>
                    <label>
                        <span>教育资质证书编号</span>
                        <div>
                            <Input onChange={(e)=>{this.setState({certificateNumber:e})}}/>
                        </div>
                    </label>
                    <label>
                        <span>机构属性</span>
                        <div>
                            <Checkbox.Group onChange={(value)=>{this.setState({attribute:value.join(',')})}}>
                                <Checkbox label={'教育'}>教育</Checkbox>
                                <Checkbox label={'电商'}>电商</Checkbox>
                                <Checkbox label={'培训'}>培训</Checkbox>
                            </Checkbox.Group>
                        </div>
                    </label>
                    <div>
                        <a onClick={()=>{
                            if(this.state.orgImg === ''){Message('请上传机构头像！');return}
                            if(this.state.fileList === []){Message('请上传身份证明！');return}
                            if(this.state.fileList1 === []){Message('请上传身份证明！');return}
                            if(this.state.fileList2 === []){Message('请上传资质证书！');return}
                            if(this.state.organizationName === ''){Message('请填写机构名称！');return}
                            if(this.state.corporationName === ''){Message('请填写法人姓名！');return}
                            if(this.state.corporationId === ''){Message('请填写法人身份证！');return}
                            if(this.state.organizationPhone === ''){Message('请填写机构电话！');return}
                            if(this.state.corporationName === ''){Message('请填写法人姓名！');return}
                            if(this.state.properties === ''){Message('请选择机构营业性质！');return}
                            if(this.state.certificateNumber === ''){Message('请填写教育资质证书编号！');return}
                            if(this.state.attribute === ''){Message('请选择相关标签！');return}
                            this.props.history.push({
                                pathname:'/admin/applyerInfo',
                                query:this.state
                            })
                        }}>下一步</a>
                    </div>
                </div>
            </div>
        )
    }
}
