import React from 'react';
import style from "./Sorting.module.css";

const Sorting = () => {
	return (
		<select className={style.sort}>
			<option value="">По умолчанию</option>
			<option value="">По алфавиту</option>
			<option value="">По возрастанию цены</option>
			<option value="">По убыванию цены</option>
			<option value="">По рейтингу</option>
			<option value="">По популярности</option>
		</select>
	);
};

export default Sorting;