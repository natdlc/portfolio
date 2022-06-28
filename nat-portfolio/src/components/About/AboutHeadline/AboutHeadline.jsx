import classes from "./AboutHeadline.module.css";

const AboutHeadline = () => {
	return (
		<>
			<div className={classes["about-wrapper"]}>
				<h1 className="main-item">Hi, I'm Nat</h1>
				<p className={classes["about-description"]}>
					A Web Developer from the Philippines.
				</p>
				<p className={classes["about-description"]}>
					Started coding in 2020. Has 7 cats and 1 dog. Plays PC games when not
					coding.
				</p>
			</div>
		</>
	);
};

export default AboutHeadline;
