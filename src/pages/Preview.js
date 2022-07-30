import { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Search from "../components/Search";
import Picture from "../components/Picture";

const Preview = () => {
	return (
		<Fragment>
			<Header />
			<main>
				<Search />
				<Picture />
			</main>
			<Footer />
		</Fragment>
	);
};

export default Preview;
