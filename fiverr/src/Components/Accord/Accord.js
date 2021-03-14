import React, { useState } from "react";
import {Button} from '../'
import "./Accord.css";

export default function Accord({ header,children }) {
	let [open, setOpen] = useState(false);

	return (
		<div
			className={`accord ${open ? 'accordOpen' : 'accordClose'}`}
		>
			<div className="accord-header">
				<h2>{header}</h2>
				<img
					onClick={e=>setOpen(!open)}
					style={{transform:open?'rotateZ(180deg)':'rotateZ(0deg)'}}
					className="accord-open"
					src="menuicons/arrow.png"
					alt=""
				/>
			</div>
			<div className="accord-content">
				{children}
			</div>
		</div>
	);
}
