import React from "react";
import { Routes, Route } from "react-router-dom";
import Video from "./components/video/Video";
import SubVideos from "./components/subvideo/SubVideos";
import NavBar from "./components/outline/NavBar";
import { Container, Row, Col } from "react-bootstrap";

import "./css/App.css";

const App = () => {
	return (
		<Container fluid>
			<Row>
				<NavBar />
			</Row>
			<Container className="main__content">
				<Row className="g-5">
					<Col sm={12} md={8}>
						<Routes>
							<Route path="/:videoId" element={<Video />} />
						</Routes>
					</Col>
					<Col>
						<SubVideos />
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export default App;
