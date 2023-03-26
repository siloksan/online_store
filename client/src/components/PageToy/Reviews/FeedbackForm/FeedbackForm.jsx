import React, {useState} from 'react';
import MyInput from "../../../common/MyInput/MyInput";
import MyButton from "../../../common/MyButton/MyButton";

const FeedbackForm = ({addFeedback}) => {

	const [feedback, setFeedback] = useState({userName: '', feedbackText: ''})

	const addNewFeedback = (e) => {
		//предотвращает дефолтное обновление браузера при отправке формы
		e.preventDefault();
		//создаём новый объект и передаём туда значения из input
		const newFeedback = {
			...feedback,
			//id получаем вызвав следующий метод
			id: Date.now(),
			currentData: new Date().toLocaleDateString().replace(/\//g, "."),
		}
		addFeedback(newFeedback)
		setFeedback({userName: '', feedbackText: ''})
	}
// сделать функцию колбэк
	return (
		<form action="">
			{/*поля ввода имени не будет не будет имя должно автоматом подхватываться у авторизованного пользователя*/}
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