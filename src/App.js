import "./App.css";
import Controls from "./components/Controls";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

const App = () => {
	return (
		<div className="wrapper">
			<Header />
			<main>
				<Gallery />
				<Controls />
			</main>
			<Footer />
		</div>
	);
};

export default App;
