import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Comment = () => {
	return (
		<Container className="mt-5">
			<Row>
				<Col sm={12}>
					<div>
						createor
						<span style={{ color: "#989898", marginLeft: "10px" }}>
							3 sec ago
						</span>
					</div>
					<div>comment </div>
				</Col>
			</Row>
		</Container>
	);
};

export default Comment;
