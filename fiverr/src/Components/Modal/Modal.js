import React from 'react'
import {FileCardUploading} from '../'
import dummyData from './dummyModalData.constants'
import './Modal.css'

export default function Modal() {
	return (
		<div className='modal'>
			<div className='file-card-uploading-wrapper'>
				{dummyData.map(data=><FileCardUploading data={data} progress={data.progress} speed={data.speed}/>)}
			</div>
		</div>
	)
}