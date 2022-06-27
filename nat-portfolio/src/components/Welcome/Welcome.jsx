import classes from "./Welcome.module.css";

const Welcome = () => {
	return (
		<>
			<div className={classes["welcome-wrapper"]}>
				<p className={classes.welcome}>welcome</p>
			</div>
		</>
	);
};

export default Welcome;
