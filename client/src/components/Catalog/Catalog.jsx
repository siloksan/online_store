import React from "react";
import style from './Catalog.module.css'
import ToyCard from "./ToyCard/ToyCard";
import Sorting from "./Sorting/Sorting";
import Filtration from "./Filtration/Filtration";

const Catalog = (props) => {

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
				{props.cards.map((toy) =>
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