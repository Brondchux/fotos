import "./App.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Photo from "./components/Photo";
import Controls from "./components/Controls";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
	// get photos
	const [photos, setPhotos] = useState(null);
	const page = useSelector((state) => state.controls.page);
	const limit = useSelector((state) => state.controls.limit);

	// display images
	const gallery =
		photos &&
		photos.map((photo) => {
			return <Photo key={photo.id} photo={photo} />;
		});

	// fetch pexels photos
	// https://api.pexels.com/v1/curated/?page=1&per_page=10
	// https://api.pexels.com/v1/curated/?page=${page}&per_page=${limit}
	useEffect(() => {
		console.log(
			`https://api.pexels.com/v1/curated/?page=${page}&per_page=${limit}`
		);
		// fetch("https://api.pexels.com/v1/curated", {
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 		Authorization: `${process.env.REACT_APP_PEXEL_KEY}`,
		// 	},
		// 	mode: "cors",
		// })
		// 	.then((res) => res.json())
		// 	.then((data) => {
		// 		console.log(data);
		// 		return setPhotos(data.photos);
		// 	})
		// 	.catch((err) => {
		// 		console.log("Your have these errors:", err);
		// 	});
	}, [page]);

	// display client
	return (
		<div className="wrapper">
			<Header />
			<main>
				<section className="gallery row">
					<div className="col-12">
						<div className="row">{gallery}</div>
					</div>
				</section>
				<Controls />
			</main>
			<Footer />
		</div>
	);
};

export default App;
