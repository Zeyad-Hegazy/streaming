import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../../css/Thumbnail.css";

const Thumbnail = () => {
	return (
		<Container className="thumbnail_contanier">
			<Row className="align-items-center">
				<Col sm={7}>
					<div className="thumbnail_img">
						<img src="https://fakeimg.pl/250x150" alt="imaeUrl" />
					</div>
				</Col>
				<Col sm={5}>
					<div className="thumbnail_info">
						<h3>Video Title</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
							quae
						</p>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Thumbnail;
