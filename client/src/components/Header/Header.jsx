import React from "react";
import style from './Header.module.css'
import LinksIcons from "../LinkIcons/LinksIcons";
import Navbar from "../Navbar/Navbar";
import WorkPanel from "../WorkPanel/WorkPanel";

const Header = ({cards, setCards}) => {
	return (
		<header className={style.header}>
			<Navbar/>
			<LinksIcons/>
			<WorkPanel cards={cards} setCards={setCards}/>
		</header>
	)
}

export default Header;