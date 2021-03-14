import React from "react";
import {
	Sidebar,
	MenuItem,
	Navbar,
	Container,
	Summary,
	Accord,
	FileCardContainer,
	Button,
	Select,
	Modal
} from "../../Components";
import dummyData from './dummyData.constants'
import "./Home.css";

export default function Home() {

	return (
		<div className="home">
			<Sidebar />
			<div className="main">
				<Navbar />
				<Container>
					<Summary />
					<Accord header="Accord 1">
						<>
							<Button text="Add Form" type="small-light" />
							<div className="form-container">
								<div className="form-grid">
									<Select/>
									<Select/>
								</div>
								<div className="form-grid">
									<Select/>
									<Select/>
									<Button type='large-dark' text='Test Connection' fullWidth/>
								</div>
							</div>
						</>
					</Accord>
					<Accord header="Accord 2">
						<FileCardContainer data={dummyData} />
					</Accord>
					<Button text='Connect' type='large-dark'/>
					<Modal/>
				</Container>
			</div>
		</div>
	);
}
