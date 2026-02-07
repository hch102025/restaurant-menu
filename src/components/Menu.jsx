// Imports
import Dish from "./Dish";
import styles from "../styles/Menu.module.css";
// -------------------------------------------------------------------------------------------------

function Menu({ menu }) {
	return (
		<div className={styles.menu}>
			{/* Loops through the object array and returns a Dish card component every loop*/}
			{menu.map((dish) => {
				return <Dish dish={dish} key={menu.id} />;
			})}
		</div>
	);
}

export default Menu;
