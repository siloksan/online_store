import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
	return (
		<footer className={style.footer}>
			<ul className={style.list}>
				<li className={style.list_item}>О магазине</li>
				<li className={style.list_item}>Оплата и доставка</li>
				<li className={style.list_item}>Контакты</li>
				<li className={style.list_item}>+920126....</li>
			</ul>
			<img className={style.logo} src=' ' alt="Логотип"/>
			<ul className={style.links}>
				<li className={style.link}>Vk</li>
				<li className={style.link}>Instagram</li>
				<li className={style.link}>Mail</li>
				<li className={style.link}>Telegram</li>
			</ul>
		</footer>
	)
}

export default Footer;