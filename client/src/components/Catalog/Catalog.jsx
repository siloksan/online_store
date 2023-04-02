import React, {useState} from "react";
import style from './Catalog.module.css'
import ToyCard from "./ToyCard/ToyCard";
import Filtration from "./Filtration/Filtration";
import MySelect from "../common/MySelect/MySelect";
import MyInput from "../common/MyInput/MyInput";
import MyButton from "../common/MyButton/MyButton";

const Catalog = ({cards, admin, removeToyCard, selectSort, sortCards, filterByPrice}) => {

	const [limit, setLimit] = useState({min: '', max: ''})

	const setNewLimit = (e) => {
		e.preventDefault();
		filterByPrice({...limit})
	}

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
				{/*sorting don't work yet*/}
				<form className={style.filter_price}>
					<p>Цена, ₽</p>
					<MyInput value={limit.min} onChange={e => setLimit({...limit, min: e.target.value})} type='text' placeholder={'min'}></MyInput>
					<MyInput value={limit.max} onChange={e => setLimit({...limit, max: e.target.value})} type='text' placeholder={'max'}></MyInput>
					<MyButton onClick={setNewLimit}>Отфильтровать по цене</MyButton>
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
					         rating={toy.rating}
					         admin={admin}
					         removeToyCard={removeToyCard}/>)
				}
			</div>
		</main>
	)
}

export default Catalog;