import React from "react";
import style from './Header.module.css'

const Header = () => {
	return (
		<header className={style.header}>
			<ul className={style.list}>
				<li className={style.list_item}>О магазине</li>
				<li className={style.list_item}>Оплата и доставка</li>
				<li className={style.list_item}>Контакты</li>
				<li className={style.list_item}>Иконки соц сетей</li>
			</ul>
			<ul className={style.panel}>
				<li className={style.panel_item}>Store_logo</li>
				<li className={style.panel_item}>Search</li>
				<li className={style.panel_item}>Избранное</li>
				<li className={style.panel_item}>Заказы</li>
				<li className={style.panel_item}>Войти</li>
				<li className={style.panel_item}>Корзина</li>
			</ul>
		</header>
	)
}

export default Header;