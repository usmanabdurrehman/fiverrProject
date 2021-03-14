import React from 'react'
import {ProgressSummary} from '../'
import './Summary.css'

export default function Summary() {
	return (
		<div className='summary'>
			<div className='summary-desc'>
				<h1>Weekly Sumup</h1>
				<p>Get summary of your weekly online transactions here.</p>
			</div>
			<div>
				<ProgressSummary progress={56}/>
			</div>
		</div>
	)
}