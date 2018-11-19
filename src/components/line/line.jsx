import React, { Component } from 'react';
import {option} from "./line.js";

class Line extends React.Component{
    componentDidMount(){
        let echarts = this.props.echarts;
        let element = this.refs.line;

        let myChart = echarts.init(element);

        myChart.setOption(option);

    }
    render(){

        return (
            <div ref="line" className="line">

            </div>
        )
    }
}

export default Line;