import Home from "./pages/Home";
import Works from "./pages/Works";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AppNav from "./components/AppNav/AppNav";
import Welcome from "./components/Welcome/Welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
	const [loaded, setLoaded] = useState(false);
	const [appNavFade, setAppNavFade] = useState(false);

	const playWelcomeAnimation = async () => {
		setLoaded(false);
		await new Promise((resolve) => setTimeout(resolve, 4000));
		setLoaded(true);
	};

	useEffect(() => {
		playWelcomeAnimation();
	}, []);

	const onAppNavFadeHandler = (selection) => {
		setAppNavFade(selection);
	};

	const mainView = (
		<Router>
			<AppNav appNavFade={appNavFade} setAppNavFade={setAppNavFade} />
			<Routes>
				<Route path="/" element={<Home onAppNavFade={onAppNavFadeHandler} />} />
				<Route path="/works" element={<Works appNavFade={appNavFade} />} />
				<Route path="/about" element={<About appNavFade={appNavFade} />} />
				<Route path="/contact" element={<Contact appNavFade={appNavFade} />} />
			</Routes>
		</Router>
	);

	const welcomeViewer = loaded ? mainView : <Welcome />;

	return <>{welcomeViewer}</>;
}

export default App;
