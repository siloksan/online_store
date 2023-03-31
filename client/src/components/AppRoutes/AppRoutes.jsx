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
import {nanoid} from 'nanoid'

const AppRoutes = () => {

	const [cards, setCards] = useState([
		{
			id: nanoid(5),
			title: 'Афоня',
			price: 13400,
			description: 'Вязанная игрушка',
			score: 1,
			feedback: 'It\'s the best toy in my life!',
			rating: 4,
		},
		{
			id: nanoid(5),
			title: 'Черубашка',
			price: 140,
			description: 'Вязанная игрушка',
			score: 34,
			feedback: 'It\'s the best toy in my life!',
			rating: 43,
		},
		{
			id: nanoid(5),
			title: 'Пупсик',
			price: 1000,
			description: 'Вязанная игрушка',
			score: 12,
			feedback: 'It\'s the best toy in my life!',
			rating: 43,
		},
		{
			id: nanoid(5),
			title: 'Крот',
			price: 3440,
			description: 'Вязанная игрушка',
			score: 0,
			feedback: 'It\'s the best toy in my life!',
			rating: 34,
		},
		{
			id: nanoid(5),
			title: 'HelloKitchen',
			price: 434,
			description: 'Вязанная игрушка',
			score: 21,
			feedback: 'It\'s the best toy in my life!',
			rating: 34,
		},
		{
			id: nanoid(5),
			title: 'Рок',
			price: 999,
			description: 'Вязанная игрушка',
			score: 12,
			feedback: 'It\'s the best toy in my life!',
			rating: 34,
		},
		{
			id: nanoid(5),
			title: 'Карлик',
			price: 1000,
			description: 'Вязанная игрушка',
			score: 21,
			feedback: 'It\'s the best toy in my life!',
			rating: 43,
		},
		{
			id: nanoid(5),
			title: 'Морковка',
			price: 435,
			description: 'Вязанная игрушка',
			score: 23,
			feedback: 'It\'s the best toy in my life!',
			rating: 32,
		},
		{
			id: nanoid(5),
			title: 'Черубашка',
			price: 45,
			description: 'Вязанная игрушка',
			score: 32,
			feedback: 'It\'s the best toy in my life!',
			rating: 23,
		},
		{
			id: nanoid(5),
			title: 'яблоко',
			price: 546,
			description: 'Вязанная игрушка',
			score: 43,
			feedback: 'It\'s the best toy in my life!',
			rating: 23,
		},
		{
			id: nanoid(5),
			title: 'Слон',
			price: 756,
			description: 'Вязанная игрушка',
			score: 56,
			feedback: 'It\'s the best toy in my life!',
			rating: 50,
		}
	])

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

	return (
		<Routes>
			<Route path='/catalog'
			       element={<Catalog admin={admin} cards={cards} removeToyCard={removeToyCard} sortCards={sortCards}
			                         selectSort={selectSort}/>}></Route>
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