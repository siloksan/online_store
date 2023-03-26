import React from "react";
import style from "./Footer.module.css";
import LinksIcons from "../LinkIcons/LinksIcons";
import Navbar from "../Navbar/Navbar";

const Footer = () => {
	return (
		<footer className={style.footer}>
			<Navbar listColumn/>
			<img className={style.logo} src='' alt="Логотип"/>
			<LinksIcons/>
		</footer>
	)
}

export default Footer;