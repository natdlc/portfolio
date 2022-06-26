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
			<div style={{ position: "relative", maxWidth: "200px" }}>
				<Nav
					menus={navMenus}
					menuItemClassNames="sub-projects-nav-item"
					menuWrapperClassNames="sub-projects-nav-wrapper"
				/>
				<p className="sub-projects-description">
					...fun bite-sized projects from when I was learning the ropes in
					coding.
				</p>
			</div>
		</>
	);
};

export default SubProjectsNav;
