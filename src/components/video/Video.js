import ReactPlayer from "react-player";
import VideoInfo from "./VideoInfo";
import { useParams } from "react-router-dom";
import "../../css/Video.css";

const Video = () => {
	let { videoID } = useParams();
	return (
		<div className="video_contanier">
			<ReactPlayer
				url={"https://youtu.be/NtfbWkxJTHw?si=vWnGCW-zz7s-xqKr"}
				width="100%"
				height="500px"
				controls={true}
				muted={true}
			/>
			<VideoInfo />
		</div>
	);
};

export default Video;
