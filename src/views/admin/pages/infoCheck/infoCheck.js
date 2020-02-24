import React, {Component} from 'react';
import {connect} from "react-redux";
import {Dropdown, Tabs, Message} from 'element-react'
import './infoCheck.scss'

class infoCheck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typeList:[],
            search:'',
            searchType:'',
            status:'',
            listData:[],
            ActiveSearchStatus:'全部考试'
        };
        this.tabClick = this.tabClick.bind(this)
        this.getData = this.getData.bind(this)
        this.countDown = this.countDown.bind(this)
    }
    handleStatus(v){
        let arr = v.split(',')
        this.setState({
            status:parseInt(arr[0]),
            ActiveSearchStatus:arr[1],
            currentPage:1,
        },()=>{ this.getData()})
    }
    tabClick(v){
        if(v.props.name === '2'){
            this.props.history.push({pathname:'/admin/certificateCheck'})
        }
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
    componentDidMount() {
        React.axios.post('/usr/api/admin/certificateInfo/queryCertificateInfoName',{
            createUser:this.props.userInfo.id
        }).then(res => {
            this.setState({
                typeList:res.data.data
            })
        })
        this.getData();
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
        }).then(res => {
            if(res.data.messageCode === '1000'){
                this.setState({
                    listData:res.data.data,
                })
            }
        })
    }
    updata(id,type){
        React.axios.post('/usr/api/admin/examInfo/updateStatus',{
            id:id,
            status:type === 1?1:2
        }).then(res => {
            if(res.data.messageCode === '1000'){
                Message('操作成功！')
                this.getData()
            }
        })
    }
    render() {
        return (
            <div className={'admin_infoCheck'}>
                <div>
                    <div>
                        <p>考试审核</p>
                        <label>
                            <div className={'el-wrap'}>
                                <Dropdown  onCommand={this.handleStatus.bind(this)} menu={(
                                    <Dropdown.Menu>
                                        <Dropdown.Item command={'  ,全部考试'}>全部考试</Dropdown.Item>
                                        <Dropdown.Item command={' 3,待审核'}>待审核</Dropdown.Item>
                                        <Dropdown.Item command={'1,已发布'}>已发布</Dropdown.Item>
                                        <Dropdown.Item command={'2,已拒绝'}>已拒绝</Dropdown.Item>
                                        {/*<Dropdown.Item command={'2,已过期'}>已过期</Dropdown.Item>*/}
                                    </Dropdown.Menu>
                                )}>
                            <span className="el-dropdown-link">{this.state.ActiveSearchStatus}
                                <i className="el-icon-arrow-down el-icon--right"> </i>
                            </span>
                                </Dropdown>
                            </div>
                            <input onChange={(e)=>{this.setState({search:e.target.value})}}  placeholder={'请输入账号用户搜索'}/>
                            <a onClick={()=>{this.getData()}}><i className={'el-icon-search'}> </i></a>
                        </label>
                    </div>
                    <div>
                        <Tabs type="card" value="1" onTabClick={(tab)=>{this.tabClick(tab)}}>
                            <Tabs.Pane label="考试信息审核" name="1">
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
                            </Tabs.Pane>
                            <Tabs.Pane label="证书发布审核" name="2"></Tabs.Pane>
                        </Tabs>
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
                                        ((v)=>{
                                            switch (v.status){
                                                case 3:
                                                    return (
                                                        <label>
                                                            <a onClick={this.updata.bind(this,v.id,2)} className={'gray'}>拒绝</a>
                                                            <a onClick={this.updata.bind(this,v.id,1)} className={'gray'}>审核通过</a>
                                                        </label>
                                                    )
                                                case 2:
                                                    return (
                                                        <label>
                                                            <a className={'red'}>已延迟</a>
                                                        </label>
                                                    )
                                                case 1:
                                                    return (
                                                        <label>
                                                            <a className={'green'}>已发布</a>
                                                        </label>
                                                    )
                                            }
                                        })(v)
                                    }
                                </div>
                            )
                        })
                    }
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
)(infoCheck)
