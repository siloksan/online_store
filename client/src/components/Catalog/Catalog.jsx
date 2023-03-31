import React from "react";
import style from './Catalog.module.css'
import ToyCard from "./ToyCard/ToyCard";
import Filtration from "./Filtration/Filtration";
import MySelect from "../common/MySelect/MySelect";

const Catalog = ({cards, admin, removeToyCard, selectSort, sortCards}) => {

	return (
		<main className={style.catalog}>
			{/*отцентрировал заголовок таким образом для ознакомления*/}
			<h1 style={{textAlign: 'center'}}>Наши игрушки</h1>
			<div className={style.filter}>

				<MySelect
					value={selectSort}
					onChange={sortCards}
					defaultValue='Сортировать по'
					options={[
						{value: 'title', name: 'алфавиту'},
						{value: 'priceIncrease', name: 'возрастанию цены'},
						{value: 'price', name: 'убыванию цены'},
						{value: 'rating', name: 'рейтингу'},
						{value: 'score', name: 'популярности'}
					]}
				/>
				<Filtration/>
				<input placeholder="Фильтрация по цене" type="range" min="200" max="5000" className={style.price}
				       value="1000"/>
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
					         rating={toy.rating}
					         admin={admin}
					         removeToyCard={removeToyCard}/>)
				}
			</div>
		</main>
	)
}

export default Catalog;