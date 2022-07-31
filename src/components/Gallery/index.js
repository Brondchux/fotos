import { Fragment, useCallback, useEffect, useState } from "react";
import pexelsApiRequest, { BASE_URL } from "../../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { actions } from "../../store";
import Photo from "../Photo";
import Loader from "../Loader";
import {
	delay,
	fetchLocalStorage,
	storeLocalStorage,
} from "../../utils/helper";

const Gallery = () => {
	const dispatch = useDispatch();
	const { searched } = useParams();
	const page = useSelector((state) => state.controls.page);
	const limit = useSelector((state) => state.controls.limit);
	const photos = useSelector((state) => state.gallery.photos);
	const query = useSelector((state) => state.search.query);
	const loading = useSelector((state) => state.loader.loading);
	const [initialLoad, setinitialLoad] = useState(true);
	const resetSearchHandler = () => dispatch(actions.search.resetQuery());
	const url = query
		? `${BASE_URL}/search?query=${query}&page=${page}&per_page=${limit}`
		: `${BASE_URL}/curated/?page=${page}&per_page=${limit}`;

	const storeAlbum = (pictures, number) => {
		storeLocalStorage("album", pictures);
		storeLocalStorage("albumPage", number);
	};

	const easeOutLoader = () => {
		setTimeout(() => {
			dispatch(actions.loader.setLoading(false));
		}, delay);
	};

	const apiCall = useCallback(async () => {
		dispatch(actions.loader.setLoading(true));
		await pexelsApiRequest(url)
			.then((data) => {
				storeAlbum(data.photos, page);
				dispatch(actions.gallery.setPhotos(data.photos));
				easeOutLoader();
			})
			.catch((e) => {
				console.log(e);
				easeOutLoader();
			});
	}, [query, page]);

	const fetchAlbum = () => {
		dispatch(actions.loader.setLoading(true));
		const album = fetchLocalStorage("album");
		const albumPage = fetchLocalStorage("albumPage");
		if (album && albumPage) {
			dispatch(actions.gallery.setPhotos(album));
			dispatch(actions.controls.setPage(albumPage));
			easeOutLoader();
			return true;
		}
		easeOutLoader();
		return false;
	};

	useEffect(() => {
		searched && searched.length && dispatch(actions.search.setQuery(searched));
	}, [searched]);

	useEffect(() => {
		if (initialLoad) {
			const res = fetchAlbum();
			!res && apiCall();
		} else {
			apiCall();
		}
		return () => {
			setinitialLoad(false);
		};
	}, [query, page]);

	return (
		<Fragment>
			{loading && <Loader />}
			{query && (
				<section className="row mb-3">
					<div className="col-12 col-md-6 text-center text-md-start">
						{photos && photos.length > 0 && (
							<h2 className="h2 text-light">Showing results for {query}</h2>
						)}
						{photos && !photos.length && (
							<h2 className="h2 text-light">No results found for {query}</h2>
						)}
					</div>
					<div className="col-12 col-md-6 text-center text-md-end text-end">
						<span className="h2 cancel" onClick={resetSearchHandler}>
							<Link to={"/"}>cancel</Link>
						</span>
					</div>
				</section>
			)}
			<section className="gallery row mt-2">
				<div className="col-12">
					<div className="row">
						{photos &&
							photos.length > 0 &&
							photos.map((photo) => <Photo key={photo.id} photo={photo} />)}
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default Gallery;
