import React from "react";
import style from './ToyCard.module.css'
import toyPhoto from "../../../media/toys/knb7OunBRkQ.jpg"
import MyButton from "../../common/MyButton/MyButton";
import {NavLink} from "react-router-dom";

const ToyCard = ({id, title, description, feedback, price, score}) => {
	//функция дублируется в PageToy
	const putIntoBasket = () => {
		console.log('Put into the Basket' + ' ' + id);
	}

	return (
		<NavLink to={'/pageToy'} className={style.card}>
			<img className={style.toy_photo} src={toyPhoto} alt="Фото Игрушки"/>
			<p className={style.price}>{price}</p>
			<h4 className={style.title}>{title}</h4>
			<p className={style.description}>{description}</p>
			<span>{score}</span>
			<p className={style.feedback}>{feedback}</p>
			<MyButton onClick={putIntoBasket}>В корзину</MyButton>
		</NavLink>
	)
}

export default ToyCard;