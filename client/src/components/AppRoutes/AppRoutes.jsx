import React from "react";
import {Route, Routes} from "react-router-dom";
import Catalog from "../Catalog/Catalog";
import StoreDescription from "../StoreDescription/StoreDescription";
import AboutPayment from "../Payment/Payment";
import Contacts from "../Contacts/Contacts";
import Favourites from "../Favourites/Favourites";
import Orders from "../Orders/Orders";
import Basket from "../Basket/Basket";
import PageToy from "../PageToy/PageToy";

const AppRoutes = () => {
	return (
			<Routes>
				<Route path='/catalog' element={<Catalog/>}></Route>
				<Route path='/pageToy' element={<PageToy/>}></Route>
				<Route path='/description' element={<StoreDescription/>}></Route>
				<Route path='/payment' element={<AboutPayment/>}></Route>
				<Route path='/contacts' element={<Contacts/>}></Route>
				<Route path='/favourites' element={<Favourites/>}></Route>
				<Route path='/orders' element={<Orders/>}></Route>
				<Route path='/basket' element={<Basket/>}></Route>
			</Routes>
	)
}

export default AppRoutes;