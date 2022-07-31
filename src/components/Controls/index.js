import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../store";

const Controls = () => {
	const dispatch = useDispatch();
	const page = useSelector((state) => state.controls.page);
	const photos = useSelector((state) => state.gallery.photos);

	const nextHandler = () => {
		dispatch(actions.controls.increment());
	};

	const previousHandler = () => {
		dispatch(actions.controls.decrement());
	};

	return (
		<Fragment>
			{photos && photos.length > 0 && (
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
			)}
		</Fragment>
	);
};

export default Controls;
