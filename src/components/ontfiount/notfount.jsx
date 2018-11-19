import React, { Component } from 'react';
import "./notfount.css";

class Notfount extends React.Component{
    render(){
        return (
            <div className="not">
                <img src={require("./404.png")} alt=""/>
            </div>
        )
    }
}

export default Notfount;