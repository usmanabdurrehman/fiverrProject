import React from 'react'
import './MenuItem.css'

export default function MenuItem({onClick,index,item:{name,selected}}) {
	return (
		<div onClick={e=>{
			onClick(index)
		}} style={{backgroundColor:selected?'#F0F7FF':'#ffffff'}} className='menu-item'>
			<img src={`menuicons/${name.toLowerCase()}.${selected ? 'png' : 'svg'}`}/>
			<div style={{color:selected?'#197BBD':'#C7C7C7'}} className='menudesc-wrapper'>{name}</div>
		</div>
	)
}