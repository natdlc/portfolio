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
					I started coding in 2020. I have 7 cats and 1 dog. When I don't write code, I play video games, watch Netflix, or go for a walk outside.
				</p>
			</div>
		</>
	);
};

export default AboutHeadline;
