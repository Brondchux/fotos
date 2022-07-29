import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Preview from "./pages/Preview";

const App = () => {
	return (
		<div className="wrapper">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/search/:searched" element={<Home />} />
				<Route path="/preview/:id" element={<Preview />} />
				<Route path="*" element={<Home />} />
			</Routes>
		</div>
	);
};

export default App;
