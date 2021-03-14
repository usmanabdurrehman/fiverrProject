import React from 'react'
import './Button.css'

export default function Button({text,type,fullWidth,height,width,onClick}) {

	let buttonStyles = [{
		type:'small-light',
		style:{
			backgroundColor:'#F0F7FF',
			color:'#197BBD',
			width:'100px'
		}
	},{
		type:'large-dark',
		style:{
			backgroundColor:'#197BBD',
			color:'#FFFFFF',
			width:'200px'
		}
	},{
		type:'large-dark-invert',
		style:{
			backgroundColor:'#FFFFFF',
			color:'#197BBD',
			width:'200px',
			border:'1px solid #197BBD'
		}
	},{
		type:'premium',
		style:{
			backgroundColor:'#FFC145',
			color:'#404040',
			fontSize:'12px',
			width:'100%'
		}
	}]

	return (
		<div onClick={onClick} style = {{...buttonStyles.find(style=>style.type==type).style,...(fullWidth && {width:'100%'}),...(width && {width}),...(height && {height})}} className='button'>
			{text} {type=='premium' ? <img src="premiumbuttonarrow.png" alt="" className='premiumIcon'/> : null}
		</div>
	)
}