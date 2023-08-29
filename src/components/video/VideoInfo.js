import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { videoActions } from "../../store/index";
import { useDispatch, useSelector } from "react-redux";

import CommenSection from "./comment/CommenSection";
import { MDBIcon } from "mdb-react-ui-kit";
import "../../css/VideoInfo.css";

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
				<Col sm={4} md={10}>
					<h3>{video.title}</h3>
				</Col>
				<Col className="d-flex justify-content-between" sm={6} md={2}>
					<Col sm={3} md={1}>
						<div className="like_circel" onClick={hadleLikeClick}>
							{videoState.VIDEO.likes}
							<MDBIcon far icon="thumbs-up" size="2x" />
						</div>
					</Col>
					<Col sm={3} md={1}>
						<div className="like_circel" onClick={handleDislikeClick}>
							{videoState.VIDEO.dislikes}
							<MDBIcon far icon="thumbs-down" size="2x" />
						</div>
					</Col>
				</Col>
			</Row>
			<Row>
				<Col sm={12}>
					<p className="videoInfo__description">{video.description}</p>
				</Col>
			</Row>
			<CommenSection video={video} />
		</Container>
	);
};

export default VideoInfo;
