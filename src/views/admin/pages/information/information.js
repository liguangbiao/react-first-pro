import React, {Component} from 'react';
import {connect} from "react-redux";
import './information.scss'
import { Dialog, Pagination, Select, DateRangePicker, Message} from "element-react";

class information extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData:[],
            typeList:[],
            searchType:'',
            search:'',
            status:'',
            currentPage:1,
            pageSize:9,
            total:0,
            //添加信息
            dialogVisible:false,
            selectCf:null,
            examName:'',
            time:[new Date(),new Date()],
            examCentre:'',
            examAddress:'',
            contact:'',
            phone:'',
            //编辑信息
            editData:{
                dialogVisible:false,
                selectCf:null,
                examName:'',
                time:[new Date(),new Date()],
                examCentre:'',
                examAddress:'',
                contact:'',
                phone:'',
                id:''
            }
        };
        this.getData = this.getData.bind(this)
        this.changeType = this.changeType.bind(this)
        this.countDown = this.countDown.bind(this)
        this.addTest = this.addTest.bind(this)
        this.editTest = this.editTest.bind(this)
    }
    componentDidMount() {
        React.axios.post('/usr/api/admin/certificateInfo/queryCertificateInfoName',{
            createUser:this.props.userInfo.id
        }).then(res => {
            this.setState({
                typeList:res.data.data
            })
        })
        this.getData()
    }
    countDown(time){
        function getzf(s) {
            if(s<10) return '0'+s;
            return s
        }
        let y = getzf(time.getFullYear());
        let mm = getzf(time.getMonth()+1);
        let d = getzf(time.getDate());
        let h = getzf(time.getHours());
        let m = getzf(time.getMinutes());
        let s = getzf(time.getSeconds());
        return y+'-'+mm+'-'+d+' '+h+':'+m+':'+s
    }
    changeType(i){
        this.setState({
            searchType:i
        },()=>{this.getData()})
    }
    getData(){
        React.axios.post('/usr/api/admin/examInfo/queryExamInfo',{
            examName:this.state.search,
            status:this.state.status,
            certificateId:this.state.searchType === ''?'':this.state.typeList[this.state.searchType].id,
            currentPage:this.state.currentPage,
            pageSize:this.state.pageSize
        }).then(res => {
            if(res.data.messageCode === '1000'){
                this.setState({
                    listData:res.data.data,
                    total:res.data.total
                })
            }
        })
    }
    addTest(){
        React.axios.post('/usr/api/admin/examInfo/saveExamInfo',{
            createUser:this.props.userInfo.id,
            startDates:this.countDown(this.state.time[0]),
            endDates:this.countDown(this.state.time[1]),
            certificateId:this.state.selectCf,
            examName:this.state.examName,
            examCentre:this.state.examCentre,
            examAddress:this.state.examAddress,
            contact:this.state.contact,
            phone:this.state.phone,
        }).then(res => {
            if(res.data.messageCode === '1000'){
                Message('添加成功！')
                this.setState({
                    dialogVisible:false,
                    selectCf:null,
                    examName:'',
                    time:[new Date(),new Date()],
                    examCentre:'',
                    examAddress:'',
                    contact:'',
                    phone:'',
                },()=>{this.getData()})
            }
        })
    }
    showEdit(v){
        this.setState({
            editData:{
                dialogVisible:true,
                selectCf:parseInt(v.certificateId),
                examName:v.examName,
                time:[new Date(v.startDate),new Date(v.endDate)],
                examCentre:v.examCentre,
                examAddress:v.examAddress,
                contact:v.contact,
                phone:v.phone,
                id:v.id
            }
        })
    }
    editTest(){
        React.axios.post('/usr/api/admin/examInfo/updateExamInfo',{
            startDates:this.countDown(this.state.editData.time[0]),
            endDates:this.countDown(this.state.editData.time[1]),
            certificateId:this.state.editData.selectCf,
            examName:this.state.editData.examName,
            examCentre:this.state.editData.examCentre,
            examAddress:this.state.editData.examAddress,
            contact:this.state.editData.contact,
            phone:this.state.editData.phone,
            id:this.state.editData.id
        }).then(res => {
            if(res.data.messageCode === '1000'){
                Message('修改成功！');
                this.setState({
                    editData:{
                        dialogVisible:false,
                        selectCf:null,
                        examName:'',
                        time:[new Date(),new Date()],
                        examCentre:'',
                        examAddress:'',
                        contact:'',
                        phone:'',
                        id:''
                    }
                },()=>{this.getData()})
            }
        })
    }
    render() {
        return (
            <div className={'admin_information'}>
                <div>
                    <div>
                        <p>考试信息</p>
                        <label>
                            <input onChange={(e)=>{this.setState({search:e.target.value})}} placeholder={'请输入账号用户搜索'}/>
                            <a onClick={()=>{this.getData()}}><i className={'el-icon-search'}> </i></a>
                        </label>
                        <a onClick={()=>{this.setState({dialogVisible:true})}}>添加考试</a>
                    </div>
                    <div className={'pages'}>
                        <div>
                            {
                                this.state.typeList.map((v,i)=>{
                                    return (
                                        <a  onClick={()=>{this.changeType(i)}}
                                            key={i}
                                            className={`${this.state.searchType === i?'active':''}`}>
                                            {v.certificateName}
                                        </a>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <Pagination onCurrentChange={(v)=>{this.setState({currentPage:v},()=>{this.getData()})}} currentPage={this.state.currentPage} pageSize={this.state.pageSize} layout="prev, pager, next" total={this.state.total} small={true}/>
                        </div>
                    </div>
                </div>
                <div>
                    {
                        this.state.listData.map((v,i) => {
                            return (
                                <div key={i}>
                                    <p>{v.examName}</p>
                                    <label>
                                        <img src={require('../../../../assets/images/im1.png')}/>
                                        <p>考试时间：<br/><span>
                                            {this.countDown(new Date(v.startDate)).split(' ')[1].slice(0,-3)}-
                                            {this.countDown(new Date(v.endDate)).split(' ')[1].slice(0,-3)}
                                            （{v.duration}min）
                                        </span></p>
                                    </label>
                                    <label>
                                        <img src={require('../../../../assets/images/im2.png')}/>
                                        <p>中心名称：<br/><span>{v.examCentre}</span></p>
                                    </label>
                                    <label>
                                        <img src={require('../../../../assets/images/im3.png')}/>
                                        <p>指定考场：<br/><span>{v.examAddress}</span></p>
                                    </label>
                                    <label>
                                        <img src={require('../../../../assets/images/im4.png')}/>
                                        <p>联系电话：<br/><span>{v.phone}</span></p>
                                    </label>
                                    {
                                        v.status === 3?(
                                            <div>
                                                <a onClick={this.showEdit.bind(this,v)}>修改信息</a>
                                            </div>
                                        ):('')
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                <Dialog
                    title=""
                    size="tiny"
                    visible={ this.state.dialogVisible }
                    onCancel={ () => this.setState({ dialogVisible: false }) }
                    lockScroll={ false }
                >
                    <Dialog.Body>
                        <div className={'addTest'}>
                            <p>添加考试</p>
                            <span>所属证书类型：</span><br/>
                            <Select onChange={(v)=>{this.setState({selectCf:v})}} value={this.state.selectCf}  placeholder={'选择所属证书'}>
                                {
                                    this.state.typeList.map(el => {
                                        return <Select.Option key={el.id} label={el.certificateName} value={el.id} />
                                    })
                                }
                            </Select>
                            <span>考试名称：</span>
                            <input onChange={(e)=>{this.setState({examName:e.target.value})}}/>
                            <span>考试中心：</span>
                            <input onChange={(e)=>{this.setState({examCentre:e.target.value})}}/>
                            <span>指定场地：</span>
                            <input onChange={(e)=>{this.setState({examAddress:e.target.value})}}/>
                            <span>考试时间：</span><br/>
                            <DateRangePicker
                                value={this.state.time}
                                isShowTime={true}
                                placeholder="选择考试时间"
                                onChange={date=>{
                                    console.debug('DatePicker1 changed: ', date)
                                    this.setState({time: date})
                                }}
                                disabledDate={time=>time.getTime() < Date.now() - 8.64e7}
                            />
                            <span>联系人：</span>
                            <input onChange={(e)=>{this.setState({contact:e.target.value})}}/>
                            <span>联系电话：</span>
                            <input onChange={(e)=>{this.setState({phone:e.target.value})}}/>
                            <a onClick={()=>{this.addTest()}}>确定添加</a>
                        </div>
                    </Dialog.Body>
                </Dialog>
                <Dialog
                    title=""
                    size="tiny"
                    visible={ this.state.editData.dialogVisible }
                    onCancel={
                        () => {
                            this.setState({
                                editData:{
                                    dialogVisible:false,
                                    selectCf:null,
                                    examName:'',
                                    time:[new Date(),new Date()],
                                    examCentre:'',
                                    examAddress:'',
                                    contact:'',
                                    phone:'',
                                }
                            })
                        }
                    }
                    lockScroll={ false }
                >
                    <Dialog.Body>
                        <div className={'addTest'}>
                            <p>编辑考试</p>
                            <span>所属证书类型：</span><br/>
                            <Select onChange={(v)=>{this.setState({editData:{...this.state.editData,...{selectCf:v}}})}}
                                    value={this.state.editData.selectCf}  placeholder={'选择所属证书'}>
                                {
                                    this.state.typeList.map(el => {
                                        return <Select.Option key={el.id} label={el.certificateName} value={el.id} />
                                    })
                                }
                            </Select>
                            <span>考试名称：</span>
                            <input value={this.state.editData.examName} onChange={(e)=>{this.setState({editData:{...this.state.editData,...{examName:e.target.value}}})}}/>
                            <span>考试中心：</span>
                            <input value={this.state.editData.examCentre} onChange={(e)=>{this.setState({editData:{...this.state.editData,...{examCentre:e.target.value}}})}}/>
                            <span>指定场地：</span>
                            <input value={this.state.editData.examAddress} onChange={(e)=>{this.setState({editData:{...this.state.editData,...{examAddress:e.target.value}}})}}/>
                            <span>考试时间：</span><br/>
                            <DateRangePicker
                                value={this.state.editData.time}
                                isShowTime={true}
                                placeholder="选择考试时间"
                                onChange={date=>{
                                    console.debug('DatePicker1 changed: ', date);
                                    this.setState({editData:{...this.state.editData,...{time: date}}})
                                }}
                                disabledDate={time=>time.getTime() < Date.now() - 8.64e7}
                            />
                            <span>联系人：</span>
                            <input value={this.state.editData.contact} onChange={(e)=>{this.setState({editData:{...this.state.editData,...{contact:e.target.value}}})}}/>
                            <span>联系电话：</span>
                            <input value={this.state.editData.phone} onChange={(e)=>{this.setState({editData:{...this.state.editData,...{phone:e.target.value}}})}}/>
                            <a onClick={()=>{this.editTest()}}>确定修改</a>
                        </div>
                    </Dialog.Body>
                </Dialog>
            </div>
        )
    }
}
export default connect(
    state => ({
        userInfo:state.userInfo
    })
)(information)
