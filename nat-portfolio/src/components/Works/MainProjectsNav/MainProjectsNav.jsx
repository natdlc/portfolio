import Nav from "../../../UI/Nav/Nav";

const MainProjectsNav = () => {
	const navMenus = [
		{
			menuName: "Labloco",
			menuLink: "https://labloco.vercel.app",
			target: "_blank",
		},
		{
			menuName: "Planner",
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
			<div
				className="element-fade-in"
				style={{
					position: "relative",
					width: "fit-content",
					paddingTop: "5rem",
				}}
			>
				<Nav
					menus={navMenus}
					menuItemClassNames="main-item uppercase main-nav-transition"
				/>
				<p className="projects-description">
					... brought to you by countless hours of coding, fueled by a burning
					passion for manipulating things on the web.
				</p>
			</div>
		</>
	);
};

export default MainProjectsNav;
