import React, {useState} from 'react';
import style from "./Reviews.module.css";
import MyInput from "../../common/MyInput/MyInput";
import MyButton from "../../common/MyButton/MyButton";
import Feedback from "./Feedback/Feedback";

const Reviews = (props) => {

	const [feedback, setFeedback] = useState([
		{id: 1, user: 'Ксения', userAvatar: '', feedbackText: 'Хорошая игрушка'},
		{
			id: 2,
			user: 'Света',
			userAvatar: '',
			feedbackText: 'Зайка волшебный! В этом году он будет актуален весь год и приносить мне радость. Спасибо мастерице))))'
		},
		{id: 3, user: 'Анастасия', userAvatar: '', feedbackText: 'Хорошая игрушка'}
	]);

	const [userName, setUserName] = useState('')

	const [feedbackText, setFeedbackText] = useState()

	const addNewUserName = (e) => {
		e.preventDefault();
		console.log(userName);
	}

	const addNewFeedback = (e) => {
		e.preventDefault();
		console.log(feedbackText);
	}

	return (
		<section className={style.reviews}>
			<h3 className={style.reviews_title}>Отзывы</h3>
			<form action="">
				{/*поля ввода имени не будет не будет имя должно автоматом подхватываться у авторизованного пользователя*/}
				<MyInput value={userName} onChange={e => setUserName(e.target.value)} type='text'
				         placeholder="Ваше имя"></MyInput>
				<MyInput value={feedbackText} onChange={e => setFeedbackText(e.target.value)} type='text'
				         placeholder="Оставьте свой отзыв"></MyInput>
				<MyButton onClick={addNewFeedback}>Оставить отзыв</MyButton>
			</form>
			{feedback.map(fb => <Feedback key={fb.id} user={fb.user} feedbackText={fb.feedbackText}/>)
			}
		</section>
	);
};

export default Reviews;