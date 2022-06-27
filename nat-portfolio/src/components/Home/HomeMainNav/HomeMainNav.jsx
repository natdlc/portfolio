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
