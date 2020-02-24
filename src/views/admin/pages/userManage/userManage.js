import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './userManage.scss'
import {Dropdown, Checkbox, Pagination, Dialog, DatePicker, Message, Select} from 'element-react'

export default class userManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogVisible:false,
            setTimedialog:false,
            time:new Date(),
            users:[],
            activeUser:null,
            activeTime:new Date(),
            addIsForever:false,
            isForever:false,
            addUserName:'',
            addUserPwd:'',
            phone:'',
            active:0,
            checkList:[],
            allCheck:false,
            search:'',
            searchOrg:'',
            ActiveSearchOrg:'全部机构',
            searchStatus:0,
            ActiveSearchStatus:'已激活',
            org:[],
            OrgOptions: [],
            selectOrg: '',
            currentPage:1,
            pageSize:10,
            total:0
        };
        this.getUser = this.getUser.bind(this)
        this.delUser = this.delUser.bind(this)
        this.limitUser = this.limitUser.bind(this)
        this.showTimeDialog = this.showTimeDialog.bind(this)
        this.setTime = this.setTime.bind(this)
        this.addUser = this.addUser.bind(this)
        this.countDown = this.countDown.bind(this)
        this.handleAllDel = this.handleAllDel.bind(this)
        this.handleAllLimit = this.handleAllLimit.bind(this)
        this.handleAllSetTime = this.handleAllSetTime.bind(this)
        this.handleAllSelect = this.handleAllSelect.bind(this)
        this.handleAllNoLimit = this.handleAllNoLimit.bind(this)
    }
    componentDidMount() {
        this.getOrg()
        this.getUser()
    }
    addUser(){
        if(this.state.phone === ''){Message('请完善信息！');return}
        if(this.state.addUserName === ''){Message('请完善信息！');return}
        if(this.state.addUserPwd === ''){Message('请完善信息！');return}
        React.axios.post('/usr/api/login/register',{
            phone:this.state.phone,
            userName:this.state.addUserName,
            passWord:this.state.addUserPwd,
            roleType:this.state.active,
            expireDates:this.state.addIsForever?'':this.countDown(this.state.time),
            isForever:this.state.addIsForever?1:0,
            organizationId:this.state.selectOrg
        }).then(res => {
            if(res.data.success){
                Message('添加成功！');
                this.setState({
                    dialogVisible:false,
                    addUserName:'',
                    addUserPwd:'',
                    time:new Date(),
                    isForever:false,
                    phone:'',
                    active:0,
                    selectOrg:'',
                    addIsForever:false,
                })
                this.getUser()
            }else{
                Message(res.data.message)
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
    getUser(userName = this.state.search,status = this.state.searchStatus,id = this.state.searchOrg,currentPage = this.state.currentPage){
        React.axios.post('/usr/api/admin/querySysUser',{
            userName:userName,
            status:status,
            organizationId:id,
            currentPage:currentPage,
            pageSize:this.state.pageSize
        }).then(res => {
            if(res.data.success){
                let arr = [];
                res.data.data.map(()=>{arr.push(false)})
                this.setState({
                    users:res.data.data,
                    checkList:arr,
                    total:res.data.total || 0
                })
            }
        })
    }
    getOrg(){
        React.axios.post('/usr/api/admin/organization/queryOrganizationName',{
            userName:'',
            status:'',
            organizationId:''
        }).then(res => {
            this.setState({
                org:res.data.data,
                OrgOptions:res.data.data,
            })
        })
    }
    handleOrgId(v){
        let arr = v.split(',')
        this.setState({
            searchOrg:parseInt(arr[0]),
            ActiveSearchOrg:arr[1],
            currentPage:1,
        },()=>{ this.getUser()})
    }
    handleStatus(v){
        let arr = v.split(',')
        this.setState({
            searchStatus:parseInt(arr[0]),
            ActiveSearchStatus:arr[1],
            currentPage:1,
        },()=>{ this.getUser()})
    }
    handleAllSelect(){
        let arr = [];
        this.state.checkList.map((val,index) => {
            if(val){
                arr.push(this.state.users[index].id)
            }
        })
        return arr.join(',')
    }
    handleAllDel(){
        if(this.handleAllSelect().length === 0){
            Message('请先勾选用户！')
            return
        }
        this.delUser(this.handleAllSelect())
    }
    handleAllLimit(){
        if(this.handleAllSelect().length === 0){
            Message('请先勾选用户！')
            return
        }
        this.limitUser(this.handleAllSelect())
    }
    handleAllNoLimit(){
        if(this.handleAllSelect().length === 0){
            Message('请先勾选用户！')
            return
        }
        this.noLimitUser(this.handleAllSelect())
    }
    handleAllSetTime(){
        if(this.handleAllSelect().length === 0){
            Message('请先勾选用户！')
            return
        }
        this.showTimeDialog(this.handleAllSelect(),new Date())
    }
    delUser(id){
        let ids = id + '';
        React.axios.post('/usr/api/admin/deleteUser',{
            ids:ids,
            idDel:0
        }).then(res => {
            if(res.data.success){
                Message('删除成功！')
                if(ids.split(',').length === (this.state.total % this.state.pageSize)){
                    this.setState({
                        currentPage:this.state.currentPage - 1,
                    },()=>{ this.getUser()})
                }else{
                    this.getUser()
                }
            }
        })
    }
    noLimitUser(id){
        React.axios.post('/usr/api/admin/updateUserStatus',{
            ids:id+'',
            status:0
        }).then(res => {
            if(res.data.success){
                Message('激活成功！')
                this.getUser()
            }
        })
    }
    limitUser(id){
        React.axios.post('/usr/api/admin/updateUserStatus',{
            ids:id+'',
            status:1
        }).then(res => {
            if(res.data.success){
                Message('禁用成功！')
                this.getUser()
            }
        })
    }
    showTimeDialog(id,time){
        if(!time){
            this.setState({
                isForever:1
            })
        }
        this.setState({
            setTimedialog:true,
            activeUser:id,
            activeTime:new Date(time)
        })
    }
    setTime(){
        React.axios.post('/usr/api/admin/updateUserExpireDate',{
            ids:this.state.activeUser+'',
            expireDates:this.state.isForever?'':this.countDown(this.state.activeTime),
            isForever:this.state.isForever?1:0
        }).then(res => {
            if(res.data.success){
                Message('设置成功！');
                this.setState({
                    setTimedialog:false,
                    activeUser:null,
                    activeTime:new Date(),
                    isForever:false
                })
                this.getUser()
            }
        })
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
    render() {
        return (
            <div className={'userManage'}>
                <div className={'u-top'}>
                    <div>
                        <div>
                            <span>用户管理</span>
                            <a onClick={()=>{this.setState({dialogVisible:true})}}>添加用户</a>
                            <a>批量导入</a>
                        </div>
                        <label>
                            <input onChange={(e)=>{this.setState({search:e.target.value})}} placeholder={'请输入账号用户搜索'}/>
                            <a onClick={()=>{this.setState({ currentPage:1},()=>{this.getUser()})}}><i className={'el-icon-search'}> </i></a>
                        </label>
                    </div>
                    <div className={'el-wrap'}>
                        <Dropdown onCommand={this.handleOrgId.bind(this)} menu={(
                            <Dropdown.Menu>
                                <Dropdown.Item command={''+','+'全部机构'}>全部机构</Dropdown.Item>
                                {
                                    this.state.org.map((v,i)=>{
                                        return (<Dropdown.Item key={i} command={v.id+','+v.organizationName}>{v.organizationName}</Dropdown.Item>)
                                    })
                                }
                                {/*<Dropdown.Item command={'1'}>大洋教育机构</Dropdown.Item>*/}
                            </Dropdown.Menu>
                        )}>
                            <span className="el-dropdown-link">{this.state.ActiveSearchOrg}
                                <i className="el-icon-arrow-down el-icon--right"> </i>
                            </span>
                        </Dropdown>
                        <Dropdown  onCommand={this.handleStatus.bind(this)} menu={(
                            <Dropdown.Menu>
                                <Dropdown.Item command={'0,已激活'}>已激活</Dropdown.Item>
                                <Dropdown.Item command={'1,已禁用'}>已禁用</Dropdown.Item>
                                <Dropdown.Item command={'2,已过期'}>已过期</Dropdown.Item>
                            </Dropdown.Menu>
                        )}>
                            <span className="el-dropdown-link">{this.state.ActiveSearchStatus}
                                <i className="el-icon-arrow-down el-icon--right"> </i>
                            </span>
                        </Dropdown>
                    </div>
                </div>
                <div className={'pages'}>
                    <div>
                        <Checkbox checked={this.state.allCheck} onChange={(val)=>{this.handleAllChecked(val)}}>全部</Checkbox>
                        <a onClick={()=>{this.handleAllDel()}}>删除用户</a>
                        <a style={{display:`${this.state.ActiveSearchStatus === '已禁用'?'none':'inline-block'}`}} onClick={()=>{this.handleAllLimit()}}>禁用用户</a>
                        <a style={{display:`${this.state.ActiveSearchStatus === '已禁用'?'inline-block':'none'}`}} onClick={()=>{this.handleAllNoLimit()}}>激活用户</a>
                        <a onClick={()=>{this.handleAllSetTime()}}>设置有效日期</a>
                    </div>
                    <div>
                        <Pagination onCurrentChange={(v)=>{this.setState({currentPage:v},()=>{this.getUser()})}} currentPage={this.state.currentPage} pageSize={this.state.pageSize} layout="prev, pager, next" total={this.state.total} small={true}/>
                    </div>
                </div>
                <div className={'table'}>
                    <div>
                        <div>用户名称</div>
                        <div>报名时间</div>
                        <div>所属机构</div>
                        <div>操作</div>
                    </div>
                    {
                        this.state.users.map((val,index) => {
                            return (
                                <div key={index}>
                                    <div>
                                        <Checkbox onChange={(val)=>{this.handleChecked(val,index)}} checked={this.state.checkList[index]}> </Checkbox>
                                        {/*<img alt='' src={val.headImg}/>*/}
                                        <img alt='' src={require('../../../../assets/images/touxiang.png')}/>
                                        <div>
                                            <p>{val.userName}</p>
                                            <span>{val.phone}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span>{val.createDate.split('T')[0]}</span>
                                    </div>
                                    <div>
                                        <span>{val.organizationName}</span>
                                    </div>
                                    {
                                        this.state.searchStatus === 1?(
                                            <div>
                                                <span onClick={this.noLimitUser.bind(this,val.id)}>激活用户</span>
                                            </div>
                                        ):(
                                            <div>
                                                <div>
                                                    <a onClick={()=>{this.delUser(val.id)}}>删除</a>
                                                    <a onClick={()=>{this.limitUser(val.id)}}>禁用</a>
                                                    <a onClick={()=>{this.showTimeDialog(val.id,val.expireDate)}}>设置有效日期</a>
                                                </div>
                                                <Link to={{pathname:'/admin/roleManage',query:{val}}}> </Link>
                                            </div>
                                        )
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
                    onCancel={ () =>  this.setState({
                        dialogVisible:false,
                        addUserName:'',
                        addUserPwd:'',
                        time:new Date(),
                        isForever:false,
                        phone:'',
                        active:0,
                        selectOrg:'',
                        addIsForever:false,
                    }) }
                    lockScroll={ false }
                >
                    <Dialog.Body>
                        <div className={'addUser'}>
                            <p>添加新用户</p>
                            <span>手机号：</span>
                            <input value={this.state.phone} onChange={(e)=>{this.setState({phone:e.target.value})}}/>
                            <span>用户姓名：</span>
                            <input value={this.state.addUserName} onChange={(e)=>{this.setState({addUserName:e.target.value})}}/>
                            <span>密码：</span>
                            <input value={this.state.addUserPwd} onChange={(e)=>{this.setState({addUserPwd:e.target.value})}}/>
                            <span>教育机构：</span><br/>
                            <Select onChange={(v)=>{this.setState({selectOrg:v})}} value={this.state.selectOrg}  placeholder={'选择教育机构'}>
                                {
                                    this.state.OrgOptions.map(el => {
                                        return <Select.Option key={el.id} label={el.organizationName} value={el.id} />
                                    })
                                }
                            </Select>
                            <span>角色权限：</span>
                            <div>
                                <a onClick={()=>{this.setState({active:2})}} className={`${this.state.active === 2?'active':''}`}>学生用户</a>
                                <a onClick={()=>{this.setState({active:1})}} className={`${this.state.active === 1?'active':''}`}>老师用户</a>
                                <a onClick={()=>{this.setState({active:0})}} className={`${this.state.active === 0?'active':''}`}>管理员用户</a>
                            </div>
                            <span>账号有效期：</span><br/>
                            <DatePicker
                                isDisabled={this.state.addIsForever}
                                style={{display:`${this.state.addIsForever?'':'none'}`}}
                                value={this.state.time}
                                placeholder="选择日期"
                                onChange={date=>{
                                    console.debug('DatePicker1 changed: ', date)
                                    this.setState({time: date})
                                }}
                                disabledDate={time=>time.getTime() < Date.now() - 8.64e7}
                            />
                            <Checkbox onChange={(val)=>{this.setState({addIsForever:val})}} checked={this.state.addIsForever}>永久</Checkbox>
                            <a onClick={()=>{this.addUser()}}>确定添加</a>
                        </div>
                    </Dialog.Body>
                </Dialog>
                <Dialog
                    title=""
                    size="tiny"
                    visible={ this.state.setTimedialog }
                    onCancel={ () => {
                        this.setState({
                            setTimedialog:false,
                            activeUser:'',
                            activeTime:new Date(),
                            isForever:0
                        })

                    } }
                    lockScroll={ false }
                >
                    <Dialog.Body>
                        <div className={'addUser'}>
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
                            <a onClick={()=>{this.setTime()}}>设置</a>
                        </div>
                    </Dialog.Body>
                </Dialog>
            </div>
        )
    }
}
