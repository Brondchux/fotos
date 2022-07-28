import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store";
import Photo from "../Photo";

const Gallery = () => {
	const dispatch = useDispatch();
	const page = useSelector((state) => state.controls.page);
	const limit = useSelector((state) => state.controls.limit);
	const photos = useSelector((state) => state.gallery.photos);

	// display images
	const gallery =
		photos &&
		photos.map((photo) => {
			return <Photo key={photo.id} photo={photo} />;
		});

	useEffect(() => {
		// console.log(
		// 	`https://api.pexels.com/v1/curated/?page=${page}&per_page=${limit}`
		// );
		/* fetch pexels photos */
		fetch(`https://api.pexels.com/v1/curated/?page=${page}&per_page=${limit}`, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `${process.env.REACT_APP_PEXEL_KEY}`,
			},
			mode: "cors",
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				console.dir(data);
				return dispatch(actions.gallery.setPhotos(data.photos));
			})
			.catch((err) => {
				console.log("Attention required:", err);
			});
	}, [page]);

	return (
		<section className="gallery row">
			<div className="col-12">
				<div className="row">{gallery}</div>
			</div>
		</section>
	);
};

export default Gallery;
