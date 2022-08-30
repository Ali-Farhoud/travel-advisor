import React from 'react'
import GoogleMapReact from 'google-map-react'
import './map.css'
import LocationOnIcon from '@mui/icons-material/LocationOn'

const Map = ({ setCoordinates, setBounds, coordinates, places }) => {
	return (
		<div className='map'>
			<GoogleMapReact
				bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_KEY }}
				defaultCenter={{ lat: 45.4215, lng: -75.695 }}
				center={coordinates}
				defaultZoom={14}
				margin={[50, 50, 50, 50]}
				onChange={(e) => {
					setCoordinates({ lat: e.center.lat, lng: e.center.lng })
					setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
				}}
			>
				{places?.map((place, i) => (
					<div
						key={i}
						className='place__map'
						lat={Number(place.latitude)}
						lng={Number(place.longitude)}
					>
						<h4>{place.name}</h4>
						<LocationOnIcon className='map__icon' fontSize='large' />
					</div>
				))}
			</GoogleMapReact>
		</div>
	)
}

export default Map
