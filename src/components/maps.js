import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 33.468091,
      lng: -111.860569
    },
    zoom: 11
  };

  render() {
    return (
      <div
        style={{
          height: "400px",
          width: "50%",
          float: "right",
          padding: "10px",
          border: "3px solid",
          margin: "50px"
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyBSVdV2a02zGL_5KwNWA6_xy9ZWuUB5-BU"
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            // text={""}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
