import Nav from "../../../UI/Nav/Nav";

const MainProjectsNav = () => {
	const navMenus = [
		{
			menuName: "Labloco",
			menuLink: "https://labloco.vercel.app",
			target: "_blank",
		},
		{
			menuName: "Planuhin",
			menuLink: "https://natdlc.github.io/todo",
			target: "_blank",
		},
		{
			menuName: "RPS",
			menuLink: "https://natdlc.github.io/rock-paper-scissors/",
			target: "_blank",
		},
	];

	return (
		<>
			<div style={{ position: "relative" }}>
				<Nav menus={navMenus} menuItemClassNames="main-item uppercase" />
				<p className="projects-description">
					... brought to you by countless hours of coding, fueled by a burning
					passion for manipulating things on the web.
				</p>
			</div>
		</>
	);
};

export default MainProjectsNav;
