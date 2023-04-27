import React from "react";
import style from './ToyCard.module.css'
import MyButton from "../../../../common/MyButton/MyButton";
import {useNavigate} from "react-router-dom";
import {PRODUCT_ROUTE} from "../../../../../utils/const";

const ToyCard = ({id, title, price, rating, img}) => {

	const navigate = useNavigate()

	//функция дублируется в PageToy
	const putIntoBasket = () => {
		console.log(id);
	}

	return (
		<div className={style.card} onClick={() => navigate(PRODUCT_ROUTE + '/' + id)}>
				<img className={style.toy_photo} src={img} alt="Фото Игрушки"/>
				<p className={style.price}>{price}</p>
				<h4 className={style.title}>{title}</h4>
				{/*<p className={style.description}>{description}</p>*/}
				<span>{rating}</span>
				{/*<p className={style.feedback}>{feedback}</p>*/}
			<MyButton onClick={putIntoBasket}>В корзину</MyButton>
			{/*{admin && <MyButton onClick={() => removeToyCard(id)}>Убрать товар из каталога</MyButton>}*/}
		</div>
	)
}

export default ToyCard;