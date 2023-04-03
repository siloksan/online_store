import React from "react";
import style from './Header.module.css'
import LinksIcons from "../LinkIcons/LinksIcons";
import Navbar from "../Navbar/Navbar";
import WorkPanel from "../WorkPanel/WorkPanel";

const Header = ({setSearchQuery, searchQuery}) => {
	return (
		<header className={style.header}>
			<Navbar/>
			<LinksIcons/>
			<WorkPanel setSearchQuery={setSearchQuery} searchQuery={searchQuery}/>
		</header>
	)
}

export default Header;