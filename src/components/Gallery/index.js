import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store";
import Photo from "../Photo";
import pexelsApiRequest from "../../utils/api";

const Gallery = () => {
	const dispatch = useDispatch();
	const page = useSelector((state) => state.controls.page);
	const limit = useSelector((state) => state.controls.limit);
	const photos = useSelector((state) => state.gallery.photos);
	const query = useSelector((state) => state.search.query);

	// display images
	const gallery =
		photos &&
		photos.map((photo) => {
			return <Photo key={photo.id} photo={photo} />;
		});

	useEffect(() => {
		const url = `https://api.pexels.com/v1/curated/?page=${page}&per_page=${limit}`;
		pexelsApiRequest(url)
			.then((data) => dispatch(actions.gallery.setPhotos(data.photos)))
			.catch((e) => console.log(e));
	}, [page]);

	useEffect(() => {
		const url = `https://api.pexels.com/v1/search?query=${query}&per_page=${limit}`;
		pexelsApiRequest(url)
			.then((data) => dispatch(actions.gallery.setPhotos(data.photos)))
			.catch((e) => console.log(e));
	}, [query]);

	return (
		<Fragment>
			{query && (
				<section className="row mb-2">
					<div className="col-6 p-0">
						<h2 className="h2">
							Showing results for <span className="highlight">{query}</span>
						</h2>
					</div>
					<div className="col-6 p-0">
						<p className="h2 text-end text-danger">close</p>
					</div>
				</section>
			)}
			<section className="gallery row">
				<div className="col-12">
					<div className="row">{gallery}</div>
				</div>
			</section>
		</Fragment>
	);
};

export default Gallery;
