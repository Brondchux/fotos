import "./App.css";
import { useState } from "react";
import { album } from "./Seed";
import PhotoDisplay from "./components/PhotoDisplay";

const App = () => {
	// get photos
	const [photos, setPhotos] = useState(album);

	// next btn handler

	// previous btn handler

	// display images
	const gallery = photos.map((photo) => {
		return <PhotoDisplay key={photo.id} photo={photo} />;
	});

	// display client
	return (
		<div className="wrapper">
			<header>
				<h1>fotos</h1>
			</header>
			<main>
				<section className="gallery row">
					<div className="col-12"></div>
				</section>
				<section className="controls row">
					<div className="col-6">
						<button className="btn btn-secondary">previous</button>
					</div>
					<div className="col-6 text-end">
						<button className="btn btn-secondary">next</button>
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
