import React, { useRef } from "react";
import { videoActions } from "./../../../store/index";
import { useDispatch, useSelector } from "react-redux";
import "../../../css/AddVedioForm.css";

const AddVedioForm = () => {
	const videoState = useSelector((state) => state);
	const dispatch = useDispatch();

	const titleRef = useRef();
	const urlRef = useRef();
	const descriptionRef = useRef();
	const thumbnailRef = useRef();

	const addVideoHandler = (e) => {
		e.preventDefault();

		const videoObj = {
			id: videoState.length + 1,
			img_thumbanil: thumbnailRef.current.value,
			title: titleRef.current.value,
			description: descriptionRef.current.value,
			VIDEO: {
				vidoUrl: urlRef.current.value,
				likes: 0,
				dislikes: 0,
				comments: [],
			},
		};
		dispatch(videoActions.addVideoHandler(videoObj));

		titleRef.current.value = "";
		urlRef.current.value = "";
		descriptionRef.current.value = "";
		thumbnailRef.current.value = "";
	};

	return (
		<form className="d-flex flex-column" onSubmit={addVideoHandler}>
			<div className="video_input_controler">
				<input type="text" placeholder="Enter Video Title" ref={titleRef} />
			</div>
			<div className="video_input_controler">
				<input type="text" placeholder="Enter Video URL" ref={urlRef} />
			</div>
			<div className="video_input_controler">
				<input
					type="text"
					placeholder="Enter Video Description"
					ref={descriptionRef}
				/>
			</div>
			<div className="video_input_controler">
				<input
					type="text"
					placeholder="Enter Thumbnail URL"
					ref={thumbnailRef}
				/>
			</div>
			<button type="submit" className="btn btn-success mt-4 align-self-end">
				Add
			</button>
		</form>
	);
};

export default AddVedioForm;
