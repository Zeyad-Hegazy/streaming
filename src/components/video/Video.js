import ReactPlayer from "react-player";
import VideoInfo from "./VideoInfo";
import "../../css/Video.css";

const Video = () => {
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
