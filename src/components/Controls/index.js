import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store";

const Controls = () => {
	const dispatch = useDispatch();
	const page = useSelector((state) => state.controls.page);

	const nextHandler = () => {
		dispatch(actions.controls.increment());
	};

	const previousHandler = () => {
		dispatch(actions.controls.decrement());
	};

	return (
		<section className="controls row">
			<div className="col-6">
				<button
					className="btn btn-secondary"
					disabled={page < 2}
					onClick={previousHandler}
				>
					&lt; previous
				</button>
			</div>
			<div className="col-6 text-end">
				<button className="btn btn-secondary" onClick={nextHandler}>
					next &gt;
				</button>
			</div>
		</section>
	);
};

export default Controls;
