import Home from "./pages/Home";
import Works from "./pages/Works";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AppNav from "./components/AppNav/AppNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Router>
				<AppNav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/works" element={<Works />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
