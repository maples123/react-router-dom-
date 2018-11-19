import React, { Component } from 'react';
import {option} from "./gauge.js";

class Gauge extends React.Component{

    componentDidMount(){
        let echarts = this.props.echarts;
        let element = this.refs.gauge;

        let myChart = echarts.init(element);

        setInterval(function (){
            option.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
            option.series[1].data[0].value = (Math.random()*7).toFixed(2) - 0;
            option.series[2].data[0].value = (Math.random()*2).toFixed(2) - 0;
            option.series[3].data[0].value = (Math.random()*2).toFixed(2) - 0;
            myChart.setOption(option);
        },2000)

        myChart.setOption(option);
    }
    render(){
        return (
            <div ref="gauge">

            </div>
        )
    }
}

export default Gauge;