import { v4 as uuidv4 } from "uuid";

const Nav = (props) => {
	const navMenus = props.menus.map((menu) => {
		const { menuName, menuLink, target, onClick } = menu;
		return (
			<li className={`${props.menuItemClassNames || ""}`} key={uuidv4()}>
				<a
					style={{ cursor: "pointer" }}
					href={menuLink}
					target={target}
					onClick={onClick}
					rel="noreferrer"
				>
					{menuName}
				</a>
			</li>
		);
	});

	return (
		<>
			<ul
				style={props.style}
				className={`${props.menuWrapperClassNames || ""}`}
			>
				{navMenus}
			</ul>
		</>
	);
};

export default Nav;
