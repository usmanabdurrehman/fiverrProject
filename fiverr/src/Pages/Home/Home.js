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
	Modal,
	Input
} from "../../Components";
import dummyData from "./dummyData.constants";
import ModalWrapper from "react-modal";
import "./Home.css";

// ModalWrapper.setAppElement(document.getElementById('home'));

export default function Home() {
	const [modalIsOpen, setIsOpen] = React.useState(false);
	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {}

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<div id="home">
			<Sidebar />
			<div className="main">
				<Navbar />
				<Container>
					<Summary />
					<Accord header="Accord 1">
						<>
							<Button text="Add Form" type="small-light" width={110} height={47} />
							<div className="form-container">
								<div className="form-grid">
									<Select header='Dropdown 1'/>
									<Input header='Connection' fullWidth />
								</div>
								<div className="form-grid">
									<Select header='Dropdown 2' />
									<Input header='Password' fullWidth />
									<div className="button-wrapper">
										<Button
											type="large-dark"
											text="Test Connection"
											fullWidth
											height={40}
										/>
									</div>
								</div>
							</div>
						</>
					</Accord>
					<Accord header="Accord 2">
						<FileCardContainer
							data={dummyData}
							onClick={openModal}
						/>
					</Accord>
					<Button text="Connect" type="large-dark" />
					<ModalWrapper
						isOpen={modalIsOpen}
						onAfterOpen={afterOpenModal}
						onRequestClose={closeModal}
						contentLabel="Example Modal"
					>
						<Modal onCancel={closeModal}/>
					</ModalWrapper>
				</Container>
			</div>
		</div>
	);
}
