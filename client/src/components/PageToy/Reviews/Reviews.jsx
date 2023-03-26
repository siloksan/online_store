import React, {useState} from 'react';
import style from "./Reviews.module.css";
import MyInput from "../../common/MyInput/MyInput";
import MyButton from "../../common/MyButton/MyButton";
import Feedback from "./Feedback/Feedback";

const Reviews = (props) => {

	const [feedback, setFeedback] = useState([{
		id: 1, userName: 'Ксения', userAvatar: '', feedbackText: 'Хорошая игрушка', currentData: '3.20.2021'
	}, {
		id: 2,
		userName: 'Света',
		userAvatar: '',
		feedbackText: 'Зайка волшебный!' + ' В этом году он будет актуален весь год и приносить мне радость. ' + 'Спасибо мастерице))))',
		currentData: '3.20.2021'
	}, {
		id: 3, userName: 'Анастасия', userAvatar: '', feedbackText: 'Хорошая игрушка', currentData: '3.20.2021'
	}]);

	const [userName, setUserName] = useState('')

	const [feedbackText, setFeedbackText] = useState('')

	const addNewFeedback = (e) => {
		//предотвращает дефолтное обновление браузера при отправке формы
		e.preventDefault();
		//создаём объект с двумя свойствами
		const newFeedback = {
			//id получаем вызвав следующий метод
			id: Date.now(),
			currentData: new Date().toLocaleDateString().replace(/\//g, "." ),
			userName,
			feedbackText
		}
		setFeedback([...feedback, newFeedback])
		setUserName('')
		setFeedbackText('')
	}

	return (<section className={style.reviews}>
			<h3 className={style.reviews_title}>Отзывы</h3>
			<form action="">
				{/*поля ввода имени не будет не будет имя должно автоматом подхватываться у авторизованного пользователя*/}
				<MyInput value={userName} onChange={e => setUserName(e.target.value)} type='text'
				         placeholder="Ваше имя"></MyInput>
				<MyInput value={feedbackText} onChange={e => setFeedbackText(e.target.value)} type='text'
				         placeholder="Оставьте свой отзыв"></MyInput>
				<MyButton onClick={addNewFeedback}>Оставить отзыв</MyButton>
			</form>
			{feedback.map(fb => <Feedback
				key={fb.id}
				user={fb.userName}
				feedbackText={fb.feedbackText}
				currentData={fb.currentData}
			/>)}
		</section>);
};

export default Reviews;