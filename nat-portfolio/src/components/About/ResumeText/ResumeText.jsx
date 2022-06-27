import classes from "./ResumeText.module.css";

const ResumeText = () => {
	return (
		<>
			<div style={{paddingTop: "5rem", width: "150px", textAlign: "end"}}>
				<p className={classes["resume-description"]}>
					If you're interested in knowing about my technical skills and
					professional experience, you can check my resume in the link below.
				</p>
				<a
					className={classes["resume-link"]}
					rel="noreferrer"
					target="_blank"
					href="https://drive.google.com/file/d/15qfac6RL8nSK7NhgL_0nxLyO1R7NZR5P/view"
				>
					My Resume
				</a>
			</div>
		</>
	);
};

export default ResumeText;
