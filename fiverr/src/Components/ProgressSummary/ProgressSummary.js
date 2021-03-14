import React from 'react'
import {Progress} from '../'
import './ProgressSummary.css'

export default function ProgressSummary({progress}) {
	return (
		<div className='progress-summary-wrapper'>
			<h3>Progress</h3>
			<div className='progress-wrapper'>
				<img src='progress-file-icon.png'/>
				<div><Progress progress={progress} width='200px'/><p>Project Files</p></div>
				<div className='progress-value'>
					{progress} %
				</div>
			</div>
		</div>	
	)
}