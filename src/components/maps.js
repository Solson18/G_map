import React, { PropTypes } from "react";

import GoogleMap from "react-google-map";
import GoogleMapLoader from "react-google-maps-loader";

// import iconMarker from "./assets/iconMarker.svg"
// import iconMarkerHover from "./assets/iconMarkerHover.svg"

// import styles from "./index.css"

const MY_API_KEY = "AIzaSyBSVdV2a02zGL_5KwNWA6_xy9ZWuUB5-BU"; // fake

const Map = ({ googleMaps }) => (
  // GoogleMap component has a 100% height style.
  // You have to set the DOM parent height.
  // So you can perfectly handle responsive with differents heights.
  <div className={styles.map}>
    <GoogleMap
      googleMaps={googleMaps}
      // You can add and remove coordinates on the fly.
      // The map will rerender new markers and remove the old ones.
      coordinates={[
        {
          title: "Toulouse",
          position: {
            lat: 43.604363,
            lng: 1.443363
          },
          onLoaded: (googleMaps, map, marker) => {
            // Set Marker animation
            marker.setAnimation(googleMaps.Animation.BOUNCE);

            // Define Marker InfoWindow
            const infoWindow = new googleMaps.InfoWindow({
              content: `
                <div>
                  <h3>Toulouse<h3>
                  <div>
                    Toulouse is the capital city of the southwestern
                    French department of Haute-Garonne,
                    as well as of the Occitanie region.
                  </div>
                </div>
              `
            });

            // Open InfoWindow when Marker will be clicked
            googleMaps.event.addListener(marker, "click", () => {
              infoWindow.open(map, marker);
            });

            // Change icon when Marker will be hovered
            googleMaps.event.addListener(marker, "mouseover", () => {
              marker.setIcon(iconMarkerHover);
            });

            googleMaps.event.addListener(marker, "mouseout", () => {
              marker.setIcon(iconMarker);
            });

            // Open InfoWindow directly
            infoWindow.open(map, marker);
          }
        }
      ]}
      center={{ lat: 43.604363, lng: 1.443363 }}
      zoom={8}
      onLoaded={(googleMaps, map) => {
        map.setMapTypeId(googleMaps.MapTypeId.SATELLITE);
      }}
    />
  </div>
);

Map.propTypes = {
  googleMaps: PropTypes.object.isRequired
};

export default GoogleMapLoader(Map, {
  libraries: ["places"],
  key: MY_API_KEY
});

// import React from "react";
// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker
// } from "react-google-maps";
// import { Component } from "react";
// import GoogleMapReact from "google-map-react";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// class SimpleMap extends Component {
//   static defaultProps = {
//     center: {
//       lat: 33.468091,
//       lng: -111.860569
//     },
//     zoom: 11,
//   };

//   render() {
//     return (
//       <div
//         style={{
//           height: "400px",
//           width: "50%",
//           float: "right",
//           padding: "10px",
//           border: "3px solid",
//           margin: "50px"
//         }}
//       >

//         <GoogleMapReact
//           Keys={{
//             key:
//               "AIzaSyBSVdV2a02zGL_5KwNWA6_xy9ZWuUB5-BU&callback=initMap"
//           }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           <AnyReactComponent
//             lat={59.955413}
//             lng={30.337844}
//              text={""}

//           />
//         </GoogleMapReact>

//       </div>

//     );
//   }
//  }

//  export default SimpleMap;

// const _ = require("lodash");
// const { compose, withProps, lifecycle } = require("recompose");
// const {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker,
// } = require("react-google-maps");
// const { SearchBox } = require("react-google-maps/lib/components/places/SearchBox");

// const MapWithASearchBox = compose(
//   withProps({
//     googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBSVdV2a02zGL_5KwNWA6_xy9ZWuUB5-BU&v=3.exp&libraries=geometry,drawing,places",
//     loadingElement: <div style={{ height: `100%` }} />,
//     containerElement: <div style={{ height: `400px` }} />,
//     mapElement: <div style={{ height: `100%` }} />,
//   }),
//   lifecycle({
//     componentWillMount() {
//       const refs = {}

//       this.setState({
//         bounds: null,
//         center: {
//           lat: 41.9, lng: -87.624
//         },
//         markers: [],
//         onMapMounted: ref => {
//           refs.map = ref;
//         },
//         onBoundsChanged: () => {
//           this.setState({
//             bounds: refs.map.getBounds(),
//             center: refs.map.getCenter(),
//           })
//         },
//         onSearchBoxMounted: ref => {
//           refs.searchBox = ref;
//         },
//         onPlacesChanged: () => {
//           const places = refs.searchBox.getPlaces();
//           const bounds = new google.maps.LatLngBounds();

//           places.forEach(place => {
//             if (place.geometry.viewport) {
//               bounds.union(place.geometry.viewport)
//             } else {
//               bounds.extend(place.geometry.location)
//             }
//           });
//           const nextMarkers = places.map(place => ({
//             position: place.geometry.location,
//           }));
//           const nextCenter = _.get(nextMarkers, '0.position', this.state.center);

//           this.setState({
//             center: nextCenter,
//             markers: nextMarkers,
//           });
//           // refs.map.fitBounds(bounds);
//         },
//       })
//     },
//   }),
//   withScriptjs,
//   withGoogleMap
// )(props =>
//   <GoogleMap
//     ref={props.onMapMounted}
//     defaultZoom={15}
//     center={props.center}
//     onBoundsChanged={props.onBoundsChanged}
//   >
//     <SearchBox
//       ref={props.onSearchBoxMounted}
//       bounds={props.bounds}
//       controlPosition={google.maps.ControlPosition.TOP_LEFT}
//       onPlacesChanged={props.onPlacesChanged}
//     >
//       <input
//         type="text"
//         placeholder="Customized your placeholder"
//         style={{
//           boxSizing: `border-box`,
//           border: `1px solid transparent`,
//           width: `240px`,
//           height: `32px`,
//           marginTop: `27px`,
//           padding: `0 12px`,
//           borderRadius: `3px`,
//           boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
//           fontSize: `14px`,
//           outline: `none`,
//           textOverflow: `ellipses`,
//         }}
//       />
//     </SearchBox>
//     {props.markers.map((marker, index) =>
//       <Marker key={index} position={marker.position} />
//     )}
//   </GoogleMap>
// );

// <MapWithASearchBox />
