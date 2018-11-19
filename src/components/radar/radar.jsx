import React, { Component } from 'react';
import {option} from "./radar.js";

class Radar extends React.Component{

    componentDidMount(){
        let echarts = this.props.echarts;
        let element = this.refs.radar;

        let myChart = echarts.init(element);

        myChart.setOption(option);
    }
    render(){
        return (
            <div ref="radar" className="radar">

            </div>
        )
    }
}

export default Radar;