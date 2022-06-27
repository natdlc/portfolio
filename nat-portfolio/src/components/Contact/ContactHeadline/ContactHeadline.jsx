import classes from "./ContactHeadline.module.css";

const ContactHeadline = () => {
	return (
		<>
			<div style={{ paddingTop: "1.5rem" }}>
				<h1 className="main-item">CONTACT</h1>
				<p className={classes["contact-headline_description"]}>
					If you need a website for your business, interested in hiring me, or
					just want to reach out, please feel free to send me an email through
					the form below.
				</p>
			</div>
		</>
	);
};

export default ContactHeadline;
