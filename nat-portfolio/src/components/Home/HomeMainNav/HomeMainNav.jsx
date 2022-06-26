import Nav from "../../../UI/Nav/Nav";
import classes from "./HomeMainNav.module.css";
import { useNavigate } from "react-router-dom";

const HomeMenu = () => {
	const navigate = useNavigate();
	const navMenus = [
		{
			menuName: "WORKS",
			onClick: () => navigate("/works"),
		},
		{
			menuName: "ABOUT",
			onClick: () => navigate("/about"),
		},
		{
			menuName: "CONTACT",
			onClick: () => navigate("/contact"),
		},
	];
	return (
		<>
			<Nav
				style={{ paddingTop: "5rem" }}
				menuItemClassNames="main-item"
				menus={navMenus}
				menuWrapperClassNames={classes["home-main-wrapper"]}
			/>
		</>
	);
};

export default HomeMenu;
