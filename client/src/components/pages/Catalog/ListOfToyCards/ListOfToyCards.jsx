import React, {useContext} from 'react';
import style from "../Catalog.module.css";
import ToyCard from "./ToyCard/ToyCard";
import {observer} from "mobx-react-lite";
import {Context} from "../../../../index";

const ListOfToyCards = observer(() => {

	const {product} = useContext(Context)

	return (
		<div className={style.catalog_grid}>
			{!product.product.length && <p>Не найдено ни одного товара по вашему запросу!</p>}
			{product.product.map((toy) =>
				<ToyCard key={toy.id}
				         id={toy.id}
				         price={toy.price}
				         title={toy.name}
					// description={toy.description}
					// feedback={toy.feedback}
					// score={toy.score}
					       rating={toy.rating}
					// admin={admin}
					// removeToyCard={removeToyCard}
					       img={toy.img}
				/>)
			}
		</div>
	);
});

export default ListOfToyCards;