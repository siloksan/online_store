import React from "react";
import style from './ToyCard.module.css'

const ToyCard = () => {
	return (
		<div className={style.card}>
			<img className={style.toy_photo} src="" alt="Фото Игрушки"/>
			<p className={style.price}>1000р</p>
			<h4 className={style.title}>Черубашка</h4>
			<p className={style.description}>Вязанная игрушка</p>
			<p className={style.feedback}>It's the best toy in my life!</p>
			<button className={style.button}>В корзину</button>
		</div>
	)
}