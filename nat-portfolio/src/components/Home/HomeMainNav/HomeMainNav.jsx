import Nav from "../../../UI/Nav/Nav";
import classes from "./HomeMainNav.module.css";

const HomeMenu = (props) => {
	const navMenus = [
		{
			menuName: "WORKS",
			onClick: (e) => {
				e.preventDefault();
				props.onSetPage("works");
			},
		},
		{
			menuName: "ABOUT",
			onClick: (e) => {
				e.preventDefault();
				props.onSetPage("about");
			},
		},
		{
			menuName: "CONTACT",
			onClick: (e) => {
				e.preventDefault();
				props.onSetPage("contact");
			},
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
