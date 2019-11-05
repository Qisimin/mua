import React from 'react'
import ReactEcharts from 'echarts-for-react';
import {Card} from 'antd'
import Style from './favbook.module.less'
class Login extends React.Component{
    constructor(){
        super()
        this.state={
            option : {
                title: {
                    // text: '用户最喜欢书籍（单位:元）',
                },
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    },
                    formatter: function (params) {
                        var tar = params[1];
                        return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
                    }
                },
                grid: {
                    // left: '3%',
                    // right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type : 'category',
                    splitLine: {show:false},
                    data : ['总数量','三体','方与圆','狼道','墨菲定律','鬼谷子']
                },
                yAxis: {
                    type : 'value'
                },
                series: [
                    {
                        name: '辅助',
                        type: 'bar',
                        stack:  '总量',
                        itemStyle: {
                            normal: {
                                barBorderColor: 'rgba(0,0,0,0)',
                                color: 'rgba(0,0,0,0)'
                            },
                            emphasis: {
                                barBorderColor: 'rgba(0,0,0,0)',
                                color: 'rgba(0,0,0,0)'
                            }
                        },
                        data: [0, 1700, 1400, 1200, 300, 0]
                    },
                    {
                        name: '生活费',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'inside'
                            }
                        },
                        data:[2900, 1200, 300, 200, 900, 300]
                    }
                ]
            }
        }
    }
    render(){
        return(
           <div className={Style.container}>
                <Card className={Style.con}>
                    <ReactEcharts option={this.state.option} />
                </Card>
           </div>
        )
    }
}
export default Login
