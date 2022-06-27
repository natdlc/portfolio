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
	const [appNavFadeOut, setAppNavFadeOut] = useState(false);

	const playWelcomeAnimation = async () => {
		setLoaded(false);
		await new Promise((resolve) => setTimeout(resolve, 2000));
		setLoaded(true);
	};

	useEffect(() => {
		playWelcomeAnimation();
	}, []);

	const onFadeOutHandler = () => {
		setAppNavFadeOut(true);
	};

	const mainView = (
		<Router>
			<AppNav appNavFadeOut={appNavFadeOut} />
			<Routes>
				<Route path="/" element={<Home onFadeOut={onFadeOutHandler} />} />
				<Route path="/works" element={<Works />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</Router>
	);

	const welcomeViewer = loaded ? mainView : <Welcome />;

	return <>{welcomeViewer}</>;
}

export default App;
