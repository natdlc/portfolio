import { useLocation, useNavigate } from "react-router-dom";
import Nav from "../../UI/Nav/Nav";
import classes from "./AppNav.module.css";

const AppNav = (props) => {
	const navigate = useNavigate();
	const location = useLocation();

	const homeLink = {
		menuName: "Home",
		onClick: () => navigate("/"),
	};

	const worksLink = {
		menuName: "Works",
		onClick: () => navigate("/works"),
	};

	const aboutLink = {
		menuName: "About",
		onClick: () => navigate("/about"),
	};

	const contactLink = {
		menuName: "Contact",
		onClick: () => navigate("/contact"),
	};

	const homeMenu = [
		{
			menuName: "LinkedIn",
			menuLink: "https://www.linkedin.com/in/nat-corpuz/",
			target: "_blank",
		},
		{
			menuName: "Twitter",
			menuLink: "https://twitter.com/corpuz_nat",
			target: "_blank",
		},
		{
			menuName: "GitHub",
			menuLink: "https://github.com/natdlc",
			target: "_blank",
		},
	];

	const worksMenu = [homeLink, aboutLink, contactLink];
	const aboutMenu = [homeLink, worksLink, contactLink];
	const contactMenu = [homeLink, worksLink, aboutLink];

	const path = location.pathname;

	const displayMenus =
		path === "/"
			? homeMenu
			: path === "/works"
			? worksMenu
			: path === "/about"
			? aboutMenu
			: path === "/contact"
			? contactMenu
			: "";

	const animationController = props.appNavFade && classes["app-nav-fade"];
	return (
		<>
			<Nav
				menuWrapperClassNames={`
				${classes["app-nav-menu-wrapper"]}
				${classes["app-nav-fade-in"]}
				${animationController} `}
				menuItemClassNames={classes["app-nav-menu-item-2"]}
				menus={displayMenus}
			/>
		</>
	);
};

export default AppNav;
