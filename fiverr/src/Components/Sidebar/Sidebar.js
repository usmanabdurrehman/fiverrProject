import React,{useState} from 'react'
import {MenuItem,Button} from '../'
import './Sidebar.css'

export default function Sidebar() {

	let [menuItems,setMenuItems] = useState([{
		name:'Overview',
		selected:true
	},{
		name:'Transactions',
		selected:false
	},{
		name:'Cards',
		selected:false
	},{
		name:'Goals',
		selected:false
	},{
		name:'Invoices',
		selected:false
	},{
		name:'Settings',
		selected:false
	}])

	let selectOne = (idx) => {
		let previousSelectedIndex = menuItems.findIndex(sel=>sel.selected==true)
		let selected = [...menuItems]
		selected[previousSelectedIndex].selected = false
		selected[idx].selected = true
		console.log(selected)
		setMenuItems(selected)
	}

	return (
		<div className='sidebar'>
			<img src="google-icon.png" alt=""/>
			<div className='sidebar-content'>
				<div className='menu'>
					{menuItems.map((item,idx)=><MenuItem onClick={selectOne} index={idx} item={item}/>)}
				</div>
				<Button text={'Upgrade to premium'} type='premium'/>
			</div>	
		</div>
	)
}