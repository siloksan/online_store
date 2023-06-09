import React from "react";
import style from "./WorkPanel.module.css";
import {NavLink} from "react-router-dom";
import Search from "../Header/Search/Search";

const WorkPanel = ({setSearchQuery, searchQuery}) => {
	return (
		<div className={style.panel}>
			<div className={style.panel_item}>
				<NavLink to={'/catalog'}><img className={style.logo} src='' alt="Логотип"/></NavLink>
			</div>
			<Search setSearchQuery={setSearchQuery} searchQuery={searchQuery}/>
			<div className={style.panel_item}><NavLink to={'/favourites'}>Избранное</NavLink></div>
			<div className={style.panel_item}><NavLink to={'/orders'}>Заказы</NavLink></div>
			<div className={style.panel_item}><NavLink to={'/admin'}>Войти</NavLink></div>
			<div className={style.panel_item}><NavLink to={'/basket'}>Корзина</NavLink></div>
		</div>
	)
}

export default WorkPanel;