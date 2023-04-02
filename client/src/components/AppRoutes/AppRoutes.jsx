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

const AppRoutes = ({cards, setCards}) => {

	const [admin, setAdmin] = useState(false)

	const authAdmin = () => {
		setAdmin(true)
	}

	const adminIsOut = () => {
		setAdmin(false)
	}

	const addToyCard = (newToyCar) => {
		setCards([...cards, newToyCar])
	}

	const removeToyCard = (id) => {
		setCards(cards.filter(el => el.id !== id))
	}

	const [selectSort, setSelectSort] = useState('')

	const sortCards = (sort) => {
		setSelectSort(sort)
		switch (sort) {
			case 'priceIncrease':
				sort = 'price'
				return setCards([...cards].sort((a, b) => a[sort] - b[sort]))
			case 'title':
				return setCards([...cards].sort((a, b) => a[sort].localeCompare(b[sort])))
			default:
				return setCards([...cards].sort((a, b) => b[sort] - a[sort]))
		}
	}
	//sorting don't work yet

	const filterByPrice = (limit) => {
		setCards([...cards].filter(el => (el.price >= limit.min && el.price <= limit.min)))
	}
	return (
		<Routes>
			<Route path='/catalog'
			       element={<Catalog admin={admin} cards={cards} removeToyCard={removeToyCard} sortCards={sortCards}
			                         selectSort={selectSort} filterByPrice={filterByPrice}/>}></Route>
			<Route path='/admin' element={<AdminPage admin={admin} authAdmin={authAdmin} adminIsOut={adminIsOut} cards={cards}
			                                         addToyCard={addToyCard}/>}></Route>
			<Route path='/pageToy' element={<PageToy admin={admin} cards={cards}/>}></Route>
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