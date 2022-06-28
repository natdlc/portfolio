import Nav from "../../../UI/Nav/Nav";

const SubProjectsNav = () => {
	const navMenus = [
		{
			menuName: "Etch-a-sketch",
			menuLink: "https://natdlc.github.io/etch-a-sketch/",
			target: "_blank",
		},
		{
			menuName: "Calculator",
			menuLink: "https://natdlc.github.io/calculator/",
			target: "_blank",
		},
		{
			menuName: "Tic-tac-toe",
			menuLink: "https://natdlc.github.io/tictactoe/",
			target: "_blank",
		},
	];

	return (
		<>
			<div
				className="element-fade-in"
				style={{ position: "relative", maxWidth: "200px", paddingTop: "6rem" }}
			>
				<Nav
					menus={navMenus}
					menuItemClassNames="sub-projects-nav-item main-nav-transition"
					menuWrapperClassNames="sub-projects-nav-wrapper"
				/>
				<p className="sub-projects-description">
					...fun bite-sized projects when I was learning the ropes.
				</p>
			</div>
		</>
	);
};

export default SubProjectsNav;
