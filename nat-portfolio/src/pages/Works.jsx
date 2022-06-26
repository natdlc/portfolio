import MainProjectsNav from "../components/Works/MainProjectsNav/MainProjectsNav";
import SubProjectsNav from "../components/Works/SubProjectsNav/SubProjectsNav";
import WorksNav from "../components/Works/WorksNav/WorksNav";

const Works = () => {
	return (
		<>
			<WorksNav />
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-around",
					height: "80vh",
				}}
			>
				<MainProjectsNav />
				<SubProjectsNav />
			</div>
		</>
	);
};

export default Works;
