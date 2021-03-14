import React,{useState} from 'react'
import './Select.css'
import SelectInput from 'react-select';

export default function Select({header}) {

	const [selected,setSelected] = useState(null)

	const options = [
	  { value: 'chocolate', label: 'Chocolate' },
	  { value: 'strawberry', label: 'Strawberry' },
	  { value: 'vanilla', label: 'Vanilla' },
	];

	let handleChange = selectedOption => {
	    setSelected(selectedOption);
	    console.log(`Option selected:`, selectedOption);
	};

	return (
		<div className='select-wrapper'>
			<h4 className='header'>{header}</h4>
			<SelectInput
		        value={selected}
		        onChange={handleChange}
		        options={options}
		        className='select'
	     	/>
		</div>
	)
}