import React, { useEffect, useState } from 'react'
import { getPlacesData } from './api'
import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'

const App = () => {
	const [places, setPlaces] = useState([])
	const [coordinates, setCoordinates] = useState({
		lat: 45.4215,
		lng: -75.6972,
	})
	const [bounds, setBounds] = useState(null)

	// useEffect(() => {
	// 	navigator.geolocation.getCurrentPosition(
	// 		({ coords: { latitude, longitude } }) => {
	// 			setCoordinates({ lat: latitude, lng: longitude })
	// 		}
	// 	)
	// }, [])
	useEffect(() => {
		getPlacesData(bounds?.sw, bounds?.ne).then((data) => {
			setPlaces(data)
		})
	}, [coordinates, bounds])
	return (
		<>
			<Header />
			<div className='main'>
				<List places={places} />
				<Map
					setCoordinates={setCoordinates}
					setBounds={setBounds}
					coordinates={coordinates}
					places={places}
				/>
			</div>
		</>
	)
}

export default App
