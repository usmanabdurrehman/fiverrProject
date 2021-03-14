import React from 'react'
import './FileCardUpload.css'

export default function FileCardUpload({idx}) {
	return (
		<div className='upload-card-wrapper'>
			<div className='upload-card-info'>
				<div className='gray'>File {idx+1}</div>
			</div>
			<div className='upload-card'>
				<div className='gray'>Select a file to upload</div>
				<img src="upload-icon.png" alt="" className='upload-icon'/>
			</div>
		</div>	
	)
}