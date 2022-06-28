import classes from "./ContactForm.module.css";

const ContactForm = () => {
	const submitHandler = (e) => {
		e.preventDefault();
	};
	return (
		<>
			<form
				onSubmit={submitHandler}
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
						required
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
					<textarea placeholder="Message" required/>
				</div>
				<button>Submit</button>
			</form>
		</>
	);
};

export default ContactForm;
