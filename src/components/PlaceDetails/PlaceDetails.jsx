import React from 'react'
import './placedetails.css'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
const PlaceDetails = ({ place }) => {
	return (
		<div className='placedetails'>
			<div className='imgContainer'>
				<img src={place.photo?.images?.large.url} alt='' />
			</div>
			<div className='detailsContainer'>
				<p className='place__title'>{place.name}</p>
				<div className='price__level'>
					<span>Price: </span>
					<span>{place.price_level}</span>
				</div>
				<div className='place__ranking'>
					<span>Ranking: </span>
					<span>{place.ranking}</span>
				</div>
				{place?.awards?.map((award, i) => (
					<div className='place__award' key={i}>
						<img src={award.images?.small} alt={award.display_name} />
						<span>{award.display_name}</span>
					</div>
				))}
				<div className='cuisine__wrapper'>
					{place?.cuisine?.map(({ name }, i) => (
						<span className='place__cuisine' key={i}>
							{name}
						</span>
					))}
				</div>
				{place?.address && (
					<div className='place__location'>
						<LocationOnIcon />
						<span>{place.address}</span>
					</div>
				)}
				{place?.phone && (
					<div className='place__phone'>
						<LocalPhoneIcon />
						<span>{place.phone}</span>
					</div>
				)}
				{place?.web_url && (
					<button
						className='place__btn'
						onClick={() => window.open(place.web_url, '_blank')}
					>
						Trip Advisor
					</button>
				)}
				{place?.website && (
					<button
						className='place__btn'
						onClick={() => window.open(place.website, '_blank')}
					>
						Website
					</button>
				)}
			</div>
		</div>
	)
}

export default PlaceDetails
