import Control from "./Control";
import ReactPlayer from "react-player";
import "../../css/Video.css";

const Video = () => {
	return (
		<div className="video_contanier">
			<ReactPlayer
				url={"https://youtu.be/NtfbWkxJTHw?si=vWnGCW-zz7s-xqKr"}
				playing={true}
				controls={true}
				pip={true}
			/>
		</div>
	);
};

export default Video;
