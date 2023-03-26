import React from 'react';
import toyPhoto from "../../media/toys/knb7OunBRkQ.jpg"
import style from "./PageToy.module.css";
import MyButton from "../common/MyButton/MyButton";

const PageToy = ({id, title, description, feedback, price, score}) => {
	//функция дублируется в ToyCard
	const putIntoBasket = () => {
		console.log('Put into the Basket' + ' ' + id);
	}

	return (
		<main>
			<h1 className={style.title}>О товаре</h1>
			<ul className={style.panel_info}>
				<li className={style.panel_info__item}>Просмотры</li>
				<li className={style.panel_info__item}>Rating</li>
				<li className={style.panel_info__item}>Комментарии</li>
				<li className={style.panel_info__item}>Добавить в избранное</li>
			</ul>
			<div className={style.toy_info}>
				<div className={style.photo_switcher}>
					<ul className={style.photo_switcher__slider}>
						<li className={style.photo_switcher__slide}>
							<img className={style.toy_photo} src={toyPhoto}
							     alt="Фото Игрушки"/></li>
						<li className={style.photo_switcher__slide}>
							<img className={style.toy_photo} src={toyPhoto}
							     alt="Фото Игрушки"/></li>
						<li className={style.photo_switcher__slide}>
							<img className={style.toy_photo} src={toyPhoto}
							     alt="Фото Игрушки"/></li>
						<li className={style.photo_switcher__slide}>
							<img className={style.toy_photo} src={toyPhoto}
							     alt="Фото Игрушки"/></li>
						<li className={style.photo_switcher__slide}>
							<img className={style.toy_photo} src={toyPhoto}
							     alt="Фото Игрушки"/></li>
					</ul>
					<img className={style.toy_photo} src={toyPhoto} alt="Фото Игрушки"/>
				</div>
				<div>
					<div>price</div>
					<MyButton onClick={putIntoBasket}>В корзину</MyButton>
					<p>{description}</p>
				</div>
			</div>
		</main>
	);
};

export default PageToy;