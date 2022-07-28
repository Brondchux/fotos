const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer>
			<p>&copy; {currentYear} - fotos rights reserved</p>
		</footer>
	);
};

export default Footer;
