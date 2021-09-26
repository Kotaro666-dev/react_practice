import { useRef , useState} from 'react';

import classes from './Checkout.module.css'

const isNotEmpty = (value) => value.trim().length !== 0;
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
	const [formInputValidity, setFormInputValidtity] = useState({
		name: true,
		street: true,
		postalCode: true,
		city: true,
	});

	const nameInputRef = useRef();
	const streetInputRef = useRef();
	const postalCodeInputRef = useRef();
	const cityInputRef = useRef();

	const confirmHandler = (event) => {
		event.preventDefault();

		const enteredName = nameInputRef.current.value;
		const enteredStreet = streetInputRef.current.value;
		const enteredPostalCode = postalCodeInputRef.current.value;
		const enteredCity = cityInputRef.current.value;

		const isNameValid = isNotEmpty(enteredName);
		const isStreetValid = isNotEmpty(enteredStreet);
		const isPostalCodeValid = isFiveChars(enteredPostalCode);
		const isCityValid = isNotEmpty(enteredCity);

		setFormInputValidtity({
			name: isNameValid,
			street: isStreetValid,
			postalCode: isPostalCodeValid,
			city: isCityValid,
		});

		const isFormValid = (isNameValid && isStreetValid && isPostalCodeValid && isCityValid);

		if (!isFormValid) {
			return ;
		}

		const userData = {
			name: enteredName,
			street: enteredStreet,
			postalCode: enteredPostalCode,
			city: enteredCity,
		}

		props.onConfirm(userData);
	}

	const nameControleClass = `${classes.control} ${!formInputValidity.name ? classes.invalid : ''}`;
	const streetControleClass = `${classes.control} ${!formInputValidity.street ? classes.invalid : ''}`;
	const postalCodeControleClass = `${classes.control} ${!formInputValidity.postalCode ? classes.invalid : ''}`;
	const cityControleClass = `${classes.control} ${!formInputValidity.city ? classes.invalid : ''}`;

	return (
		<form className={classes.form} onSubmit={confirmHandler}>
			<div className={nameControleClass}>
				<label htmlFor='name'>Your Name</label>
				<input type='text' id='name' ref={nameInputRef} />
				{!formInputValidity.name && <p className={classes.error_message}>Please enter a valid name.</p>}
			</div>
			<div className={streetControleClass}>
				<label htmlFor='street'>Street</label>
				<input type='text' id='street' ref={streetInputRef} />
				{!formInputValidity.street && <p className={classes.error_message}>Please enter a valid street.</p>}
			</div>
			<div className={postalCodeControleClass}>
				<label htmlFor='postal'>Postal Code</label>
				<input type='text' id='postal' ref={postalCodeInputRef} />
				{!formInputValidity.postalCode && <p className={classes.error_message}>Please enter a valid postal code.</p>}
			</div>
			<div className={cityControleClass}>
				<label htmlFor='city'>City</label>
				<input type='text' id='city' ref={cityInputRef} />
				{!formInputValidity.city && <p className={classes.error_message}>Please enter a valid city.</p>}
			</div>
			<div className={classes.actions}>
				<button type='button' onClick={props.onCancel}>
					Cancel
				</button>
				<button className={classes.submit}>Confirm</button>
			</div>
		</form>
	);
};

export default Checkout;