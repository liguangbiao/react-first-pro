import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './paperManage.scss'
import {Checkbox, Message, Pagination} from "element-react";

export default class paperManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            state:'',
            org:[],
            currentPage:1,
            pageSize:10,
            total:0,
            time:'',
            allCheck:false,
            checkList:[]
        };
        this.getOrg = this.getOrg.bind(this)
    }
    componentDidMount() {
        this.getOrg()
    }
    getOrg(){
        React.axios.post('/usr/api/admin/organization/queryOrganization',{
            userName:'',
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
        React.axios.post('/usr/api/admin/organization/deleteOrganization',{
            ids:id+'',
        }).then(res => {
            if(res.data.success){
                Message('删除成功！')
                this.getOrg()
            }
        })
    }
    handleDel(){
        this.delOrg(this.handleAllSelect())
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
    render() {
        return (
            <div className={'t_paperManage'}>
                <div className={'u-top'}>
                    <div>
                        <div>
                            <span>试卷管理</span>
                        </div>
                        <div>
                            <Link to={''}>新增手动试卷</Link>
                            <Link to={''}>新增随机试卷</Link>
                        </div>
                    </div>
                    <div className={'el-wrap'}>
                        <label>
                            <input placeholder={'请输入账号用户搜索'}/>
                            <a><i className={'el-icon-search'}> </i></a>
                        </label>
                     </div>
                </div>
                <div className={'pages'}>
                    <div>
                        <Checkbox checked={this.state.allCheck} onChange={(val)=>{this.handleAllChecked(val)}}>全部</Checkbox>
                        <a onClick={this.handleDel.bind(this)}>发布</a>
                        <a onClick={this.handleDel.bind(this)}>删除</a>
                    </div>
                    <div>
                        <Pagination onCurrentChange={(v)=>{this.setState({currentPage:v},()=>{this.getOrg()})}} currentPage={this.state.currentPage} pageSize={this.state.pageSize} layout="prev, pager, next" total={this.state.total} small={true}/>
                    </div>
                </div>
                <div className={'table'}>
                    <div>
                        <div>考试名称</div>
                        <div>编辑时间</div>
                        <div>引用题库</div>
                        <div>试卷总分</div>
                        <div>操作</div>
                    </div>
                    {
                        this.state.org.map((val,index)=>{
                            return (
                                <div key={index}>
                                    <div>
                                        <Checkbox onChange={(val)=>{this.handleChecked(val,index)}} checked={this.state.checkList[index]}> </Checkbox>
                                        <img alt='' src={require('../../../../assets/images/qt1.png')}/>
                                        <div>
                                            <p>{val.organizationName}</p>
                                            <span>使用中</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span>{val.createDate?val.createDate.split('T')[0] : 'null'}</span>
                                    </div>
                                    <div>
                                        <span>大洋教育机构</span>
                                    </div>
                                    <div>
                                        <span>100</span>
                                    </div>
                                    <div>
                                        <a>题目管理</a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
