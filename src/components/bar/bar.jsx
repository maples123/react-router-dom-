import React, { Component } from 'react';
import {option} from "./bar.js";

class Bar extends  React.Component{
    componentDidMount(){
        let echarts = this.props.echarts;
        let element = this.refs.bar;

        let myChart = echarts.init(element);

        myChart.setOption(option);

    }
    render(){
        console.log(this.props);
        return (
            <div ref="bar" className="bar"></div>
        )
    }
}

export default Bar;