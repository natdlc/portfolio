import MainProjectsNav from "../components/Works/MainProjectsNav/MainProjectsNav";
import SubProjectsNav from "../components/Works/SubProjectsNav/SubProjectsNav";

const Works = () => {
	return (
		<>
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
