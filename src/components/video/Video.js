import ReactPlayer from "react-player";
import VideoInfo from "./VideoInfo";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "../../css/Video.css";

const Video = () => {
	let { videoId } = useParams();

	const videoState = useSelector((state) => state);
	const video = videoState.find((v) => v.id === +videoId);

	return (
		<>
			<div className="video_contanier">
				<div>
					<ReactPlayer
						url={video.VIDEO.vidoUrl}
						width="100%"
						height="100%"
						controls={true}
						muted={true}
					/>
				</div>
			</div>
			<VideoInfo video={video} />
		</>
	);
};

export default Video;
