import React from "react";
import "./Progress.css";

export default function Progress({ progress,width }) {
	return (
		<div className="progress" style={{width: width ? width : '100%'}}>
			<div
				className="progress-done"
				style={{ width: `${progress}%` }}
			></div>
			<div
				className="progress-remaining"
				style={{ width: `${100 - progress}%` }}
			></div>
		</div>
	);
}
