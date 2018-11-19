import React, { Component } from 'react';
import {option} from "./sunburst.js";

class Sunburst extends  React.Component{
    componentDidMount(){
        let echarts = this.props.echarts;
        let element = this.refs.sunburst;

        let myChart = echarts.init(element);

        myChart.setOption(option);

    }
    render(){
        return (
            <div ref="sunburst" className="sunburst"></div>
        )
    }
}

export default Sunburst;