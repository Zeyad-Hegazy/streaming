import React from "react";
import Video from "./components/video/Video";
import SubVideo from "./components/subvideo/SubVideo";
import { Container, Row, Col } from "react-bootstrap";

const App = () => {
	return (
		<Container>
			<Row>
				<Col sm={12} md={8}>
					<Video />
				</Col>
				<Col>
					<SubVideo />
				</Col>
			</Row>
		</Container>
	);
};

export default App;
