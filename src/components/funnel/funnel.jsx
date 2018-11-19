import React, { Component } from 'react';
import {option} from "./funnel.js";

class Funnel extends React.Component{

    componentDidMount(){
        let echarts = this.props.echarts;
        let element = this.refs.funnel;

        let myChart = echarts.init(element);

        myChart.setOption(option);
    }
    render(){
        return (
            <div ref="funnel" className="funnel">

            </div>
        )
    }
}

export default Funnel;