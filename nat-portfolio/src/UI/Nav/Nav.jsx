import { v4 as uuidv4 } from "uuid";

const Nav = (props) => {
	const navMenus = props.menus.map((menu) => {
		const { menuName, menuLink } = menu;
		return (
			<li key={uuidv4()}>
				<a href={menuLink} target="_blank">
					{menuName}
				</a>
			</li>
		);
	});

	return (
		<>
			<ul>{navMenus}</ul>
		</>
	);
};

export default Nav;
