import { useState } from "react";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Works from "./pages/Works";

function App() {
	const [page, setPage] = useState("home");

	const setPageHandler = (pageSelection) => {
		setPage(pageSelection);
	};

	const currentPage =
		page === "home" ? (
			<Home onSetPage={setPageHandler} />
		) : page === "works" ? (
			<Works onSetPage={setPageHandler} />
		) : page === "contact" ? (
			<Contact onSetPage={setPageHandler} />
		) : (
			""
		);
	return <>{currentPage}</>;
}

export default App;
