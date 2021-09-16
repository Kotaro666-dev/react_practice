import React from "react";

import styles from './Button.module.css'

const Button = (props) => {
	return (
		<button type="submit" className={styles.button} onClick={props.onTapButton}>Add User</button>
	);
}

export default Button;