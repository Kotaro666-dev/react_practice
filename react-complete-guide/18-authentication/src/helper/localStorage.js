export const localStorageKey = 'idToken';
export const initialIdTokenValue = localStorage.getItem(localStorageKey);

export const calculateRemainingTime = (expirationTime) => {
	const currentTime = new Date().getTime();
	const adjustedExpirationTime = new Date(expirationTime).getTime();

	const remainingDuration = adjustedExpirationTime - currentTime;

	return remainingDuration;
}