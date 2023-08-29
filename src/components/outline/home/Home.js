import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AddVedioForm from "./AddVedioForm";
import "../../../css/Home.css";

const Home = () => {
	const [formIsShwoen, setFormIsShwoen] = useState(false);
	return (
		<Container>
			<Row>
				<Col sm={12} className="header_title">
					<h1>Add and Watch variooty of videos here</h1>
				</Col>
			</Row>
			<Row>
				<Col sm={4}>
					<button
						className="btn btn-secondary text-dark btnAdding"
						onClick={() => {
							setFormIsShwoen(true);
						}}
					>
						Add Video
					</button>
				</Col>
			</Row>
			{formIsShwoen && (
				<Row>
					<Col sm={12}>
						<AddVedioForm />
					</Col>
				</Row>
			)}
		</Container>
	);
};

export default Home;
