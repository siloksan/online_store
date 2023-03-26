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

const AppRoutes = () => {

	const [cards, setCards] = useState([
		{
			id: 1,
			title: 'Черубашка',
			price: 1000,
			description: 'Вязанная игрушка',
			score: 0,
			feedback: 'It\'s the best toy in my life!',
			rating: 0,
		},
		{
			id: 2,
			title: 'Черубашка',
			price: 1000,
			description: 'Вязанная игрушка',
			score: 0,
			feedback: 'It\'s the best toy in my life!',
			rating: 0,
		},
		{
			id: 3,
			title: 'Черубашка',
			price: 1000,
			description: 'Вязанная игрушка',
			score: 0,
			feedback: 'It\'s the best toy in my life!',
			rating: 0,
		},
		{
			id: 4,
			title: 'Черубашка',
			price: 1000,
			description: 'Вязанная игрушка',
			score: 0,
			feedback: 'It\'s the best toy in my life!',
			rating: 0,
		},
		{
			id: 5,
			title: 'Черубашка',
			price: 1000,
			description: 'Вязанная игрушка',
			score: 0,
			feedback: 'It\'s the best toy in my life!',
			rating: 0,
		},
		{
			id: 6,
			title: 'Черубашка',
			price: 1000,
			description: 'Вязанная игрушка',
			score: 0,
			feedback: 'It\'s the best toy in my life!',
			rating: 0,
		},
		{
			id: 7,
			title: 'Черубашка',
			price: 1000,
			description: 'Вязанная игрушка',
			score: 0,
			feedback: 'It\'s the best toy in my life!',
			rating: 0,
		},
		{
			id: 8,
			title: 'Черубашка',
			price: 1000,
			description: 'Вязанная игрушка',
			score: 0,
			feedback: 'It\'s the best toy in my life!',
			rating: 0,
		},
		{
			id: 9,
			title: 'Черубашка',
			price: 1000,
			description: 'Вязанная игрушка',
			score: 0,
			feedback: 'It\'s the best toy in my life!',
			rating: 0,
		},
		{
			id: 10,
			title: 'Черубашка',
			price: 1000,
			description: 'Вязанная игрушка',
			score: 0,
			feedback: 'It\'s the best toy in my life!',
			rating: 0,
		},
		{
			id: 11,
			title: 'Черубашка',
			price: 1000,
			description: 'Вязанная игрушка',
			score: 0,
			feedback: 'It\'s the best toy in my life!',
			rating: 0,
		},
		{
			id: 12,
			title: 'Черубашка',
			price: 1000,
			description: 'Вязанная игрушка',
			score: 0,
			feedback: 'It\'s the best toy in my life!',
			rating: 0,
		},
		{
			id: 13,
			title: 'Черубашка',
			price: 1000,
			description: 'Вязанная игрушка',
			score: 0,
			feedback: 'It\'s the best toy in my life!',
			rating: 0,
		},
		{
			id: 14,
			title: 'Черубашка',
			price: 1000,
			description: 'Вязанная игрушка',
			score: 0,
			feedback: 'It\'s the best toy in my life!',
			rating: 0,
		},
		{
			id: 15,
			title: 'Черубашка',
			price: 1000,
			description: 'Вязанная игрушка',
			score: 0,
			feedback: 'It\'s the best toy in my life!',
			rating: 0,
		}
	])

	return (
			<Routes>
				<Route path='/catalog' element={<Catalog cards={cards}/>}></Route>
				<Route path='/pageToy' element={<PageToy cards={cards}/>}></Route>
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