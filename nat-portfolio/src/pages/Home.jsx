import HomeHeadline from "../components/Home/HomeHeadline/HomeHeadline";
import HomeMainNav from "../components/Home/HomeMainNav/HomeMainNav";
import HomeNav from "../components/Home/HomeNav/HomeNav";
const Home = () => {
	return (
		<div className="home-wrapper">
			<HomeNav />
			<HomeHeadline />
			<HomeMainNav />
		</div>
	);
};

export default Home;
