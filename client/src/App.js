import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import React, {useMemo, useState} from "react";
import {nanoid} from "nanoid";

function App() {

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

	const addToyCard = (newToyCard) => {
		setCards([...cards, newToyCard])
	}

	const removeToyCard = (id) => {
		setCards(cards.filter(el => el.id !== id))
	}

	const [filter, setFilter] = useState({sort: '', query: ''})

	const sortedCards = useMemo(() => {
		switch (filter.sort) {
			case false:
				return cards
			case 'priceIncrease':
				const sort = 'price'
				return [...cards].sort((a, b) => a[sort] - b[sort])
			case 'title':
				return [...cards].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
			default:
				return [...cards].sort((a, b) => b[filter.sort] - a[filter.sort])
		}
	}, [filter.sort, cards])

	const sortedAndSearchCards = useMemo(() => {
		return sortedCards.filter(card => card.title.toLowerCase().includes(filter.query.toLowerCase()))
	}, [sortedCards, filter.query])


	const [limitPrice, setLimitPrice] = useState({min: '', max: ''})

	const filterByPrice = useMemo(() => {
		if (!limitPrice.max) {
			return sortedAndSearchCards.filter(el => (el.price >= limitPrice.min))
		} else {
			return sortedAndSearchCards.filter(el => (el.price >= limitPrice.min && el.price <= limitPrice.max))
		}
	}, [limitPrice, sortedAndSearchCards])


	return (<BrowserRouter>
		<div className="app">
			<Header searchQuery={filter} setSearchQuery={setFilter}/>
			<AppRoutes cards={filterByPrice} addToyCard={addToyCard} removeToyCard={removeToyCard}
			           sortCards={setFilter}
			           selectSort={filter} limitPrice={limitPrice} setLimitPrice={setLimitPrice}/>
			<Footer/>
		</div>
	</BrowserRouter>);
}

export default App;
