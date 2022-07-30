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
		<section className="row my-3">
			<div className="col-6">
				<button
					className="btn btn-secondary circle"
					disabled={page < 2}
					onClick={previousHandler}
				>
					&lt;
				</button>
			</div>
			<div className="col-6 text-end">
				<button className="btn btn-secondary circle" onClick={nextHandler}>
					&gt;
				</button>
			</div>
		</section>
	);
};

export default Controls;
