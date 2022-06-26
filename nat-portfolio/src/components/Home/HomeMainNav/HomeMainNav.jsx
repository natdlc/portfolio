import Nav from "../../../UI/Nav/Nav";
import classes from "./HomeMainNav.module.css";

const HomeMenu = () => {
	const navMenus = [
		{
			menuName: "WORKS",
			menuLink: "https://www.linkedin.com/in/nat-corpuz/",
		},
		{
			menuName: "ABOUT",
			menuLink: "https://twitter.com/corpuz_nat",
		},
		{
			menuName: "CONTACT",
			menuLink: "https://github.com/natdlc",
		},
	];
	return (
		<>
			<Nav
				menuItemClassNames="main-item"
				menus={navMenus}
				menuWrapperClassNames={classes["home-main-wrapper"]}
			/>
		</>
	);
};

export default HomeMenu;
