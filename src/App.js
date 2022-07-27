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
				<section className="gallery"></section>
				<section className="controls">
					<div className="btn">
						<button>previous</button>
					</div>
					<div className="btn">
						<button className="btn btn-danger">next</button>
					</div>
				</section>
				<section className="none"></section>
			</main>
			<footer>
				<p>&copy; 2022 - fotos zero rights reserved</p>
			</footer>
		</div>
	);
};

export default App;
