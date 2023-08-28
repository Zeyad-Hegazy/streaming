import ReactPlayer from "react-player";
import VideoInfo from "./VideoInfo";
import { useParams } from "react-router-dom";
import "../../css/Video.css";
import { VIDEOS } from "../../data/videos";

const Video = () => {
	let { videoId } = useParams();
	const video = VIDEOS.find((v) => v.id === +videoId);

	return (
		<div className="video_contanier">
			<ReactPlayer
				url={video.VIDEO.vidoUrl}
				width="100%"
				height="500px"
				controls={true}
				muted={true}
			/>
			<VideoInfo video={video} />
		</div>
	);
};

export default Video;
