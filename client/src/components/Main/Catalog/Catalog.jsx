import React from "react";
import style from './Catalog.module.css'
import ToyCard from "../../ToyCard/ToyCard";

const Catalog = () => {
	const numberOfPhoto = 26;
	let numberOfPhotoArr = [];
	for (let i = 1; i < numberOfPhoto; i++) {
		numberOfPhotoArr.push(i)
	}

	return (
		<div className={style.catalog}>
			<h1>Наши игрушки</h1>
			<div className={style.filter}>
				<select className={style.sort}>
					<option value="">По умолчанию</option>
					<option value="">По алфавиту</option>
					<option value="">По возрастанию цены</option>
					<option value="">По убыванию цены</option>
					<option value="">По рейтингу</option>
					<option value="">По популярности</option>
				</select>
				<select className={style.categories}>
					<option value="">Куклы</option>
					<option value="">Персонажи</option>
					<option value="">Прочее</option>
				</select>
				<select className={style.size}>
					<option value="">Маленькие</option>
					<option value="">Средние</option>
					<option value="">Большие</option>
				</select>
				<input type="range" min="200" max="5000" className={style.price} value="1000"/>
			</div>
			<div className={style.catalog_grid}>
				{numberOfPhotoArr.map(toy => <ToyCard key={toy}/>)}
			</div>
		</div>
)
}

export default Catalog;