import React from "react";
import Thumbnail from "./Thumbnail";
import "../../css/SubVideos.css";
import { Container, Row, Col } from "react-bootstrap";

const SubVideos = () => {
	return (
		<Container>
			<Row className="mb-4">
				<Col sm={12}>
					<Thumbnail />
				</Col>
			</Row>
			<Row className="mb-4">
				<Col sm={12}>
					<Thumbnail />
				</Col>
			</Row>
			<Row className="mb-4">
				<Col sm={12}>
					<Thumbnail />
				</Col>
			</Row>
			<Row className="mb-4">
				<Col sm={12}>
					<Thumbnail />
				</Col>
			</Row>
		</Container>
	);
};

export default SubVideos;
