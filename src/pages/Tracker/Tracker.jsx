import React, {useState} from 'react'
import { GoogleMap, Marker,useJsApiLoader } from '@react-google-maps/api';
import Geocode from "react-geocode";

const containerStyle = {
  width: '100vw',
  height: '100vh'
};

const center = {
  lat: 50.9354262,
  lng: -1.3951256
};

function Tracker({isLoaded, lngLat}) {
  
  
    const [map, setMap] = useState(null)
  
    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

  return isLoaded && lngLat ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
        defaultOptions={{fullscreenControl: false}}
      >
        {<Marker position={{lat: lngLat.lat, lng: lngLat.lng}} />}
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(Tracker)
