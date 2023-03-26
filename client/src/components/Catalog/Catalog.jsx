import React, {useState} from "react";
import style from './Catalog.module.css'
import ToyCard from "./ToyCard/ToyCard";
import Sorting from "./Sorting/Sorting";
import Filtration from "./Filtration/Filtration";

const Catalog = () => {

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
		<main className={style.catalog}>
			{/*отцентрировал заголовок таким образом для ознакомления*/}
			<h1 style={{textAlign: 'center'}}>Наши игрушки</h1>
			<div className={style.filter}>
				<Sorting/>
				<Filtration/>
				<form action="">
					<input placeholder="Фильтрация по цене" type="range" min="200" max="5000" className={style.price} value="1000"/>
				</form>
			</div>
			<div className={style.catalog_grid}>
				{cards.map((toy) =>
					<ToyCard key={toy.id}
					         id={toy.id}
					         price={toy.price}
					         title={toy.title}
					         description={toy.description}
					         feedback={toy.feedback}
					         score={toy.score}
					         rating={toy.rating}/>)
				}
			</div>
		</main>
	)
}

export default Catalog;