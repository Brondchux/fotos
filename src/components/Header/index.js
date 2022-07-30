import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { actions } from "../../store";

const Header = () => {
	const dispatch = useDispatch();
	const resetSearchHandler = () => {
		dispatch(actions.search.resetQuery());
		localStorage.removeItem("album");
		localStorage.removeItem("albumPage");
	};

	return (
		<header>
			<h1>
				<Link to="/" onClick={resetSearchHandler}>
					fotos
				</Link>
			</h1>
		</header>
	);
};

export default Header;
