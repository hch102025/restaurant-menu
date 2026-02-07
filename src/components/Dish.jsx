// Imports
import styles from "../styles/Dish.module.css";
// ------------------------------------------------------------------------

function Dish({ dish: { tittel, pris, ingredienser, kategori } }) {
	return (
		<div className={styles.dish}>
			<h2>{tittel}</h2>
			<h3>{pris}</h3>
			<p>{ingredienser}</p>
			<h4>{kategori}</h4>
		</div>
	);
}

export default Dish;
