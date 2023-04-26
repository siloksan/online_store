import React from 'react';
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../../../utils/const";
import style from "./Auth.module.css";
import MyInput from "../../common/MyInput/MyInput";
import MyButton from "../../common/MyButton/MyButton";

const Auth = () => {

	const location = useLocation()
	const isLogin = location.pathname === LOGIN_ROUTE

	return (
		<form className={style.form}>
			<h2>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
			<MyInput type='text' placeholder="e-mail"></MyInput>
			<MyInput type='text' placeholder="password"></MyInput>
			<div>Запомнить<MyInput type='checkbox'/></div>
			<MyButton>{isLogin ? 'Войти' : 'Зарегистрироваться'}</MyButton>
			{isLogin ?
				<NavLink to={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink> :
				<NavLink to={LOGIN_ROUTE}>Войти</NavLink>
				}
		</form>
	);
};

export default Auth;