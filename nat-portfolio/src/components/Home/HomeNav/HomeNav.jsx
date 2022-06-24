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
			menuName: "LinkedIn",
			menuLink: "https://github.com/natdlc",
		},
  ];
  
	return (
		<>
			<Nav menus={navMenus} />
		</>
	);
};

export default HomeNav;
