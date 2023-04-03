import React from "react";
import style from "./Footer.module.css";
import LinksIcons from "../LinkIcons/LinksIcons";
import Navbar from "../Navbar/Navbar";
import {NavLink} from "react-router-dom";

const Footer = () => {
	return (
		<footer className={style.footer}>
			<Navbar listColumn/>
			<NavLink to={'/example'}><img className={style.logo} src='' alt="Логотип"/></NavLink>
			<LinksIcons/>
		</footer>
	)
}

export default Footer;