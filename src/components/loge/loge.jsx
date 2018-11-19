import React, { Component } from 'react';

class Loge extends React.Component{
    render(){
        return (
            <div className="loge">
                <img src={require("./logo.png")} alt=""/>
            </div>
        )
    }
}

export default Loge;