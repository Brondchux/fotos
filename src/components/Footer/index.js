import { Link } from "react-router-dom";
import constants from "../../utils/constants";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer>
			<p>
				&copy; {currentYear} {constants.BRAND.NAME} -{" "}
				<Link
					to={`//${constants.ENGINEER.PORTFOLIO}`}
					target={"_blank"}
					rel="noopener"
				>
					{constants.ENGINEER.NAME}
				</Link>{" "}
				-{" "}
				<Link
					to={`//${constants.CREDITS.PEXELS.URL}`}
					target={"_blank"}
					rel="noopener"
				>
					{constants.CREDITS.PEXELS.COPY}
				</Link>
			</p>
		</footer>
	);
};

export default Footer;
