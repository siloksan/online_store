import React, {useContext} from "react";
import style from './Catalog.module.css'
import ListOfToyCards from "./ListOfToyCards/ListOfToyCards";
import MySelect from "../../common/MySelect/MySelect";
import Filtration from "./Filtration/Filtration";
import MyInput from "../../common/MyInput/MyInput";

const Catalog = () => {

	return (
		<main className={style.catalog}>
			{/*отцентрировал заголовок таким образом для ознакомления*/}
			<h1 style={{textAlign: 'center'}}>Наши игрушки</h1>
			<div className={style.filter}>

				<MySelect
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
					<MyInput type='text' placeholder={'min'}></MyInput>
					<MyInput type='text' placeholder={'max'}></MyInput>
				</form>
			</div>
			<ListOfToyCards/>
		</main>
	)
}

export default Catalog;