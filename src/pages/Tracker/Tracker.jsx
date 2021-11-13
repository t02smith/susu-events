import React, {useEffect, useState} from 'react'
import { GoogleMap, Marker,useJsApiLoader } from '@react-google-maps/api';
import Geocode from "react-geocode";

const containerStyle = {
  width: '100vw',
  height: '100vh'
};

function Tracker({match}) {
    const [address, setAddress] = useState(match.params.location)
    const [lngLat, setLngLat] = useState(null)

    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyAZ48dhgFoe8x0P7ennZ3q2J1NPwXWGra0"
    })

      Geocode.setApiKey("AIzaSyAZ48dhgFoe8x0P7ennZ3q2J1NPwXWGra0")

    useEffect(() => {
      Geocode.fromAddress(address).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          setLngLat({lat: lat,lng: lng})
        },
        (error) => {
          console.error(error);
        }
      );
    }, [address])

    useEffect(() => {
      console.log(match.params.location)
    }, [])
    

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
        center={{lat: lngLat.lat, lng: lngLat.lng}}
        zoom={18}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{fullscreenControl: false, streetViewControl: false}}
      >
        {<Marker position={{lat: lngLat.lat, lng: lngLat.lng}} />}
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(Tracker)
