import React, {useContext} from "react";
import {Route, Routes} from "react-router-dom";
import Catalog from "../pages/Catalog/Catalog";
import {authRoutes, publicRoutes} from "../../routes";
import {Context} from "../../index";

const AppRoutes = () => {

	const {user} = useContext(Context)

	console.log(user);
	return (
		<Routes>
			{user.isAuth && authRoutes.map(({path, Component}) =>
				<Route key={path} path={path} element={<Component/>} exact/>
				)}
			{publicRoutes.map(({path, Component}) =>
				<Route key={path} path={path} element={<Component/>} exact/>
			)}
			<Route path='*' element={<Catalog/>}/>
		</Routes>
	)

}

export default AppRoutes;