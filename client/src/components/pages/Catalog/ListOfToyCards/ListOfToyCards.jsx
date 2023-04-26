import React from 'react';
import style from "../Catalog.module.css";
import ToyCard from "./ToyCard/ToyCard";

const ListOfToyCards = ({cards, admin, removeToyCard}) => {
	return (
		<div className={style.catalog_grid}>
			{!cards.length && <p>Не найдено ни одного товара по вашему запросу!</p>}
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
	);
};

export default ListOfToyCards;