import {makeAutoObservable} from "mobx";

export default class UserStore {
	constructor() {
		this._isAuth = false
		this._user = {}
		//this function will monitor the state of the variables listed above
		makeAutoObservable(this)
	}
	// This is an "action" function that changes the state
	setIsAuth(bool) {
		this._isAuth = bool
	}
	setUser(user) {
		this._user =user
	}

	//This is a "get" function that is called only when a variable is changed
	get isAuth() {
		return this._isAuth
	}
	get user() {
		return this._user
	}
}