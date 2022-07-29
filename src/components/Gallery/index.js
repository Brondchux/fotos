import { Fragment, useCallback, useEffect, useState } from "react";
import pexelsApiRequest, { BASE_URL } from "../../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { actions } from "../../store";
import Photo from "../Photo";

const Gallery = () => {
	const dispatch = useDispatch();
	const { searched } = useParams();
	const page = useSelector((state) => state.controls.page);
	const limit = useSelector((state) => state.controls.limit);
	const photos = useSelector((state) => state.gallery.photos);
	const query = useSelector((state) => state.search.query);
	const resetSearchHandler = () => dispatch(actions.search.resetQuery());
	const [initialLoad, setinitialLoad] = useState(true);
	const url = query
		? `${BASE_URL}/search?query=${query}&page=${page}&per_page=${limit}`
		: `${BASE_URL}/curated/?page=${page}&per_page=${limit}`;

	const storeAlbum = (pictures, number) => {
		localStorage.setItem("album", JSON.stringify(pictures));
		localStorage.setItem("albumPage", JSON.stringify(number));
	};

	const apiCall = useCallback(async () => {
		await pexelsApiRequest(url)
			.then((data) => {
				storeAlbum(data.photos, page);
				dispatch(actions.gallery.setPhotos(data.photos));
			})
			.catch((e) => console.log(e));
	}, [query, page]);

	const fetchAlbum = () => {
		const album = localStorage.getItem("album");
		const albumPage = localStorage.getItem("albumPage");
		if (album && albumPage) {
			dispatch(actions.gallery.setPhotos(JSON.parse(album)));
			dispatch(actions.controls.setPage(JSON.parse(albumPage)));
			return true;
		}
		return false;
	};

	useEffect(() => {
		searched && searched.length && dispatch(actions.search.setQuery(searched));
	}, [searched]);

	useEffect(() => {
		if (initialLoad) {
			const res = fetchAlbum();
			if (!res) {
				apiCall();
			}
		} else {
			apiCall();
		}

		return () => {
			setinitialLoad(false);
		};
	}, [query, page]);

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
