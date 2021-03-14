import React from 'react'
import './Searchbar.css'

export default function Searchbar() {
	return (
		<div className='searchbar'>
			<img src="search-icon.png" alt=""/>
			<div><input className='input' type="text"/></div>
		</div>
	)
}