import React from "react";
import { FileCard, FileCardUpload, Button } from "../";
import "./FileCardContainer.css";

export default function FileCardContainer({ data }) {
	return (
		<div className="file-card-container">
			{data.map((d, idx) =>
				d.type == "File" ? (
					<FileCard idx={idx} data={d} />
				) : d.type == "Upload" ? (
					<FileCardUpload idx={idx} />
				) : (
					<div className="button-wrapper">
						<Button
							text="Upload Once"
							type="large-dark"
							fullWidth
							height={80}
						/>
					</div>
				)
			)}
		</div>
	);
}
