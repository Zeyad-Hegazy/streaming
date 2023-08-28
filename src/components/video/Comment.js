import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Comment = ({ comment }) => {
	return (
		<Container className="mt-5">
			<Row>
				<Col sm={12}>
					<div>
						{comment.comment_creator}
						<span style={{ color: "#989898", marginLeft: "10px" }}>
							3 sec ago
						</span>
					</div>
					<div>{comment.comment} </div>
				</Col>
			</Row>
		</Container>
	);
};

export default Comment;
