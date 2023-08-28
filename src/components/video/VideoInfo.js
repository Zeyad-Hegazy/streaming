import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MDBIcon } from "mdb-react-ui-kit";
import Comment from "./Comment";

import "../../css/VideoInfo.css";

const VideoInfo = ({ video }) => {
	return (
		<Container>
			<Row className="pt-4 pb-4 align-items-baseline">
				<Col sm={6} md={10}>
					<h3>{video.title}</h3>
				</Col>
				<Col sm={1}>
					<div className="like_circel">
						{video.VIDEO.likes}
						<MDBIcon far icon="thumbs-up" size="2x" />
					</div>
				</Col>
				<Col sm={1}>
					<div className="like_circel">
						{video.VIDEO.dislikes}
						<MDBIcon far icon="thumbs-down" size="2x" />
					</div>
				</Col>
			</Row>
			<Row>
				<Col sm={12}>
					<p className="videoInfo__description">{video.description}</p>
				</Col>
			</Row>
			<Row className="align-items-baseline">
				<Col sm={12}>
					<form className="form">
						<label htmlFor="commnet">
							[{video.VIDEO.comments.length}] comments
						</label>
						<div className="input_control">
							<input
								type="text"
								id="commnet"
								placeholder="Enter your comment here"
							/>
							<MDBIcon fas icon="comment" size="2x" className="send_comment" />
						</div>
					</form>
				</Col>
			</Row>
			{video.VIDEO.comments.map((com, i) => (
				<Comment comment={com} key={i} />
			))}
		</Container>
	);
};

export default VideoInfo;
