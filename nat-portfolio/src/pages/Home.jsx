import { useState } from "react";
import HomeHeadline from "../components/Home/HomeHeadline/HomeHeadline";
import HomeMainNav from "../components/Home/HomeMainNav/HomeMainNav";
const Home = (props) => {
	const [pageLoaded, setPageLoaded] = useState(true);
	const [pageLeaving, setPageLeaving] = useState(false);

	return (
		<div className="home-wrapper">
			<HomeHeadline
				setPageLoaded={setPageLoaded}
				setPageLeaving={setPageLeaving}
				pageLoaded={pageLoaded}
				pageLeaving={pageLeaving}
			/>
			<HomeMainNav
				setPageLoaded={setPageLoaded}
				setPageLeaving={setPageLeaving}
				pageLoaded={pageLoaded}
				pageLeaving={pageLeaving}
				onFadeOut={props.onFadeOut}
			/>
		</div>
	);
};

export default Home;
