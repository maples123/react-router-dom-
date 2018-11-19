import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import {navLink} from "./navlink.js";
import "./navleft.css";

class NavLeft extends  React.Component{
    constructor(){
        super();
    }
    render(){
        console.log(this.props)
        return(
            <div className="side-nav">
                <ul>
                    {
                        navLink.map((item,index) => {
                            if(item.exact){
                                return (
                                    <li key={index}>
                                        <NavLink
                                            exact
                                            activeClassName="active"
                                            to={item.to}
                                        >{item.title}</NavLink>
                                    </li>
                                )
                            }else{
                                return (
                                    <li key={index}>
                                        <NavLink
                                            to={item.to}
                                        >{item.title}</NavLink>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default NavLeft;