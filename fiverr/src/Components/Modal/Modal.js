import React from 'react'
import {FileCardUploading,Button} from '../'
import dummyData from './dummyModalData.constants'
import './Modal.css'

export default function Modal() {
	return (
		<div className='modal'>
			<div className='file-card-uploading-wrapper'>
				{dummyData.map(data=><FileCardUploading data={data} progress={data.progress} speed={data.speed}/>)}
			</div>
			<div className='upload-card-button'>
				Drag or Browse files to upload
			</div>
			<div className='button-container'>
				<Button text='Submit' type='large-dark'/>
				<Button text='Cancel' type='large-dark-invert'/>
			</div>
		</div>
	)
}