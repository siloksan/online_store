import React from "react";
import style from './Catalog.module.css'
import Filtration from "./Filtration/Filtration";
import MySelect from "../common/MySelect/MySelect";
import ListOfToyCards from "./ListOfToyCards/ListOfToyCards";
import MyInput from "../common/MyInput/MyInput";

const Catalog = ({
	                 cards, admin, removeToyCard, selectSort, sortCards
                 }) => {

	return (
		<main className={style.catalog}>
			{/*отцентрировал заголовок таким образом для ознакомления*/}
			<h1 style={{textAlign: 'center'}}>Наши игрушки</h1>
			<div className={style.filter}>

				<MySelect
					value={selectSort.sort}
					onChange={selectedSort => sortCards({...selectSort, sort: selectedSort})}
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
				<form className={style.filter_price}>
					<p>Цена, ₽</p>
					<MyInput value={selectSort.minPrice} onChange={e => sortCards({...selectSort, minPrice: e.target.value})} type='text' placeholder={'min'}></MyInput>
					<MyInput value={selectSort.maxPrice} onChange={e => sortCards({...selectSort, maxPrice: e.target.value})} type='text' placeholder={'max'}></MyInput>
				</form>
			</div>
			<ListOfToyCards cards={cards} admin={admin} removeToyCard={removeToyCard}/>
		</main>
	)
}

export default Catalog;