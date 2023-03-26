import React from "react";
import style from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
	return (
		//выбор стиля нужно доработать
		<ul className={props.listColumn ? style.list__column : style.list}>
			<li className={style.list_item}><NavLink to={'/description'}>О магазине</NavLink></li>
			<li className={style.list_item}><NavLink to={'/payment'}>Оплата и доставка</NavLink></li>
			<li className={style.list_item}><NavLink to={'/contacts'}>Контакты</NavLink></li>
		</ul>
	)
}

export default Navbar;