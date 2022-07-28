import { Link } from "react-router-dom";

const Photo = ({ photo }) => {
	const url = photo.photographer_url.slice(8, photo.photographer_url.length);

	return (
		<figure className="col-12 col-sm-4 col-md-3 figure">
			<div
				title={photo.alt}
				className="image"
				style={{ backgroundImage: `url(${photo.src.medium})` }}
			></div>
			<figcaption className="figure-caption">
				<Link
					to={{ pathname: `//${url}` }}
					target="_blank"
					rel="noopener"
					className="d-block"
				>
					📸 {photo.photographer}
				</Link>
			</figcaption>
		</figure>
	);
};

export default Photo;
