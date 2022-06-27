import classes from "./HomeHeadline.module.css";

const HomeHeadline = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				paddingTop: "5rem",
				maxWidth: "400px",
			}}
		>
			<h4 className={classes["home-headline-name"]}>Nathanel Corpuz</h4>
			<h2 className={classes["home-headline-title"]}>Web Developer</h2>
			<h5 className={classes["home-headline-description"]}>
				Passionate in creating well-designed and professional websites for
				businesses.
			</h5>
		</div>
	);
};

export default HomeHeadline;
