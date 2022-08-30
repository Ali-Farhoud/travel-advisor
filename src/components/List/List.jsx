import React, { useState } from 'react'
import PlaceDetails from '../PlaceDetails/PlaceDetails'
import './list.css'
const List = ({ places }) => {
	const [type, setType] = useState('')
	const [rating, setRating] = useState('')

	return (
		<div className='list'>
			<h1 className='list__heading'>
				Restaurants, Hotels & Attractions around you
			</h1>
			<label className='label__type'>Type:</label>
			<select
				className='select__type'
				value={type}
				name='type'
				id='type'
				onChange={(e) => setType(e.target.value)}
			>
				<option value='restaurants'>Restaurants</option>
				<option value='hotels'>Hotels</option>
				<option value='attractions'>Attractions</option>
			</select>
			<label className='label__rating'>Rating:</label>
			<select
				className='select__rating'
				value={rating}
				name='rating'
				id='rating'
				onChange={(e) => setRating(e.target.value)}
			>
				<option value='all'>All</option>
				<option value='above3'>Above 3.0</option>
				<option value='above4'>Above 4.0</option>
				<option value='above45'>Above 4.5</option>
			</select>
			{places?.map(
				(place, i) =>
					place.name && (
						<div className='card' key={i}>
							<PlaceDetails place={place} />
						</div>
					)
			)}
		</div>
	)
}

export default List
