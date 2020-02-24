import React, {Component} from 'react';
import {connect} from "react-redux";
import {Rate} from 'element-react'
import './type.scss'

class type extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search:"",
            listData:[]
        };
        this.getData = this.getData.bind(this)
    }
    componentDidMount() {
        this.getData()
    }

    getData(certificateName = this.state.search){
        React.axios.post('/usr/api/admin/certificateInfo/queryCertificateInfo',{
            createUser:this.props.userInfo.id,
            certificateName:certificateName,
        }).then(res => {
            if(res.data.messageCode === '1000'){
                this.setState({
                    listData:res.data.data
                })
            }
        })
    }
    render() {
        return (
            <div className={'admin_type'}>
                <div>
                    <div>
                        <p>考证类型</p>
                        <label>
                            <input onChange={(e)=>{this.setState({search:e.target.value})}} placeholder={'请输入账号用户搜索'}/>
                            <a onClick={()=>{this.getData()}}><i className={'el-icon-search'}> </i></a>
                        </label>
                        <a>添加考证</a>
                    </div>
                    <div className={'type-top'}>
                        <label>
                            {/*<span>排序：</span>*/}
                            {/*<a>最新发布</a>*/}
                            {/*<a>最多报名</a>*/}
                            {/*<a>难度最低</a>*/}
                        </label>
                        <div>
                            <img src={require('../../../../assets/images/typelogo.png')}/>
                            <label>累计帮<span>11234</span>人提升了技能 | sunshine报名了<span>《跨境电商》</span>考试</label>
                        </div>
                    </div>
                </div>
                <div>
                    {
                        this.state.listData.map((val,index) => {
                            return (
                                <div key={index}>
                                    {/*<img src={require('../../../../assets/images/qt1.png')}/>*/}
                                    <img src={val.certificateImg}/>
                                    <p>{val.certificateName}</p>
                                    {/*<label>*/}
                                        {/*<span>11月26日考</span>*/}
                                        {/*<span>12345人已报名</span></label>*/}
                                    <label>推荐程序<Rate value={5} disabled={true}/></label>
                                    {/*<span>3天后考</span>*/}
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
)(type)
