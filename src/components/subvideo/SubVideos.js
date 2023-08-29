import React from "react";
import Thumbnail from "./Thumbnail";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const SubVideos = () => {
	const videoState = useSelector((state) => state);
	return (
		<Container>
			{videoState.map((video) => (
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
