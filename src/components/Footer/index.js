import { Link } from "react-router-dom";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer>
			<p>
				&copy; {currentYear} fotos -{" "}
				<Link to={"//www.gospelchukwu.com/"} target={"_blank"} rel="noopener">
					Gospel Chukwu
				</Link>{" "}
				-{" "}
				<Link to={"//www.pexels.com"} target={"_blank"} rel="noopener">
					Photos provided by Pexels
				</Link>
			</p>
		</footer>
	);
};

export default Footer;
