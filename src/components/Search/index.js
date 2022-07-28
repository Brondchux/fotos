import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store";

const Search = () => {
	const dispatch = useDispatch();
	const [search, setSearch] = useState("");
	const query = useSelector((state) => state.search.query);

	const inputHandler = (e) => {
		setSearch(e.target.value);
	};

	const searchHandler = (e) => {
		e.preventDefault();
		dispatch(actions.search.setQuery(search));
	};

	useEffect(() => {
		console.log("you searched:", query);
	}, [query]);

	return (
		<section className="search row">
			<section className="col-12 p-0">
				<form onSubmit={searchHandler}>
					<div className="input-group">
						<input
							type="text"
							className="form-control shadow-none"
							placeholder="pets, cars, anything..."
							value={search}
							onChange={inputHandler}
						/>
						<button
							className="btn btn-secondary shadow-none"
							onClick={searchHandler}
						>
							search
						</button>
					</div>
				</form>
			</section>
		</section>
	);
};

export default Search;
