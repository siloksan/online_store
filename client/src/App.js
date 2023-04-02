import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import React, {useState} from "react";
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

	return (<BrowserRouter>
		<div className="app">
			<Header cards={cards} setCards={setCards}/>
			<AppRoutes cards={cards} setCards={setCards}/>
			<Footer/>
		</div>
	</BrowserRouter>);
}

export default App;