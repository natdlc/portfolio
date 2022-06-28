import Nav from "../../../UI/Nav/Nav";
import classes from "./HomeMainNav.module.css";
import { useNavigate } from "react-router-dom";

const HomeMenu = (props) => {
	const navigate = useNavigate();

	const appNavFadeHandler = () => {
		props.setPageLoaded(false);
		props.setPageLeaving(true);
		props.onAppNavFade(true);
	};
	const navMenus = [
		{
			menuName: "WORKS",
			onClick: async () => {
				appNavFadeHandler();
				await new Promise((resolve) => setTimeout(resolve, 2000));
				navigate("/works");
				props.onAppNavFade(false);
			},
		},
		{
			menuName: "ABOUT",
			onClick: async () => {
				appNavFadeHandler();
				await new Promise((resolve) => setTimeout(resolve, 2000));
				navigate("/about");
				props.onAppNavFade(false);
			},
		},
		{
			menuName: "CONTACT",
			onClick: async () => {
				appNavFadeHandler();
				await new Promise((resolve) => setTimeout(resolve, 2000));
				navigate("/contact");
				props.onAppNavFade(false);
			},
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
				main-nav-transition
				`}
				menus={navMenus}
				menuWrapperClassNames={classes["home-main-wrapper"]}
			/>
		</>
	);
};

export default HomeMenu;
