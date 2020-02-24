import React, {Component} from 'react';
import './editOrg.scss'
import {Upload, Input, Radio, Steps, Checkbox,} from 'element-react'


export default class editOrg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step:1,
            rootPath:null,
            fileList:{},
            fileList1:{},
            fileList2:{},
            fileList3:{},
            fileList4:{},
            organizationPhone1:'',//机构电话
            organizationPhone2:'',//机构电话
            data:{
                orgImg:'',
                organizationName:'',//机构名称
                corporationName:'',//法人姓名
                corporationId:'',//法人身份证号
                organizationPhone:'',//机构电话
                properties:'',//机构营业性质 0.没有营业执照 1.有营业执照
                certificateNumber:'',//教育资质证书编号
                attribute:'',//标签
                applicantName:'',//申请人姓名
                applicantId:'',//身份证号
                applicantPhone:'',//手机
                organizationEmail:'',//邮箱
                id:''
            }
        };
    }
    componentDidMount() {
        if(this.props.location.query === undefined){
            this.props.history.goBack()
        }else{
            let fd = new FormData();
            fd.append('moduleName','organization');
            React.axios.post('/usr/api/upDownload/getImgPath',fd)
                .then(res => {
                    if(res.data.messageCode === '1000'){
                        this.setState({
                            rootPath:res.data.data.imgPath,
                            data:this.props.location.query.data,
                            organizationPhone1:this.props.location.query.data.organizationPhone?this.props.location.query.data.organizationPhone.split('-')[0]:'',
                            organizationPhone2:this.props.location.query.data.organizationPhone?this.props.location.query.data.organizationPhone.split('-')[1]:'',
                        },()=>{
                            this.setState({
                                fileList:{
                                    name:this.state.data.corporationImg.split(',')[0],
                                    url:this.state.rootPath+this.state.data.corporationImg.split(',')[0],
                                    uid:new Date().getTime(),
                                    status:'success'
                                },
                                fileList1:{
                                    name:this.state.data.corporationImg.split(',')[1],
                                    url:this.state.rootPath+this.state.data.corporationImg.split(',')[1],
                                    uid:new Date().getTime(),
                                    status:'success'
                                },
                                fileList2:{
                                    name:this.state.data.certificateImg,
                                    url:this.state.rootPath+this.state.data.certificateImg,
                                    uid:new Date().getTime(),
                                    status:'success'
                                },
                                fileList3:{
                                    name:this.state.data.applicantImg.split(',')[0],
                                    url:this.state.rootPath+this.state.data.applicantImg.split(',')[0],
                                    uid:new Date().getTime(),
                                    status:'success'
                                },
                                fileList4:{
                                    name:this.state.data.applicantImg.split(',')[1],
                                    url:this.state.rootPath+this.state.data.applicantImg.split(',')[1],
                                    uid:new Date().getTime(),
                                    status:'success'
                                },
                            })
                        })
                    }
                })
        }
    }
    update(){
        let f1 = this.state.fileList === {}?'':this.state.fileList.name;
        let f2 = this.state.fileList1.length === {}?'':this.state.fileList1.name;
        let f3 = this.state.fileList2.length === {}?'':this.state.fileList2.name;
        let f4 = this.state.fileList3.length === {}?'':this.state.fileList3.name;
        let f5 = this.state.fileList4.length === {}?'':this.state.fileList4.name;
        React.axios.post('/usr/api/admin/organization/updateOrganization',{
            orgImg:this.state.data.orgImg,
            organizationName:this.state.data.organizationName,//机构名称
            corporationName:this.state.data.corporationName,//法人姓名
            corporationImg:f1+','+f2,//法人身份证照片
            corporationId:this.state.data.corporationId,//法人身份证号
            organizationPhone:this.state.data.organizationPhone,//机构电话
            properties:this.state.data.properties,//机构营业性质 0.没有营业执照 1.有营业执照
            certificateImg:f3,//教育资质证书
            certificateNumber:this.state.data.certificateNumber,//教育资质证书编号
            attribute:this.state.data.attribute,//标签
            applicantName:this.state.data.applicantName,//申请人姓名
            applicantId:this.state.data.applicantId,//身份证号
            applicantImg:f4+','+f5,//身份证
            applicantPhone:this.state.data.applicantPhone,//手机
            organizationEmail:this.state.data.organizationEmail,//邮箱
            id:this.state.data.id,
        }).then(res => {
            if(res.data.messageCode === '1000'){
                this.setState({step:2})
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
                if(type === -1){
                    this.setState({
                        data:{...this.state.data,...{orgImg:res.data.data.imgName}}
                    });
                } else if(type === 1){
                    this.setState({
                        fileList:{
                            name:res.data.data.imgName,
                            url:this.state.rootPath+res.data.data.imgName,
                            uid:new Date().getTime(),
                            status:'success'
                        }
                    });
                    v.onSuccess();
                }else if(type === 2){
                    this.setState({
                        fileList1:{
                            name:res.data.data.imgName,
                            url:this.state.rootPath+res.data.data.imgName,
                            uid:new Date().getTime(),
                            status:'success'
                        }
                    });
                    v.onSuccess();
                }else if(type === 3){
                    this.setState({
                        fileList2:{
                            name:res.data.data.imgName,
                            url:this.state.rootPath+res.data.data.imgName,
                            uid:new Date().getTime(),
                            status:'success'
                        }
                    });
                    v.onSuccess();
                }
                else if(type === 4){
                    this.setState({
                        fileList3:{
                            name:res.data.data.imgName,
                            url:this.state.rootPath+res.data.data.imgName,
                            uid:new Date().getTime(),
                            status:'success'
                        }
                    });
                    v.onSuccess();
                }
                else if(type === 5){
                    this.setState({
                        fileList4:{
                            name:res.data.data.imgName,
                            url:this.state.rootPath+res.data.data.imgName,
                            uid:new Date().getTime(),
                            status:'success'
                        }
                    });
                    v.onSuccess();
                }
            }
        })
    }
    remove(type){
        let fd = new FormData();
        if(type === 1){
            fd.append('imgName',this.state.fileList.name)
        }else if(type === 2){
            fd.append('imgName',this.state.fileList1.name)
        }else if(type === 3){
            fd.append('imgName',this.state.fileList2.name)
        }else if(type === 4){
            fd.append('imgName',this.state.fileList3.name)
        }else if(type === 5){
            fd.append('imgName',this.state.fileList4.name)
        }
        fd.append('moduleName','organization');
        React.axios.post('/usr/api/upDownload/deleteImg',fd)
            .then(res => {
                if(res.data.messageCode === '1000'){
                    if(type === 1){
                        let s = '';
                        if(this.state.fileList1 !== {}){
                            s = this.state.fileList1.name
                        }
                        React.axios.post('/usr/api/admin/organization/saveOrganization',{
                                id:this.state.data.id,
                                corporationImg:''+','+s,//法人身份证照片
                            }
                        ).then(res => {})
                        this.setState({
                            fileList:{}
                        })
                    }else if(type === 2){
                        let s = '';
                        if(this.state.fileList !== {}){
                            s = this.state.fileList.name
                        }
                        React.axios.post('/usr/api/admin/organization/saveOrganization',{
                                id:this.state.data.id,
                                corporationImg:s+','+'',//法人身份证照片
                            }
                        ).then(res => {})
                        this.setState({
                            fileList1:{}
                        })
                    }else if(type === 3){
                        React.axios.post('/usr/api/admin/organization/saveOrganization',{
                            id:this.state.data.id,
                            certificateImg:'',//法人身份证照片
                            }
                        ).then(res => {})
                        this.setState({
                            fileList2:{}
                        })
                    }else if(type === 4){
                        let s = '';
                        if(this.state.fileList4 !== {}){
                            s = this.state.fileList4.name
                        }
                        React.axios.post('/usr/api/admin/organization/saveOrganization',{
                                id:this.state.data.id,
                            applicantImg:''+','+s,//法人身份证照片
                            }
                        ).then(res => {})
                        this.setState({
                            fileList3:{}
                        })
                    }else if(type === 5){
                        let s = '';
                        if(this.state.fileList3 !== {}){
                            s = this.state.fileList3.name
                        }
                        React.axios.post('/usr/api/admin/organization/saveOrganization',{
                                id:this.state.data.id,
                                applicantImg:s+','+'',//法人身份证照片
                            }
                        ).then(res => {})
                        this.setState({
                            fileList4:{}
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
                        <Steps.Step title="完成"></Steps.Step>
                    </Steps>
                </div>
                <div style={{display:`${this.state.step === 1?'block':'none'}`}}>
                    <div>
                        <span>机构头像</span>
                        <div className={'hp'}>
                            <img src={this.state.orgImg === ''?require('../../../../assets/images/touxiang.png'):this.state.rootPath+this.state.data.orgImg} />
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
                            <Input onChange={(v)=>{this.setState({data:{...this.state.data,...{organizationName:v}}})}} defaultValue={this.state.data.organizationName}/>
                        </div>
                    </label>
                    <label>
                        <span>法人姓名</span>
                        <div>
                            <Input onChange={(v)=>{this.setState({data:{...this.state.data,...{corporationName:v}}})}} defaultValue={this.state.data.corporationName}/>
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
                                    fileList={[this.state.fileList]}
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
                                    fileList={[this.state.fileList1]}
                                >
                                </Upload>
                            </div>
                        </div>
                    </div>
                    <label>
                        <span>法人身份证号</span>
                        <div>
                            <Input onChange={(v)=>{this.setState({data:{...this.state.data,...{corporationId:v}}})}} defaultValue={this.state.data.corporationId}/>
                        </div>
                    </label>
                    <label>
                        <span>机构服务电话</span>
                        <div>
                            <Input onChange={
                                (e)=>{
                                    this.setState({
                                        organizationPhone1:e,
                                        data:{...this.state.data,...{organizationPhone:e+'-'+this.state.organizationPhone2}}
                                    })
                                }
                            }  defaultValue={this.state.organizationPhone1} style={{width:'1.4rem',marginRight:'0.2rem'}}/>
                            <Input onChange={
                                (e)=>{
                                    this.setState({
                                        organizationPhone2:e,
                                        data:{...this.state.data,...{organizationPhone:this.state.organizationPhone1+'-'+e}}
                                    })
                                }
                            } defaultValue={this.state.organizationPhone2} style={{width:'2.8rem'}}/>
                        </div>
                    </label>
                    <label>
                        <span>机构营业性质</span>
                        <div>
                            <Radio.Group value={this.state.data.properties} onChange={(v)=>{this.setState({data:{...this.state.data,...{properties:v}}})}}>
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
                            fileList={[this.state.fileList2]}
                        >
                            <i className="el-icon-plus"></i>
                        </Upload>
                    </div>
                    <label>
                        <span>教育资质证书编号</span>
                        <div>
                            <Input onChange={(v)=>{this.setState({data:{...this.state.data,...{certificateNumber:v}}})}} defaultValue={this.state.data.certificateNumber}/>
                        </div>
                    </label>
                    <label>
                        <span>机构属性</span>
                        <div>
                            <Checkbox.Group value={this.state.data.attribute === null?[]:this.state.data.attribute.split(',')} onChange={(value)=>{this.setState({data:{...this.state.data,...{attribute:value.join(',')}}})}}>
                                <Checkbox label={'教育'}>教育</Checkbox>
                                <Checkbox label={'电商'}>电商</Checkbox>
                                <Checkbox label={'培训'}>培训</Checkbox>
                            </Checkbox.Group>
                        </div>
                    </label>
                    <label>
                        <span>申请人姓名</span>
                        <div>
                            <Input onChange={(v)=>{this.setState({data:{...this.state.data,...{applicantName:v}}})}} defaultValue={this.state.data.applicantName}/>
                        </div>
                    </label>
                    <label>
                        <span>身份证号</span>
                        <div>
                            <Input onChange={(v)=>{this.setState({data:{...this.state.data,...{applicantId:v}}})}} defaultValue={this.state.data.applicantId}/>
                        </div>
                    </label>
                    <div className={'up'}>
                        <span>身份证</span>
                        <div className={'id'}>
                            <div className={'upload'}>
                                <a>上传正面照</a>
                                <Upload
                                    action="string"
                                    onRemove={()=>{this.remove(4)}}
                                    listType="picture-card"
                                    limit={1}
                                    httpRequest={(v)=>{this.upLoad(v,4)}}
                                    fileList={[this.state.fileList3]}
                                >
                                </Upload>
                            </div>
                            <div className={'upload'}>
                                <a>上传反面照</a>
                                <Upload
                                    action="string"
                                    onRemove={()=>{this.remove(5)}}
                                    listType="picture-card"
                                    limit={1}
                                    httpRequest={(v)=>{this.upLoad(v,5)}}
                                    fileList={[this.state.fileList4]}
                                >
                                </Upload>
                            </div>
                        </div>
                    </div>
                    <label>
                        <span>手机</span>
                        <div>
                            <Input onChange={(v)=>{this.setState({data:{...this.state.data,...{applicantPhone:v}}})}} defaultValue={this.state.data.applicantPhone}/>
                        </div>
                    </label>
                    <label>
                        <span>邮箱</span>
                        <div>
                            <Input onChange={(v)=>{this.setState({data:{...this.state.data,...{organizationEmail:v}}})}} defaultValue={this.state.data.organizationEmail}/>
                        </div>
                    </label>
                    <div>
                        <a onClick={this.update.bind(this)}>下一步</a>
                    </div>
                </div>
                <div style={{display:`${this.state.step === 2?'block':'none'}`}}>
                    <img src={require('../../../../assets/images/org2.png')}/>
                    <p>机构修改成功</p>
                </div>
            </div>
        )
    }
}
