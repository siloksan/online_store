import React, {useState} from "react";
import {Route, Routes} from "react-router-dom";
import Catalog from "../Catalog/Catalog";
import StoreDescription from "../pages/StoreDescription/StoreDescription";
import AboutPayment from "../pages/Payment/Payment";
import Contacts from "../pages/Contacts/Contacts";
import Favourites from "../Favourites/Favourites";
import Orders from "../pages/Orders/Orders";
import Basket from "../pages/Basket/Basket";
import PageToy from "../pages/PageToy/PageToy";
import AdminPage from "../pages/AdminPage/AdminPage";
import Auth from "../pages/Auth/Auth";
import {authRoutes, publicRoutes} from "../../routes";
// import Example from "../Example/Example";

const AppRoutes = ({
	                   cards,
	                   addToyCard,
	                   removeToyCard,
	                   selectSort,
	                   sortCards
                   }) => {

	const [admin, setAdmin] = useState(false)

	const authAdmin = () => {
		setAdmin(true)
	}

	const adminIsOut = () => {
		setAdmin(false)
	}

	const isAuth = true

	return (
		<Routes>
			{isAuth && authRoutes.map(({path, Component}) =>
				<Route key={path} path={path} element={<Component/>} exact/>
				)}
			{publicRoutes.map(({path, Component}) =>
				<Route key={path} path={path} element={<Component/>} exact/>
			)}
			<Route path='*' element={<Catalog/>}/>
			{/*<Route path='/example' element={<Example/>}></Route>*/}
		</Routes>
	)

	// return (
	// 	<Routes>
	// 		<Route path='/catalog'
	// 		       element={<Catalog admin={admin}
	// 		                         cards={cards}
	// 		                         removeToyCard={removeToyCard}
	// 		                         sortCards={sortCards}
	// 		                         selectSort={selectSort}/>}>
	//
	// 		</Route>
	// 		<Route path='/admin' element={<AdminPage admin={admin} authAdmin={authAdmin} adminIsOut={adminIsOut} cards={cards}
	// 		                                         addToyCard={addToyCard}/>}></Route>
	// 		<Route path='/product' element={<PageToy admin={admin} cards={cards}/>}></Route>
	// 		<Route path='/login' element={<Auth/>}></Route>
	// 		<Route path='/registration' element={<Auth/>}></Route>
	// 		<Route path='/description' element={<StoreDescription/>}></Route>
	// 		<Route path='/payment' element={<AboutPayment/>}></Route>
	// 		<Route path='/contacts' element={<Contacts/>}></Route>
	// 		<Route path='/favourites' element={<Favourites/>}></Route>
	// 		<Route path='/orders' element={<Orders/>}></Route>
	// 		<Route path='/basket' element={<Basket/>}></Route>
	// 		{/*<Route path='/example' element={<Example/>}></Route>*/}
	// 	</Routes>
	// )
}

export default AppRoutes;