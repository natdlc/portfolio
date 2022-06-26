import Nav from "../../../UI/Nav/Nav";

const WorksNav = () => {
	const navMenus = [
		{
			menuName: "Home",
		},
		{
			menuName: "About",
		},
		{
			menuName: "Contact",
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

export default WorksNav;
