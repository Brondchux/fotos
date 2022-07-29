import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { actions } from "../../store";
import pexelsApiRequest, { BASE_URL } from "../../utils/api";
import Photo from "../Photo";

const Gallery = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { lookup } = useParams();

	const page = useSelector((state) => state.controls.page);
	const limit = useSelector((state) => state.controls.limit);
	const photos = useSelector((state) => state.gallery.photos);
	const query = useSelector((state) => state.search.query);
	const resetSearchHandler = () => dispatch(actions.search.resetQuery());

	useEffect(() => {
		lookup && lookup.length && dispatch(actions.search.setQuery(lookup));
	}, [lookup]);

	useEffect(() => {
		const url = `${BASE_URL}/curated/?page=${page}&per_page=${limit}`;
		pexelsApiRequest("url")
			.then((data) => dispatch(actions.gallery.setPhotos(data.photos)))
			.catch((e) => console.log(e));
	}, [page]);

	useEffect(() => {
		const url = `${BASE_URL}/search?query=${query}&per_page=${limit}`;
		pexelsApiRequest("url")
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
						<p className="h2 text-end text-danger" onClick={resetSearchHandler}>
							<Link to={"/"}> cancel</Link>
						</p>
					</div>
				</section>
			)}
			<section className="gallery row">
				<div className="col-12">
					<div className="row">
						{photos &&
							photos.map((photo) => <Photo key={photo.id} photo={photo} />)}
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default Gallery;
