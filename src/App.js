import "./App.css";
import { useEffect, useState } from "react";
import PhotoDisplay from "./components/PhotoDisplay";

const App = () => {
	// get photos
	const [photos, setPhotos] = useState(null);

	// next btn handler
	const nextHandler = () => {};

	// previous btn handler
	const previousHandler = () => {};

	// display images
	const gallery =
		photos &&
		photos.map((photo) => {
			return <PhotoDisplay key={photo.id} photo={photo} />;
		});

	// fetch pexels photos
	// https://api.pexels.com/v1/curated/?page=1&per_page=10
	useEffect(() => {
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
	}, []);

	// display client
	return (
		<div className="wrapper">
			<header>
				<h1>fotos</h1>
			</header>
			<main>
				<section className="gallery row">
					<div className="col-12">
						<div className="row">{gallery}</div>
					</div>
				</section>
				<section className="controls row">
					<div className="col-6">
						<button
							className="btn btn-secondary"
							disabled={!photos}
							onClick={previousHandler}
						>
							&lt; previous
						</button>
					</div>
					<div className="col-6 text-end">
						<button className="btn btn-secondary" onClick={nextHandler}>
							next &gt;
						</button>
					</div>
				</section>
			</main>
			<footer>
				<p>&copy; 2022 - fotos rights reserved</p>
			</footer>
		</div>
	);
};

export default App;
