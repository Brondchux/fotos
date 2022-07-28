const Search = () => {
	return (
		<section className="search row">
			<section className="col-12 p-0">
				<form>
					<div className="input-group">
						<input
							type="text"
							className="form-control shadow-none"
							placeholder="pets, cars, anything..."
						/>
						<button className="btn btn-secondary shadow-none">search</button>
					</div>
				</form>
			</section>
		</section>
	);
};

export default Search;
