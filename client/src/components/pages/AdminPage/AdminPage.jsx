import React, {useState} from 'react';
import MyButton from "../../common/MyButton/MyButton";
import MyInput from "../../common/MyInput/MyInput";
import {nanoid} from "nanoid";

const AdminPage = ({admin, authAdmin, adminIsOut, addToyCard}) => {

	const [toyCard, setToyCard] = useState({price: '', title: '', description: ''})

	const addNewToyCard = (e) => {
		//предотвращает дефолтное обновление браузера при отправке формы
		e.preventDefault();
		//создаём новый объект и передаём туда значения из input
		const newToyCard = {
			...toyCard,
			//id получаем вызвав следующий метод
			id: nanoid(5),
			score: 0,
			feedback: '',
			rating: 0,
		}
		addToyCard(newToyCard)
		//обнуляем свойства в полях ввода
		setToyCard({price: '', title: '', description: ''})
	}


	return (
		<main>
			<h1>Страница администратора магазина</h1>
			{!admin && <MyButton onClick={() => authAdmin()}>Авторизоваться как админ</MyButton>}
			{admin &&
				<div>
					<MyButton onClick={() => adminIsOut()}>Administrator is out</MyButton>
					<h2>Добавить новый товар в каталог</h2>
					<form>
						<MyInput value={toyCard.price}
						         onChange={e => setToyCard({...toyCard, price: e.target.value})}
						         type='numbers'
						         list='values'
						         placeholder="Цена товара"
						         style={{width: '30%'}}></MyInput>
						<MyInput value={toyCard.title} onChange={e => setToyCard({...toyCard, title: e.target.value})}
						         type='text'
						         placeholder="Наименование"
						         style={{width: '30%'}}></MyInput>
						<MyInput value={toyCard.description} onChange={e => setToyCard({...toyCard, description: e.target.value})}
						         type='text'
						         placeholder="Описание товара"
						         style={{width: '30%'}}></MyInput>
						<MyButton onClick={addNewToyCard}>Добавить в каталог</MyButton>
					</form>
				</div>
			}
		</main>
	);
};

export default AdminPage;