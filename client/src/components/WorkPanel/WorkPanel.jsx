import React, {useContext, useState} from "react";
import style from "./WorkPanel.module.css";
import {NavLink} from "react-router-dom";
import Search from "../Header/Search/Search";
import {BASKET_ROUTE, FAVORITES_ROUTE, LOGIN_ROUTE, ORDERS_ROUTE} from "../../utils/const";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

const WorkPanel = observer(() => {
	const {user} = useContext(Context)


	return (
		<div className={style.panel}>
			<div className={style.panel_item}>
				<NavLink to={'/catalog'}><img className={style.logo} src='' alt="Логотип"/></NavLink>
			</div>
			<Search/>
			{user.isAuth ?
				<div className={style.panel_items}>
					<div className={style.panel_item}><NavLink to={FAVORITES_ROUTE}>Избранное</NavLink></div>
					<div className={style.panel_item}><NavLink to={ORDERS_ROUTE}>Заказы</NavLink></div>
					<div className={style.panel_item}><NavLink to={LOGIN_ROUTE}>User name</NavLink></div>
					<div className={style.panel_item}><NavLink to={BASKET_ROUTE}>Корзина</NavLink></div>
				</div>
				:
				<div className={style.panel_items}>
					<div className={style.panel_item}><NavLink to={LOGIN_ROUTE} onClick={() => user.setIsAuth(true)}>Войти</NavLink></div>
				</div>
			}
		</div>
	)
})

export default WorkPanel;