import React from "react";

import AddUser from "../User/AddUser";
import styles from './Card.module.css';

const Card = () => {
	return (
		<div className={styles.card}>
			<AddUser />
		</div>
	);
}

export default Card;