import React from 'react'
import {Progress} from '../'
import './FileCardUploading.css'

export default function FileCardUploading({progress,speed,data:{name,size,status,icon}}) {
	return (
		<div className='file-card-uploading'>
			<img src={`${icon}-icon.png`} alt=""/>
			<div className='file-description'>
				<p className='name'>{name}</p>
				<p className='size'>{size} mb</p>
			</div>
			<div className='progress-block'>
				<Progress progress={progress}/>
				<div className='progress-stats'>
					<div className='speed'>{speed} KB/sec</div>
					<div className='progress-percent'>{progress==100 ? 'Completed' : `${progress}%`}</div>
				</div>
			</div>
			<div>
				<img src="close-icon.png" alt=""/>
			</div>
		</div>
	)
}