import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MDBIcon } from "mdb-react-ui-kit";
import Comment from "./Comment";

import "../../css/VideoInfo.css";

const VideoInfo = () => {
	return (
		<Container>
			<Row className="pt-4 pb-4 align-items-baseline">
				<Col sm={6} md={10}>
					<h3>How to Learn to Code - 8 Hard Truths</h3>
				</Col>
				<Col sm={1}>
					<div className="like_circel">
						<MDBIcon far icon="thumbs-up" size="2x" />
					</div>
				</Col>
				<Col sm={1}>
					<div className="like_circel">
						<MDBIcon far icon="thumbs-down" size="2x" />
					</div>
				</Col>
			</Row>
			<Row>
				<Col sm={12}>
					<p className="videoInfo__description">
						Learning to code can open many doors in life, but it's NOT easy and
						NOT for everybody. Let's take a look at 8 different techniques
						supported by science that can help you become a programmer faster
					</p>
				</Col>
			</Row>
			<Row className="align-items-baseline">
				<Col sm={12}>
					<form className="form">
						<label htmlFor="commnet">[count] comments</label>
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
			<Comment />
		</Container>
	);
};

export default VideoInfo;
