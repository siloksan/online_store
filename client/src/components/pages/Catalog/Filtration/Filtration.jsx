import React from 'react';
import style from "./Filtration.module.css";

const Filtration = () => {
	return (
		<form>
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
		</form>
	);
};

export default Filtration;