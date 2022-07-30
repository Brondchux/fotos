import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { actions } from "../../store";
import constants from "../../utils/constants";

const Header = () => {
	const dispatch = useDispatch();
	const resetSearchHandler = () => {
		dispatch(actions.search.resetQuery());
		localStorage.removeItem("album");
		localStorage.removeItem("albumPage");
	};

	return (
		<header>
			<div>
				<h1>
					<Link to="/" onClick={resetSearchHandler}>
						{constants.BRAND.NAME}
					</Link>
				</h1>
				<p>{constants.BRAND.MOTTO}</p>
			</div>
		</header>
	);
};

export default Header;
