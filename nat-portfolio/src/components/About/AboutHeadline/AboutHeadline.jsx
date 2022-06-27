import classes from "./AboutHeadline.module.css";

const AboutHeadline = () => {
	return (
		<>
			<div className={classes["about-wrapper"]}>
				<h1 className="main-item">Hi, I'm Nat</h1>
				<p className={classes["about-description"]}>
					I'm a Web Developer from the Philippines.
				</p>
				<p className={classes["about-description"]}>
					I've been coding since December 2021. I do it simply because it's what
					my heart and soul wants.
				</p>
			</div>
		</>
	);
};

export default AboutHeadline;
