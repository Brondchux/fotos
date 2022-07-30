import { Fragment, useCallback, useEffect, useState } from "react";
import pexelsApiRequest, { BASE_URL } from "../../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { actions } from "../../store";
import Photo from "../Photo";
import Loader from "../Loader";

const Gallery = () => {
	const dispatch = useDispatch();
	const { searched } = useParams();
	const page = useSelector((state) => state.controls.page);
	const limit = useSelector((state) => state.controls.limit);
	const photos = useSelector((state) => state.gallery.photos);
	const query = useSelector((state) => state.search.query);
	const resetSearchHandler = () => dispatch(actions.search.resetQuery());
	const [initialLoad, setinitialLoad] = useState(true);
	const [toggleLoader, setToggleLoader] = useState(false);
	const url = query
		? `${BASE_URL}/search?query=${query}&page=${page}&per_page=${limit}`
		: `${BASE_URL}/curated/?page=${page}&per_page=${limit}`;

	const storeAlbum = (pictures, number) => {
		localStorage.setItem("album", JSON.stringify(pictures));
		localStorage.setItem("albumPage", JSON.stringify(number));
	};

	const easeOutLoader = (state) => {
		setTimeout(() => {
			setToggleLoader(state);
		}, 500);
	};

	const apiCall = useCallback(async () => {
		setToggleLoader(true);
		await pexelsApiRequest(url)
			.then((data) => {
				storeAlbum(data.photos, page);
				dispatch(actions.gallery.setPhotos(data.photos));
				easeOutLoader(false);
			})
			.catch((e) => {
				console.log(e);
				easeOutLoader(false);
			});
	}, [query, page]);

	const fetchAlbum = () => {
		setToggleLoader(true);
		const album = localStorage.getItem("album");
		const albumPage = localStorage.getItem("albumPage");
		if (album && albumPage) {
			dispatch(actions.gallery.setPhotos(JSON.parse(album)));
			dispatch(actions.controls.setPage(JSON.parse(albumPage)));
			easeOutLoader(false);
			return true;
		}
		easeOutLoader(false);
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
			{toggleLoader && <Loader />}
			{query && (
				<section className="row mb-3">
					<div className="col-12 col-md-6 text-center text-md-start">
						<h2 className="h2 text-light">Showing results for {query}</h2>
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
							photos.map((photo) => <Photo key={photo.id} photo={photo} />)}
					</div>
				</div>
			</section>
		</Fragment>
	);
};

export default Gallery;
