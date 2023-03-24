import React from "react";
import style from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
	return (
		<header className={style.header}>
			<ul className={style.list}>
				<li className={style.list_item}><NavLink to={'/description'}>О магазине</NavLink></li>
				<li className={style.list_item}><NavLink to={'/payment'}>Оплата и доставка</NavLink></li>
				<li className={style.list_item}><NavLink to={'/contacts'}>Контакты</NavLink></li>
			</ul>
			<ul className={style.links}>
				<li className={style.link}>Vk</li>
				<li className={style.link}>Instagram</li>
				<li className={style.link}>Mail</li>
				<li className={style.link}>Telegram</li>
			</ul>
			<ul className={style.panel}>
				<li className={style.panel_item}>
					<NavLink to={'/catalog'}><img className={style.logo} src='' alt="Логотип"/></NavLink>
				</li>
				<li className={style.panel_item}>
					<input type="text" readOnly/>
					<button>Search</button>
				</li>
				<li className={style.panel_item}><NavLink to={'/favourites'}>Избранное</NavLink></li>
				<li className={style.panel_item}><NavLink to={'/orders'}>Заказы</NavLink></li>
				<li className={style.panel_item}>Войти</li>
				<li className={style.panel_item}><NavLink to={'/basket'}>Корзина</NavLink></li>
			</ul>
		</header>
	)
}

export default Header;