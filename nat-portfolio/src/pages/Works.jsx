import MainProjectsNav from "../components/Works/MainProjectsNav/MainProjectsNav";
import SubProjectsNav from "../components/Works/SubProjectsNav/SubProjectsNav";

const Works = (props) => {
	const fadeOutController = props.appNavFade ? "element-fade-out" : "";

	return (
		<>
			<div className={fadeOutController}>
				<MainProjectsNav />
				<SubProjectsNav />
			</div>
		</>
	);
};

export default Works;
