import React, { Component } from 'react';
import { Map,Marker,Circle  } from 'react-amap';

class Amap extends React.Component{
    constructor(){
        super();
        this.mapPlugins = ['ToolBar'];
        this.mapCenter = {longitude: 113.536335, latitude: 24.414023};
        this.markerPosition = {longitude: 113.536335, latitude: 24.414023};
        this.state = {
            center: {longitude: 113.536335, latitude: 24.414023},
            radius: 200,
            visible: true,
            style: {strokeOpacity:0,fillColor:"rgba(255,0,0,.2)"},
            draggable: true,
        };
    }

    render(){
        return (
            <div ref="map">
                <Map
                    amapkey={'788e08def03f95c670944fe2c78fa76f'}
                    plugins={this.mapPlugins}
                    center={this.mapCenter}
                    zoom={14}
                >
                    <Marker position={this.markerPosition} />
                    <Circle
                        center={ this.state.center }
                        radius={ this.state.radius }
                        visible={ this.state.visible }
                        style={ this.state.style }
                        draggable={ this.state.draggable }
                    />
                </Map>
            </div>
        )
    }
}

export default Amap;