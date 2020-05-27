import React, { useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react'

const LocationMap = () => {
  const [mapsApi, setMapsApi] = useState({ map: null, maps: null })
  const [currentCoordinates, setCurrentCoordinates] = useState({
    lat: 0,
    lng: 0
  })

  useEffect(() => {
    if (mapsApi && mapsApi.maps) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const geoCoder = new mapsApi.maps.Geocoder()
          geoCoder.geocode(
            {
              location: {
                lat: parseFloat(position.coords.latitude),
                lng: parseFloat(position.coords.longitude)
              }
            },
            (results, status) => {
              displayCurrentLocation(results, status, position)
            }
          )
        })
      } else {
        console.log('geolocation not supported')
      }
    }
  }, [mapsApi])

  const displayCurrentLocation = (results, status, position) => {
    const { latitude, longitude } = position.coords
    if (status === 'OK') {
      if (results[0]) {
        setCurrentCoordinates({
          lat: latitude,
          lng: longitude
        })
        const infoWindow = new mapsApi.maps.InfoWindow()
        const marker = new mapsApi.maps.Marker({
          position: {
            lat: latitude,
            lng: longitude
          },
          map: mapsApi.map,
          visible: true
        })
        infoWindow.setContent(results[0].formatted_address)
        infoWindow.open(mapsApi.map, marker)
      } else {
        console.log('No results found')
      }
    } else {
      console.log('Geocoder failed due to: ' + status)
    }
  }

  return (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: process.env.REACT_APP_GOOGLE_MAP_KEY
      }}
      yesIWantToUseGoogleMapApiInternals
      center={currentCoordinates}
      zoom={5}
      onGoogleApiLoaded={({ map, maps }) =>
        setMapsApi({ map: map, maps: maps })}
    />
  )
}

export default LocationMap
