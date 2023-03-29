import React, {useState} from 'react';
import style from "./Reviews.module.css";
import Feedback from "./Feedback/Feedback";
import FeedbackForm from "./FeedbackForm/FeedbackForm";
import MySelect from "../../common/MySelect/MySelect";

const Reviews = () => {

	const [reviews, setReviews] = useState([{
		id: 1,
		userName: 'Ксения',
		userAvatar: '',
		feedbackText: 'Хорошая игрушка',
		currentDate: new Date("2012-02-10T13:19:11+0000"),
		rating: 4,
	}, {
		id: 2,
		userName: 'Света',
		userAvatar: '',
		feedbackText: 'Зайка волшебный! В этом году он будет актуален весь год и приносить мне радость. Спасибо мастерице))))',
		currentDate: new Date("2012-10-10T13:19:11+0000"),
		rating: 5,
	}, {
		id: 3,
		userName: 'Анастасия',
		userAvatar: '',
		feedbackText: 'Хорошая игрушка',
		currentDate: new Date("2012-11-10T13:19:11+0000"),
		rating: 5,
	}]);

	const [selectedSort, setSelectedSort] = useState('')

	const removeFeedback = (feedback) => {
		setReviews(reviews.filter(fb => fb.id !== feedback.id))
	}

	const addFeedback = (newFeedback) => {
		setReviews([...reviews, newFeedback])
	}

	const sortReviews = (sort) => {
		setSelectedSort(sort)
		setReviews([...reviews].sort((a, b) => a[sort]))
	}

	return (<section className={style.reviews}>
		<h3 className={style.reviews_title}>Отзывы</h3>
		<FeedbackForm addFeedback={addFeedback}/>
		<hr style={{margin: '15px 0'}}/>
		<MySelect
			value={selectedSort}
			onChange={sortReviews}
			defaultValue='Сортировать:'
			options={[
			{value: 'date', name: 'По дате'},
			{value: 'rating', name: 'По оценке'},
			{value: 'likes', name: 'По популярности'}]
		}/>
		{reviews.map(fb => <Feedback
			feedback={fb}
			removeFeedback={removeFeedback}
			key={fb.id}
			user={fb.userName}
			feedbackText={fb.feedbackText}
			currentDate={fb.currentDate}
			rating={fb.rating}
		/>)}
		{reviews.length === 0 && <p>Здесь ещё нет ни одного отзыва</p>}
	</section>);
};

export default Reviews;