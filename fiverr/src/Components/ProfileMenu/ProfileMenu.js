import React from 'react'
import './ProfileMenu.css'

export default function ProfileMenu() {
	return (
		<div className='profile-menu'>
			<div><img src="menuicons/avatar.png" alt=""/></div>
			<div className='desc'>
				<div>Andrew</div>
				<div className='account-desc'>Admin Account</div>
			</div>
		</div>
	)
}