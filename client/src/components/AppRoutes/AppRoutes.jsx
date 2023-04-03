import React, {useState} from "react";
import {Route, Routes} from "react-router-dom";
import Catalog from "../Catalog/Catalog";
import StoreDescription from "../StoreDescription/StoreDescription";
import AboutPayment from "../Payment/Payment";
import Contacts from "../Contacts/Contacts";
import Favourites from "../Favourites/Favourites";
import Orders from "../Orders/Orders";
import Basket from "../Basket/Basket";
import PageToy from "../PageToy/PageToy";
import AdminPage from "../AdminPage/AdminPage";
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

	return (
		<Routes>
			<Route path='/catalog'
			       element={<Catalog admin={admin}
			                         cards={cards}
			                         removeToyCard={removeToyCard}
			                         sortCards={sortCards}
			                         selectSort={selectSort}/>}>

			</Route>
			<Route path='/admin' element={<AdminPage admin={admin} authAdmin={authAdmin} adminIsOut={adminIsOut} cards={cards}
			                                         addToyCard={addToyCard}/>}></Route>
			<Route path='/pageToy' element={<PageToy admin={admin} cards={cards}/>}></Route>
			<Route path='/description' element={<StoreDescription/>}></Route>
			<Route path='/payment' element={<AboutPayment/>}></Route>
			<Route path='/contacts' element={<Contacts/>}></Route>
			<Route path='/favourites' element={<Favourites/>}></Route>
			<Route path='/orders' element={<Orders/>}></Route>
			<Route path='/basket' element={<Basket/>}></Route>
			{/*<Route path='/example' element={<Example/>}></Route>*/}
		</Routes>
	)
}

export default AppRoutes;