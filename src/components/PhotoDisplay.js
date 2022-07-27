const PhotoDisplay = ({ photo }) => {
	return (
		<figure>
			<img src={photo.url} />
			<figcaption>{photo.title}</figcaption>
		</figure>
	);
};

export default PhotoDisplay;
