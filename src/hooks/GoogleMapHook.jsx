import { useEffect, useState } from 'react'
import {useJsApiLoader } from '@react-google-maps/api';
import Geocode from "react-geocode";

function GoogleMapHook() {
	const [address, setAddress] = useState(null)
	const [addrLngLat, setAddrLngLat] = useState(null)

	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: "AIzaSyAZ48dhgFoe8x0P7ennZ3q2J1NPwXWGra0"
	})

    Geocode.setApiKey("AIzaSyAZ48dhgFoe8x0P7ennZ3q2J1NPwXWGra0")

	useEffect(() => {
		Geocode.fromAddress(address).then(
			(response) => {
			  const { lat, lng } = response.results[0].geometry.location;
			  setAddrLngLat({lat: lat,lng: lng})
			},
			(error) => {
			  console.error(error);
			}
		);
	}, [address])
	


	return {
		isLoaded,
		address,
		addrLngLat,
		setAddress
	}
}

export default GoogleMapHook
