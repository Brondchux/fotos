import { Link } from "react-router-dom";
import { extractUrl } from "../../utils/helper";

const Photo = ({ photo }) => {
	const url = extractUrl(photo.photographer_url);

	return (
		<figure className="col-12 col-sm-6 col-md-4 col-lg-3 figure mb-5">
			<Link to={`/photo/${photo.id}`}>
				<div
					title={photo.alt}
					className="image"
					style={{ backgroundImage: `url(${photo.src.medium})` }}
				></div>
			</Link>
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
