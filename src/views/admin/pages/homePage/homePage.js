import React, {Component} from 'react';
import './homePage.scss'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import '../../../../utils/china'


export default class homePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            option1:{
                textStyle:{
                    fontSize:20
                },
                xAxis: {
                    type: 'category',
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#4a4a4a',  //更改坐标轴文字颜色
                            fontSize : 18      //更改坐标轴文字大小
                        }
                    },
                    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                },
                yAxis: {
                    type: 'value',
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#4a4a4a',  //更改坐标轴文字颜色
                            fontSize : 16      //更改坐标轴文字大小
                        }
                    },
                },

                series: [{
                    data: [100, 130, 200, 300, 400, 368, 320,400,460,490,500,420],
                    type: 'line',
                    smooth: true,
                    symbol:'none',
                    lineStyle: {
                        normal: {
                            width: 3,
                            shadowColor: 'rgba(72,119,230,0.9)',
                            shadowBlur:10,
                            shadowOffsetY: 14
                        }
                    },
                    color:'rgba(72,119,230,0.9)',
                }]
            },
            option2:{
                series: [
                    {
                        name:'考试通过率',
                        type:'pie',
                        radius: ['56%', '60%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center',
                                formatter:"{d}%\n\n{a}",
                                textStyle: {
                                    fontSize: '18',
                                    fontWeight: '500',
                                    color:'#4a4a4a'
                                },
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '18',
                                    fontWeight: '500',
                                    color:'#4a4a4a'
                                },
                                formatter:"{d}%\n\n{a}"
                            }
                        },
                        data:[
                            {value:600, name:'通过考试'},
                            {value:100, name:'未通过考试'},
                        ],
                        color:['rgba(72,119,230,0.9)','#FF6E23']
                    }
                ]
            },
            option3:{
                grid: {
                    top:'5%',
                    bottom:'2%',
                    left:'8%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01],
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    show:false,
                },
                yAxis: {
                    type: 'category',
                    data: ['电商','会计','市场','商英','商英','商英','商英','商英'],
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#4a4a4a',  //更改坐标轴文字颜色
                            fontSize : 16      //更改坐标轴文字大小
                        }
                    },
                },
                series: [
                    {
                        name: '2011年',
                        type: 'bar',
                        data: [2000,3000, 5000, 6000,7000, 8000, 10000, 11000],
                        barCategoryGap:100,
                        barWidth:'40%',
                        itemStyle : {
                            normal : {
                                label: {
                                    show: true,
                                    position:'right',
                                    textStyle: {
                                        color: 'black'
                                    }
                                },
                                color: function(params) {
                                    var colorList = [
                                        'rgba(72,119,230,0.9)',
                                        'rgba(72,119,230,0.9)',
                                        'rgba(72,119,230,0.9)',
                                        'rgba(72,119,230,0.9)',
                                        'rgba(72,119,230,0.9)',
                                        '#f2ab2b',
                                        '#FF6E23',
                                    ];
                                    return colorList[params.dataIndex]
                                }
                            },
                        },
                    },
                ],
            },
            option4:{
                geo: {
                    map: 'china',
                    zoom:1.1,
                    nameMap:{
                        'China' : '中国'
                    },
                    label: {
                        emphasis: {
                            show: false
                        }
                    },
                    regions: [      //对不同的区块进行着色
                        {
                            name: '广东', //区块名称
                            itemStyle: {
                                normal: {
                                    areaColor: 'rgba(72,119,230,1)'
                                }
                            }
                        },
                        {
                            name: '江西', //区块名称
                            itemStyle: {
                                normal: {
                                    areaColor: 'rgba(72,119,230,0.9)'
                                }
                            }
                        },
                        {
                            name: '湖南', //区块名称
                            itemStyle: {
                                normal: {
                                    areaColor: 'rgba(72,119,230,0.6)'
                                }
                            }
                        },
                        ],
                    itemStyle: {
                        borderColor:'white',
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: 'rgba(204,204,204,0.81)' // 0% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(204,204,204,0.81)' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        },
                    },
                },
            }
        };
    }
    componentDidMount() {
        const echarts1 = echarts.init(this.refs.echarts1);
        echarts1.setOption(this.state.option1);
        const echarts2 = echarts.init(this.refs.echarts2);
        echarts2.setOption(this.state.option2);
        echarts2.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: 0
        });
        const echarts3 = echarts.init(this.refs.echarts3);
        echarts3.setOption(this.state.option3);
        const echarts4 = echarts.init(this.refs.echarts4);
        echarts4.setOption(this.state.option4);
    }

    render() {
        return (
            <div className={'admin_homePage'}>
                <div>
                    <div>
                        <p>用户总数<br/><span>12345</span>人</p>
                        <img src={require('../../../../assets/images/i_logo1.png')}/>
                    </div>
                    <div>
                        <p>已举办考试场数<br/><span>150</span>场</p>
                        <img src={require('../../../../assets/images/i_logo2.png')}/>
                    </div>
                    <div>
                        <p>已发证书<br/><span>12345</span>位</p>
                        <img src={require('../../../../assets/images/i_logo3.png')}/>
                    </div>
                    <div>
                        <p>考试类型<br/><span>12</span>种</p>
                        <img src={require('../../../../assets/images/i_logo4.png')}/>
                    </div>
                </div>
                <div>
                    <div>
                        <p>近一年增加的人数及通过率</p>
                        <div>
                            <div className={'ert1'} ref={'echarts1'}></div>
                            <div>
                                <div className={'ert2'} ref={'echarts2'}></div>
                                <div className={'legend'}>
                                    <p><span className={'s1'}>通过考试</span>600人</p>
                                    <p><span className={'s2'}>未通过考试</span>100人</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>各专业就业人数</p>
                        <div ref={'echarts3'}></div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <p>考证信息</p>
                            <label>
                                <a>广州</a>
                                <a>武汉</a>
                                <a>揭阳</a>
                            </label>
                            <a>考证管理</a>
                        </div>
                        <div>
                            <label>
                                <p>跨境电子商务师（三级）考证</p>
                                <span>2019-10-19</span>
                                <span>广东广州</span>
                                <span>已报1111人</span>
                            </label>
                            <label>
                                <p>跨境电子商务师（三级）考证</p>
                                <span>2019-10-19</span>
                                <span>广东广州</span>
                                <span>已报1111人</span>
                            </label>
                            <label>
                                <p>跨境电子商务师（三级）考证</p>
                                <span>2019-10-19</span>
                                <span>广东广州</span>
                                <span>已报1111人</span>
                            </label>
                            <label>
                                <p>跨境电子商务师（三级）考证</p>
                                <span>2019-10-19</span>
                                <span>广东广州</span>
                                <span>已报1111人</span>
                            </label>
                            <label>
                                <p>跨境电子商务师（三级）考证</p>
                                <span>2019-10-19</span>
                                <span>广东广州</span>
                                <span>已报1111人</span>
                            </label>
                            <label>
                                <p>跨境电子商务师（三级）考证</p>
                                <span>2019-10-19</span>
                                <span>广东广州</span>
                                <span>已报1111人</span>
                            </label>
                        </div>
                    </div>
                    <div>
                        <p>考场分布统计</p>
                        <div>
                            <div ref={'echarts4'}>

                            </div>
                            <div>
                                <label>考场分布地区</label>
                                <p className={'active'}><span>广东省</span><span>共222222位</span></p>
                                <p><span>广东省</span><span>共222222位</span></p>
                                <p><span>广东省</span><span>共222222位</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


