import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import moment from "moment/moment";

import "../../../css/Comment.css";

const Comment = ({ comment }) => {
	return (
		<Container className="mt-5 commentContainer">
			<Row>
				<Col sm={12}>
					<div>
						{comment.comment_creator}
						<span style={{ color: "#989898", marginLeft: "10px" }}>
							{moment(comment.data).fromNow()}
						</span>
					</div>
					<div>{comment.comment} </div>
				</Col>
			</Row>
		</Container>
	);
};

export default Comment;
