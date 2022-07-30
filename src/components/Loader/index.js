import { Fragment } from "react";
import { useSelector } from "react-redux";

const Loader = () => {
	const loading = useSelector((state) => state.loader.loading);
	return (
		<Fragment>
			{loading && (
				<section className="spinner d-flex">
					<p className="m-auto">Loading...</p>
				</section>
			)}
		</Fragment>
	);
};
export default Loader;
