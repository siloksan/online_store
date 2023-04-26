import React from 'react';
import toyPhoto from "../../../media/toys/knb7OunBRkQ.jpg"
import style from "./PageToy.module.css";
import MyButton from "../../common/MyButton/MyButton";
import Reviews from "./Reviews/Reviews";

const PageToy = (props) => {
	//функция дублируется в ToyCard
	const putIntoBasket = () => {
		console.log(props.cards[0].id);
	}

	return (
		<main>
			<h1 className={style.title}>{props.cards[0].title}</h1>
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
					<p className={style.description}>{props.cards[0].description}</p>
					<p className={style.available}>в наличии или под заказ</p>
					<p>Поделиться ссылкой на товар</p>
					<ul className={style.share}>
						<li className={style.share_item}>Vk</li>
						<li className={style.share_item}>Instagram</li>
						<li className={style.share_item}>Telegram</li>
						<li className={style.share_item}>Whatsapp</li>
					</ul>
				</div>
			</div>
			<section className={style.slide_toys}>Слайдер с карточками на другие игрушки</section>
			<Reviews admin={props.admin}/>
		</main>
	);
};

export default PageToy;