import React from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search'
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave'
const Header = () => {
	return (
		<div className='header'>
			<div className='header__brand'>
				<TimeToLeaveIcon />
				<h2 className='brand__title'>Travel Advisor</h2>
			</div>
			<div className='header__nav'>
				<h4 className='nav__title'>Explore new places</h4>
				<div className='search__div'>
					<SearchIcon />
					<input
						type='text'
						className='search__input'
						placeholder='Search destinations...'
					/>
				</div>
			</div>
		</div>
	)
}

export default Header
