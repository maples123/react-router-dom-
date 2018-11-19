import React, { Component } from 'react';
import echarts from 'echarts';
import { BrowserRouter as Router, Route ,Switch} from "react-router-dom";
import './App.css';

import Layout from "./components/layout/index.jsx";
import routes from "./router/index.js";

class App extends Component {
    render(){
        return (
            <Router>
                <Switch>
                    <Route
                        path="/"
                        render={() => {
                            return (
                                <Layout>
                                    <Switch>
                                        {
                                            routes.map((item,index) => {
                                                if(item.exact){
                                                    return (
                                                        <Route
                                                            key={index}
                                                            exact
                                                            path={item.path}
                                                            render={()=>{
                                                                return (
                                                                    <item.component
                                                                        echarts={echarts}
                                                                    ></item.component>
                                                                )
                                                            }}
                                                        ></Route>
                                                    )
                                                }
                                                return (
                                                    <Route
                                                        key={index}
                                                        path={item.path}
                                                        render={()=>{
                                                            return (
                                                                <item.component
                                                                    echarts={echarts}
                                                                ></item.component>
                                                            )
                                                        }}
                                                    ></Route>
                                                )
                                            })
                                        }
                                    </Switch>
                                </Layout>
                            )
                        }}
                    >
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default App;
