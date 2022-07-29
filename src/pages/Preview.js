import { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Search from "../components/Search";

const Preview = () => {
	return (
		<Fragment>
			<Header />
			<main>
				<Search />
			</main>
			<Footer />
		</Fragment>
	);
};

export default Preview;
