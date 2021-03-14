import React from 'react'
import './Navbar.css'
import {ProfileMenu,Searchbar} from '../'

export default function Navbar() {
	return (
		<div className='navbar'>
			<Searchbar/>
			<div class='nav-menu'>
				<div><img src="menuicons/mail.png" alt=""/></div>
				<div><img src="menuicons/bell.png" alt=""/></div>
				<ProfileMenu/>
			</div>
		</div>
	)
}