import { authActions } from "./auth-slice";
import { localStorageKey } from "../helper/localStorage";

const remainingTime = 5000; // テストで 5 秒

const authMiddleware = (store) => (next) => (action) => {
	if (authActions.login.match(action)) {
		localStorage.setItem(localStorageKey, action.payload);
		setTimeout(() => {
			next(authActions.logout());
			localStorage.removeItem(localStorageKey);
		}, remainingTime);
	}
	if (authActions.logout.match(action)) {
		localStorage.removeItem(localStorageKey);
	}
	if (authActions.updateIdToken.match(action)) {
		localStorageKey.removeItem(localStorageKey);
		localStorage.setItem(localStorageKey, action.payload);
		setTimeout(() => {
			next(authActions.logout());
			localStorage.removeItem(localStorageKey);
		}, remainingTime);
	}
	return next(action);
};

export default authMiddleware;