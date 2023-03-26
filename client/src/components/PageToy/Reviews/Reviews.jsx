import React, {useState} from 'react';
import style from "./Reviews.module.css";
import Feedback from "./Feedback/Feedback";
import FeedbackForm from "./FeedbackForm/FeedbackForm";

const Reviews = () => {

	const [reviews, setReviews] = useState([{
		id: 1, userName: 'Ксения', userAvatar: '', feedbackText: 'Хорошая игрушка', currentData: '3.20.2021'
	}, {
		id: 2,
		userName: 'Света',
		userAvatar: '',
		feedbackText: 'Зайка волшебный! В этом году он будет актуален весь год и приносить мне радость. Спасибо мастерице))))',
		currentData: '3.20.2021'
	}, {
		id: 3, userName: 'Анастасия', userAvatar: '', feedbackText: 'Хорошая игрушка', currentData: '3.20.2021'
	}]);

	// const addNewFeedback = (e) => {
	// 	//предотвращает дефолтное обновление браузера при отправке формы
	// 	e.preventDefault();
	// 	//создаём новый объект и передаём туда значения из input
	// 	const newFeedback = {
	// 		...feedback,
	// 		//id получаем вызвав следующий метод
	// 		id: Date.now(),
	// 		currentData: new Date().toLocaleDateString().replace(/\//g, "."),
	// 	}
	// 	setReviews([...reviews, newFeedback])
	// 	setFeedback({userName: '', feedbackText: ''})
	// }

	const addFeedback = (newFeedback) => {
		setReviews([...reviews, newFeedback])
	}

	return (<section className={style.reviews}>
		<h3 className={style.reviews_title}>Отзывы</h3>
		<FeedbackForm addFeedback={addFeedback}/>
		{reviews.map(fb => <Feedback
			key={fb.id}
			user={fb.userName}
			feedbackText={fb.feedbackText}
			currentData={fb.currentData}
		/>)}
	</section>);
};

export default Reviews;