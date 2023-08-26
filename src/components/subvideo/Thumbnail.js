import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../../css/Thumbnail.css";

const Thumbnail = ({ title, description, imgThumbnail }) => {
	return (
		<Container fluid className="thumbnail_contanier">
			<Row className="align-items-center">
				<Col sm={5}>
					<div className="thumbnail_img">
						<img src={imgThumbnail} alt={title} />
					</div>
				</Col>
				<Col sm={7}>
					<div className="thumbnail_info">
						<h5>{title}</h5>
						<p>{description}</p>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Thumbnail;
