import classes from "./ContactForm.module.css";

const ContactForm = () => {
	return (
		<>
			<div
				className={classes["contact-form-wrapper"]}
			>
				<div className={classes["input-control-wrapper"]}>
					<input
						className={classes["input-control"]}
						placeholder="Name"
						type="text"
					/>
				</div>
				<div className={classes["input-control-wrapper"]}>
					<input
						className={classes["input-control"]}
						placeholder="Email"
						type="email"
					/>
				</div>
				<div className={classes["input-control-wrapper"]}>
					<input
						className={classes["input-control"]}
						placeholder="Subject"
						type="text"
					/>
				</div>
				<div className={classes["input-control-wrapper"]}>
					<textarea placeholder="Message" />
				</div>
				<button>Submit</button>
			</div>
		</>
	);
};

export default ContactForm;
