import { authActions } from "./auth-slice";
import { localStorageIdTokenKey, localStorageTimoutTimerKey } from "../helper/localStorage";

const remainingTime = 5000; // テストで 5 秒

const setAutoLogout = (next) => {
	const logoutTimer = setTimeout(() => {
		next(authActions.logout());
		localStorage.removeItem(localStorageIdTokenKey);
		const logoutTimer = localStorage.getItem(localStorageTimoutTimerKey);
		clearTimeout(logoutTimer);
		localStorage.removeItem(localStorageTimoutTimerKey);
	}, remainingTime);
	localStorage.setItem(localStorageTimoutTimerKey, logoutTimer);
}

const authMiddleware = (store) => (next) => (action) => {
	if (authActions.login.match(action)) {
		localStorage.setItem(localStorageIdTokenKey, action.payload);
		setAutoLogout(next);
	}

	if (authActions.logout.match(action)) {
		localStorage.removeItem(localStorageIdTokenKey);
		const logoutTimer = localStorage.getItem(localStorageTimoutTimerKey);
		clearTimeout(logoutTimer);
		localStorage.removeItem(localStorageTimoutTimerKey);
	}

	if (authActions.updateIdToken.match(action)) {
		localStorage.removeItem(localStorageIdTokenKey);
		localStorage.removeItem(localStorageTimoutTimerKey);
		localStorage.setItem(localStorageIdTokenKey, action.payload);
		setAutoLogout(next);
	}
	return next(action);
};

export default authMiddleware;