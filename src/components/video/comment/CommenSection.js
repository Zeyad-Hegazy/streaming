import React, { useRef } from "react";
import { Row, Col } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { videoActions } from "../../../store";

import { MDBIcon } from "mdb-react-ui-kit";
import Comment from "./Comment";

const CommenSection = ({ video }) => {
	const inputRef = useRef();

	const dispatch = useDispatch();

	const videoState = useSelector((state) => {
		return state.find((v) => v.id === video.id);
	});

	const handleCommnet = (e) => {
		e.preventDefault();
		const commentObj = {
			id: video.id,
			comment_creator: "user23",
			data: new Date(),
			comment: inputRef.current.value,
		};
		dispatch(videoActions.commentHandler(commentObj));
		inputRef.current.value = "";
		console.log(commentObj);
	};

	return (
		<>
			<Row className="align-items-baseline">
				<Col sm={12}>
					<form className="form" onSubmit={handleCommnet}>
						<label htmlFor="commnet">
							[{videoState.VIDEO.comments.length}] comments
						</label>
						<div type="submit" className="input_control">
							<input
								type="text"
								id="commnet"
								placeholder="Enter your comment here"
								ref={inputRef}
							/>
							<button className="btn send_comment" type="submit">
								<MDBIcon fas icon="comment" size="2x" />
							</button>
						</div>
					</form>
				</Col>
			</Row>
			{videoState.VIDEO.comments.map((com, i) => (
				<Comment comment={com} key={i} />
			))}
		</>
	);
};

export default CommenSection;
