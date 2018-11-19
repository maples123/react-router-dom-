import React, { Component } from 'react';
import Loge from "../loge/loge.jsx";
import NavLeft from "../navleft/navleft.jsx";
import NavTop from "../navtop/navtop.jsx";
import "./index.css";

class Layout extends React.Component{
    render(){
        return (
            <div className="layout">
                <div className="side">
                    <Loge/>
                    <NavLeft/>
                </div>
                <div className="con">
                    <NavTop/>
                    <div className="nav-con">
                        {this.props.children}
                    </div>

                </div>
            </div>
        )
    }
}

export default Layout;