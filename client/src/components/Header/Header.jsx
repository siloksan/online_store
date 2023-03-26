import React from "react";
import style from './Header.module.css'
import LinksIcons from "../LinkIcons/LinksIcons";
import Navbar from "../Navbar/Navbar";
import WorkPanel from "../WorkPanel/WorkPanel";

const Header = () => {
	return (
		<header className={style.header}>
			<Navbar/>
			<LinksIcons/>
			<WorkPanel/>
		</header>
	)
}

export default Header;