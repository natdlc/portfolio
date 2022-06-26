import Nav from "../../../UI/Nav/Nav";

const HomeNav = () => {
	const navMenus = [
		{
			menuName: "LinkedIn",
			menuLink: "https://www.linkedin.com/in/nat-corpuz/",
		},
		{
			menuName: "Twitter",
			menuLink: "https://twitter.com/corpuz_nat",
		},
		{
			menuName: "GitHub",
			menuLink: "https://github.com/natdlc",
		},
	];

	return (
		<>
			<Nav
				menuWrapperClassNames="home-nav-menu-wrapper"
				menuItemClassNames="nav-menu-item-2"
				menus={navMenus}
			/>
		</>
	);
};

export default HomeNav;
