import AboutHeadline from "../components/About/AboutHeadline/AboutHeadline";
import ResumeText from "../components/About/ResumeText/ResumeText";

const About = () => {
	return (
		<>
			<div style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "end",
				paddingRight: "1rem"
			}}>
				<AboutHeadline />
				<ResumeText />
			</div>
		</>
	);
};

export default About;
