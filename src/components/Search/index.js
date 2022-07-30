import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
	const navigate = useNavigate();
	const [search, setSearch] = useState("");

	const inputHandler = (e) => {
		setSearch(e.target.value);
	};

	const searchHandler = (e) => {
		e.preventDefault();
		search.length && navigate(`/search/${search}`);
		setSearch("");
	};

	return (
		<section className="search row">
			<section className="col-12">
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
