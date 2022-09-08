import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './Mapa.css';

const AnyReactComponent = ({text}) => <div>{text}</div>;

export class Mapa extends Component {

  static defaultProps = {
    posicion:{
      lat: 41.6369216,
      lng: -0.8996619
    },
    zoom: 14
  }

  render() {
    return (
      <div className='mapa'>
        <GoogleMapReact
            bootstrapURLKeys={{key: ''}}
            defaultCenter={this.props.posicion}
            defaultZoom={this.props.zoom}>

            <AnyReactComponent
              lat= {41.6369216}
              lng= {-0.8996619}
              text= "Hiberus" />

        </GoogleMapReact>
      </div>
    )
  }
}

export default Mapa