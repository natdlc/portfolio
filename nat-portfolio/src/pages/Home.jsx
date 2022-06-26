import HomeHeadline from "../components/Home/HomeHeadline/HomeHeadline";
import HomeMainNav from "../components/Home/HomeMainNav/HomeMainNav";
import HomeNav from "../components/Home/HomeNav/HomeNav";
const Home = (props) => {
	return (
		<div className="home-wrapper">
			<HomeNav />
			<HomeHeadline />
			<HomeMainNav onSetPage={props.onSetPage} />
		</div>
	);
};

export default Home;
