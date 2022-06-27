import Nav from "../../../UI/Nav/Nav";
import classes from "./HomeMainNav.module.css";
import { useNavigate } from "react-router-dom";

const HomeMenu = (props) => {
	const navigate = useNavigate();

	const fadeOutHandler = () => {
		props.setPageLoaded(false);
		props.setPageLeaving(true);
		props.onFadeOut();
	};
	const navMenus = [
		{
			menuName: "WORKS",
			onClick: async () => {
				fadeOutHandler();
				await new Promise((resolve) => setTimeout(resolve, 3000));
				navigate("/works");
			},
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
				menuItemClassNames={`
				${props.pageLeaving && "element-fade-out"}
				${props.pageLoaded && "element-fade-in"} 
				main-item
				`}
				menus={navMenus}
				menuWrapperClassNames={classes["home-main-wrapper"]}
			/>
		</>
	);
};

export default HomeMenu;
