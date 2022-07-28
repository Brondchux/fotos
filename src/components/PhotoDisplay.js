const PhotoDisplay = ({ photo }) => {
	return (
		<figure className="col-12 col-sm-4 col-md-3 figure">
			<div
				title={photo.alt}
				className="image"
				style={{ backgroundImage: `url(${photo.src.medium})` }}
			></div>
			<figcaption className="figure-caption">
				📸 {photo.photographer}
			</figcaption>
		</figure>
	);
};

export default PhotoDisplay;
