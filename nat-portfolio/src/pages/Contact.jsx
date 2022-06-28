import ContactForm from "../components/Contact/ContactForm/ContactForm";
import ContactHeadline from "../components/Contact/ContactHeadline/ContactHeadline";

const Contact = (props) => {
	const animationController = props.appNavFade ? "element-fade-out" : "";
	return (
		<>
			<div
				className={`element-fade-in ${animationController}`}
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
