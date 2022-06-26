import classes from "./Nav.module.css";
import { v4 as uuidv4 } from "uuid";

console.log(classes);
const Nav = (props) => {
	const navMenus = props.menus.map((menu) => {
		const { menuName, menuLink } = menu;
		return (
			<li
				className={`${classes.menuItem} ${props.menuItemClassNames || ""}`}
				key={uuidv4()}
			>
				<a href={menuLink} target="_blank" rel="noreferrer">
					{menuName}
				</a>
			</li>
		);
	});

	return (
		<>
			<ul
				className={`${classes.menuWrapper} ${props.menuWrapperClassNames || ""}`}
			>
				{navMenus}
			</ul>
		</>
	);
};

export default Nav;
