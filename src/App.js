import "./App.css";
import Controls from "./components/Controls";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Search from "./components/Search";

const App = () => {
	return (
		<div className="wrapper">
			<Header />
			<main>
				<Search />
				<Gallery />
				<Controls />
			</main>
			<Footer />
		</div>
	);
};

export default App;
