import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MDBIcon } from "mdb-react-ui-kit";
import Comment from "./Comment";

import "../../css/VideoInfo.css";
import { videoActions } from "../../store/index";
import { useDispatch, useSelector } from "react-redux";

const VideoInfo = ({ video }) => {
	const dispatch = useDispatch();

	const videoState = useSelector((state) => {
		return state.find((v) => v.id === video.id);
	});

	const hadleLikeClick = () => {
		dispatch(videoActions.likeHandler(video.id));
	};

	const handleDislikeClick = () => {
		dispatch(videoActions.disLikeHandler(video.id));
	};

	return (
		<Container>
			<Row className="pt-4 pb-4 align-items-baseline">
				<Col sm={6} md={10}>
					<h3>{video.title}</h3>
				</Col>
				<Col sm={1}>
					<div className="like_circel" onClick={hadleLikeClick}>
						{videoState.VIDEO.likes}
						<MDBIcon far icon="thumbs-up" size="2x" />
					</div>
				</Col>
				<Col sm={1}>
					<div className="like_circel" onClick={handleDislikeClick}>
						{videoState.VIDEO.dislikes}
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
