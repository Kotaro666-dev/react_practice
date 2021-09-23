import { useEffect, useState } from "react";

const useCounter = (doForward = true) => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
		if (doForward) {
			setCounter((prevCounter) => prevCounter + 1);
		} else {
			setCounter((prevCounter) => prevCounter - 1);
		}

	}, 1000);

	return () => clearInterval(interval);
	}, [doForward]);

	return counter;
};

export default useCounter;