import React from 'react'
import './Input.css'

export default function Input({header,fullWidth}) {
	return (
		<div className='input-wrapper'>
			<h4 className='header'>{header}</h4>
			<input className='input' type="text" style={{width:fullWidth ? '100%' : '150px'}}/>
		</div>
	)
}