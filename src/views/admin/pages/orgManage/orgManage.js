import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './orgManage.scss'
import {Checkbox, DatePicker, Dialog, Dropdown, Message, Pagination} from "element-react";

export default class orgManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rootPath:'',
            search:'',
            state:'',
            org:[],
            currentPage:1,
            pageSize:10,
            total:0,
            time:'',
            allCheck:false,
            checkList:[],
            //
            isForever:false,
            setTimedialog:false,
            activeOrg:'',
            activeTime:new Date(),
            ActiveSearchStatus:'全部机构',
        };
        this.getOrg = this.getOrg.bind(this)
        this.undateOrgInfo = this.undateOrgInfo.bind(this)
        this.countDown = this.countDown.bind(this)
    }
    componentDidMount() {
        let fd = new FormData();
        fd.append('moduleName','organization');
        React.axios.post('/usr/api/upDownload/getImgPath',fd)
            .then(res => {
                if(res.data.messageCode === '1000'){
                    this.setState({
                        rootPath:res.data.data.imgPath,
                    })
                }
            });
        this.getOrg()
    }
    getOrg(){
        React.axios.post('/usr/api/admin/organization/queryOrganization',{
            organizationName:this.state.search,
            status:this.state.state,
            organizationId:'',
            currentPage:this.state.currentPage,
            pageSize:this.state.pageSize
        }).then(res => {
            let arr = [];
            res.data.data.map(()=>{arr.push(false)})
            this.setState({
                org:res.data.data,
                total:res.data.total,
                checkList:arr
            })
        })
    }
    delOrg(id){
        let ids = id +'';
        React.axios.post('/usr/api/admin/organization/deleteOrganization',{
            ids:ids,
        }).then(res => {
            if(res.data.success){
                Message('删除成功！')
                if(ids.split(',').length === (this.state.total % this.state.pageSize)){
                    this.setState({
                        currentPage:this.state.currentPage - 1,
                    },()=>{ this.getOrg()})
                }else{
                    this.getOrg()
                }
            }
        })
    }
    undateOrgInfo(){
        React.axios.post('/usr/api/admin/organization/updateUserExpireDate',{
            ids:this.state.activeOrg,
            expireDates:this.state.isForever === false?this.countDown(this.state.activeTime):null,
            isForever:this.state.isForever === false?0:1
        }).then(res => {
            if(res.data.success){
                Message('设置成功！')
                this.setState({
                    setTimedialog:false,
                    activeOrg:null,
                    activeTime:new Date(),
                    isForever:false
                })
                this.getOrg()
            }
        })
    }
    countDown(time){
        function getzf(s) {
            if(s<10) return '0'+s;
            return s
        }
        let y = getzf(time.getFullYear());
        let m = getzf(time.getMonth()+1);
        let d = getzf(time.getDate());
        return y+'-'+m+'-'+d
    }
    updateOrg(id,v){
        React.axios.post('/usr/api/admin/organization/updateStatus',{
            ids:id+'',
            status:v
        }).then(res => {
            if(res.data.success){
                Message('设置成功！')
                this.getOrg()
            }
        })
    }
    handleDel(){
        if(this.handleAllSelect().length === 0){
            Message('请先勾选用户！')
            return
        }
        this.delOrg(this.handleAllSelect())
    }
    handleUpdate(v){
        if(this.handleAllSelect().length === 0){
            Message('请先勾选用户！')
            return
        }
        this.updateOrg(this.handleAllSelect(),v)
    }
    handleAllSelect(){
        let arr = [];
        this.state.checkList.map((val,index) => {
            if(val){
                arr.push(this.state.org[index].id)
            }
        })
        return arr.join(',')
    }
    handleChecked(val,index){
        let arr = this.state.checkList;
        arr[index] = val;
        this.setState({
            checkList:arr
        })
    }
    handleAllChecked(val){
        let arr = [];
        this.state.checkList.map(()=>{
            arr.push(val)
        })
        this.setState({
            allCheck:val,
            checkList:arr
        })
    }
    showTimeDialog(id,time,f){
        if(f === 1){
            this.setState({
                isForever:true
            })
        }
        this.setState({
            setTimedialog:true,
            activeOrg:id,
            activeTime:new Date(time)
        })
    }
    handleAllSetTime(){
        if(this.handleAllSelect().length === 0){
            Message('请先勾选用户！')
            return
        }
        this.showTimeDialog(this.handleAllSelect(),new Date(),0)
    }
    handleStatus(v){
        let arr = v.split(',')
        this.setState({
            state:parseInt(arr[0]),
            ActiveSearchStatus:arr[1],
            currentPage:1,
        },()=>{ this.getOrg()})
    }
    render() {
        return (
            <div className={'admin_orgManage'}>
                <div className={'u-top'}>
                    <div>
                        <div>
                            <span>机构管理</span>
                            <Link to={'/admin/addOrg'}>添加机构</Link>
                        </div>
                        <label>
                            <input onChange={(e)=>{this.setState({search:e.target.value})}} placeholder={'用户搜索'}/>
                            <a onClick={()=>{this.getOrg()}}><i className={'el-icon-search'}> </i></a>
                        </label>
                    </div>
                    <div className={'el-wrap'}>
                        <Dropdown  onCommand={this.handleStatus.bind(this)} menu={(
                            <Dropdown.Menu>
                                <Dropdown.Item command={' ,全部机构'}>全部机构</Dropdown.Item>
                                <Dropdown.Item command={'0,已激活'}>已激活</Dropdown.Item>
                                <Dropdown.Item command={'1,已禁用'}>已禁用</Dropdown.Item>
                                {/*<Dropdown.Item command={'2,已过期'}>已过期</Dropdown.Item>*/}
                            </Dropdown.Menu>
                        )}>
                            <span className="el-dropdown-link">{this.state.ActiveSearchStatus}
                                <i className="el-icon-arrow-down el-icon--right"> </i>
                            </span>
                        </Dropdown>
                      {/*<a onClick={()=>{this.setState({state:0},()=>{this.getOrg()})}} className={`${this.state.state === 0?'active':''}`}>已激活</a>*/}
                      {/*<a onClick={()=>{this.setState({state:1},()=>{this.getOrg()})}} className={`${this.state.state === 1?'active':''}`}>已禁用</a>*/}
                    </div>
                </div>
                <div className={'pages'}>
                    <div>
                        <Checkbox checked={this.state.allCheck} onChange={(val)=>{this.handleAllChecked(val)}}>全部</Checkbox>
                        <a onClick={this.handleDel.bind(this)}>删除机构</a>
                        <a onClick={this.handleUpdate.bind(this,0)} style={{display:`${this.state.state === 0?'none':'inline-block'}`}}>激活</a>
                        <a onClick={this.handleUpdate.bind(this,1)} style={{display:`${this.state.state === 1?'none':'inline-block'}`}}>禁用</a>
                        <a onClick={()=>{this.handleAllSetTime()}}>设置有效日期</a>
                    </div>
                    <div>
                        <Pagination onCurrentChange={(v)=>{this.setState({currentPage:v},()=>{this.getOrg()})}} currentPage={this.state.currentPage} pageSize={this.state.pageSize} layout="prev, pager, next" total={this.state.total} small={true}/>
                    </div>
                </div>
                <div className={'table'}>
                    <div>
                        <div>机构名称</div>
                        <div>创建时间</div>
                        <div>申请人</div>
                        <div>套餐详情</div>
                        <div><span>操作</span><span>设置</span></div>
                    </div>
                    {
                        this.state.org.map((val,index)=>{
                            return (
                                <div key={index}>
                                    <div>
                                        <Checkbox onChange={(val)=>{this.handleChecked(val,index)}} checked={this.state.checkList[index]}> </Checkbox>
                                        <img src={`${val.orgImg === null?require('../../../../assets/images/touxiang.png'):this.state.rootPath+val.orgImg}`}/>
                                        <div>
                                            <p>{val.organizationName}</p>
                                            {
                                                val.attribute === null?'':
                                                val.attribute.split(',').map(v => {
                                                    return (<span key={v}>{v}</span>)
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div>
                                        <span>{val.createDate?val.createDate.split('T')[0] : 'null'}</span>
                                    </div>
                                    <div>
                                        <span>{val.applicantName}</span>
                                    </div>
                                    <div>
                                        <a>套餐详情</a>
                                    </div>
                                    <div>
                                        {
                                            val.status === 1?(
                                                <div>
                                                    <span onClick={()=>{this.updateOrg(val.id,0)}}>激活用户</span>
                                                </div>
                                            ):(
                                                <div>
                                                    <a onClick={()=>{this.delOrg(val.id)}}>删除</a>
                                                    <a onClick={()=>{this.updateOrg(val.id,1)}}>禁用</a>
                                                    <a onClick={()=>{this.showTimeDialog(val.id,val.expireDate,val.isForever)}}>设置有效日期</a>
                                                </div>
                                            )
                                        }
                                        {/*<div>*/}
                                        {/*    <DatePicker*/}
                                        {/*        isDisabled={val.expireDate === null}*/}
                                        {/*        value={val.expireDate === null?new Date():new Date(val.expireDate.split('T')[0])}*/}
                                        {/*        placeholder="选择日期"*/}
                                        {/*        onChange={date=>{*/}
                                        {/*            console.debug('DatePicker1 changed: ', date)*/}
                                        {/*            this.undateOrgInfo(val.id,date,0)*/}
                                        {/*            // this.setState({time: date})*/}
                                        {/*        }}*/}
                                        {/*        disabledDate={time=>time.getTime() < Date.now() - 8.64e7}*/}
                                        {/*    />*/}
                                        {/*    <Checkbox onChange={(val)=>{*/}
                                        {/*        if(val){*/}
                                        {/*            this.undateOrgInfo(val.id,null,1)*/}
                                        {/*        }}*/}
                                        {/*    } checked={val.expireDate === null}>永久</Checkbox>*/}
                                        {/*    /!*<a>套餐详情</a>*!/*/}
                                        {/*    /!*<a>有效期</a>*!/*/}
                                        {/*    /!*<Link to={'/admin/editOrg'}>编辑</Link>*!/*/}
                                        {/*</div>*/}
                                        <a onClick={()=>{this.props.history.push({
                                            pathname:'/admin/editOrg',
                                            query:{data:val}
                                        })}}> </a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <Dialog
                    title=""
                    size="tiny"
                    visible={ this.state.setTimedialog }
                    onCancel={ () => {
                        this.setState({
                            setTimedialog:false,
                            activeOrg:'',
                            activeTime:new Date(),
                            isForever:false
                        })

                    } }
                    lockScroll={ false }
                >
                    <Dialog.Body>
                        <div className={'addOrg'}>
                            <p>设置有效期</p>
                            <span>账号有效期：</span>
                            <br/>
                            <DatePicker
                                isDisabled={this.state.isForever}
                                value={this.state.activeTime}
                                placeholder="选择日期"
                                format='yyyy-MM-dd'
                                onChange={date=>{
                                    console.debug('DatePicker1 changed: ', date)
                                    this.setState({activeTime: date})
                                }}
                                disabledDate={time=>time.getTime() < Date.now() - 8.64e7}
                            />
                            <Checkbox onChange={(val)=>{this.setState({isForever:val})}} checked={this.state.isForever}>永久</Checkbox>
                            <a onClick={()=>{this.undateOrgInfo()}}>设置</a>
                        </div>
                    </Dialog.Body>
                </Dialog>
            </div>
        )
    }
}
