import AboutHeadline from "../components/About/AboutHeadline/AboutHeadline";
import ResumeText from "../components/About/ResumeText/ResumeText";

const About = (props) => {
	const animationController = props.appNavFade ? "element-fade-out" : "";
	return (
		<>
			<div
				className={`element-fade-in ${animationController}`}
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "end",
					paddingRight: "1rem",
				}}
			>
				<AboutHeadline />
				<ResumeText />
			</div>
		</>
	);
};

export default About;
