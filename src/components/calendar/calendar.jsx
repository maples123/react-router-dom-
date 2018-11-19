import React, { Component } from 'react';
import {option} from "./calendar.js";

class Calendar extends  React.Component{
    componentDidMount(){
        let echarts = this.props.echarts;
        let element = this.refs.calendar;

        let myChart = echarts.init(element);

        myChart.setOption(option);

    }
    render(){
        return (
            <div ref="calendar"></div>
        )
    }
}

export default Calendar;