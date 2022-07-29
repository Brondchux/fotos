import { Fragment } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Gallery from "../components/Gallery";
import Controls from "../components/Controls";
import Footer from "../components/Footer";

const Home = () => {
	return (
		<Fragment>
			<Header />
			<main>
				<Search />
				<Gallery />
				<Controls />
			</main>
			<Footer />
		</Fragment>
	);
};

export default Home;
