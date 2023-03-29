import React, {useState} from 'react';
import MyInput from "../../../common/MyInput/MyInput";
import MyButton from "../../../common/MyButton/MyButton";

const FeedbackForm = ({addFeedback}) => {

	const [feedback, setFeedback] = useState({userName: '', feedbackText: '', rating: 0})

	const addNewFeedback = (e) => {
		//предотвращает дефолтное обновление браузера при отправке формы
		e.preventDefault();
		//создаём новый объект и передаём туда значения из input
		const newFeedback = {
			...feedback,
			//id получаем вызвав следующий метод
			id: Date.now(),
			currentDate: new Date(),
		}
		addFeedback(newFeedback)
		setFeedback({userName: '', feedbackText: '', rating: 0})
	}

	return (
		<form action="">
			{/*поля ввода имени не будет не будет имя должно автоматом подхватываться у авторизованного пользователя*/}
			<span>Поставьте свою оценку</span>
			<MyInput value={feedback.rating}
			         onChange={e => setFeedback({...feedback, rating: e.target.value})}
			         type='range'
			         max='5'
			         list='values'
			         style={{width: '20%'}}></MyInput>
			<datalist id="values">
				<option value="1" label="1"></option>
				<option value="2" label="2"></option>
				<option value="3" label="3"></option>
				<option value="4" label="4"></option>
				<option value="5" label="5"></option>
			</datalist>
			<MyInput value={feedback.userName} onChange={e => setFeedback({...feedback, userName: e.target.value})}
			         type='text'
			         placeholder="Ваше имя"></MyInput>
			<MyInput value={feedback.feedbackText} onChange={e => setFeedback({...feedback, feedbackText: e.target.value})}
			         type='text'
			         placeholder="Оставьте свой отзыв"></MyInput>
			<MyButton onClick={addNewFeedback}>Оставить отзыв</MyButton>
		</form>
	);
};

export default FeedbackForm;