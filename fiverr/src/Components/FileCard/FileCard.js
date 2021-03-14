import React from 'react'
import './FileCard.css'

export default function FileCard({data:{name,size,status,icon},idx}) {
	return (
		<div className='file-card-wrapper'>
			<div className='file-card-info'>
				<div className='gray'>File {idx+1}</div>
				<div style={{color:status=='Successful' ? '#6FCF97' : '#EB5757'}}>{status}</div>
			</div>
			<div className={`file-card ${status}`}>
				<div className='image-wrapper'>
					<img src={`${icon}-icon.png`} alt=""/>
				</div>
				<div className='description-wrapper'>
					<div className='description'>
						<p className='name'>{name}</p>
						<p className='size'>{size} mb</p>
					</div>
					<div className='close-icon'>
						<img src="close-icon.png" alt=""/>
					</div>
				</div>
			</div>
		</div>	
	)
}