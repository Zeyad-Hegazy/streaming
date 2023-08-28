import React from "react";
import Thumbnail from "./Thumbnail";
import "../../css/SubVideos.css";
import { Container, Row, Col } from "react-bootstrap";
import { VIDEOS } from "../../data/videos";
import { NavLink } from "react-router-dom";

const SubVideos = () => {
	return (
		<Container>
			{VIDEOS.map((video) => (
				<Row className="mb-4" key={video.id}>
					<Col sm={12}>
						<NavLink to={`/${video.id}`}>
							<Thumbnail
								title={video.title}
								description={video.description}
								imgThumbnail={video.img_thumbanil}
							/>
						</NavLink>
					</Col>
				</Row>
			))}
		</Container>
	);
};

export default SubVideos;
