import ContactForm from "../components/Contact/ContactForm/ContactForm";
import ContactHeadline from "../components/Contact/ContactHeadline/ContactHeadline";

const Contact = () => {
	return (
		<>
			<div
				style={{
					margin: "0 auto",
				}}
			>
				<ContactHeadline />
				<ContactForm />
			</div>
		</>
	);
};

export default Contact;
