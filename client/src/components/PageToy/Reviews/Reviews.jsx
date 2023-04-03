import React, {useState} from 'react';
import style from "./Reviews.module.css";
import Feedback from "./Feedback/Feedback";
import FeedbackForm from "./FeedbackForm/FeedbackForm";
import MySelect from "../../common/MySelect/MySelect";
import MyModal from "../../common/MyModal/MyModal";
import MyButton from "../../common/MyButton/MyButton";

const Reviews = ({admin}) => {

	const [reviews, setReviews] = useState([{
		id: 1,
		userName: 'Ксения',
		userAvatar: '',
		feedbackText: 'Хорошая игрушка',
		currentDate: new Date("2012-02-10T13:19:11+0000"),
		rating: 4,
		like: 0
	}, {
		id: 2,
		userName: 'Света',
		userAvatar: '',
		feedbackText: 'Зайка волшебный! В этом году он будет актуален весь год и приносить мне радость. Спасибо мастерице))))',
		currentDate: new Date("2012-10-10T13:19:11+0000"),
		rating: 2,
		like: 2
	}, {
		id: 3,
		userName: 'Анастасия',
		userAvatar: '',
		feedbackText: 'Хорошая игрушка',
		currentDate: new Date("2012-11-10T13:19:11+0000"),
		rating: 5,
		like: -2
	}]);

	const [selectedSort, setSelectedSort] = useState('')

	const removeFeedback = (id) => {
		setReviews(reviews.filter(fb => fb.id !== id))
	}

	const addFeedback = (newFeedback) => {
		setReviews([...reviews, newFeedback])
		setVisible(false)
	}

	const sortReviews = (sort) => {
		setSelectedSort(sort)
		sort !== 'currentDate' ?
			setReviews([...reviews].sort((a, b) => b[sort] - a[sort]))
			: setReviews([...reviews].sort((a, b) => Date.parse(b[sort]) - Date.parse(a[sort])))
	}

	const putLike = (id) => {
		const like = reviews.map(fb => fb.id === id ? {...fb, like: fb.like + 1} : fb)
		setReviews(like)
	}

	const putDislike = (id) => {
		const dislike = reviews.map(fb => fb.id === id ? {...fb, like: fb.like - 1} : fb)
		setReviews(dislike)
	}

	const [visible, setVisible] = useState(false)

	return (<section className={style.reviews}>
		<h3 className={style.reviews_title}>Отзывы</h3>
		<MyButton onClick={() => setVisible(true)}>Оставить отзыв</MyButton>
		<MyModal visible={visible} setVisible={setVisible}>
			<FeedbackForm addFeedback={addFeedback}/>
		</MyModal>
		<hr style={{margin: '15px 0'}}/>
		<MySelect
			value={selectedSort}
			onChange={sortReviews}
			defaultValue='Сортировать:'
			options={[
				{value: 'currentDate', name: 'По дате'},
				{value: 'rating', name: 'По оценке'},
				{value: 'like', name: 'По популярности'}]
			}/>
		{reviews.map(fb => <Feedback
			admin={admin}
			removeFeedback={removeFeedback}
			key={fb.id}
			id={fb.id}
			user={fb.userName}
			feedbackText={fb.feedbackText}
			currentDate={fb.currentDate}
			rating={fb.rating}
			putLike={putLike}
			putDislike={putDislike}
			like={fb.like}
		/>)}
		{reviews.length === 0 && <p>Здесь ещё нет ни одного отзыва</p>}
	</section>);
};

export default Reviews;