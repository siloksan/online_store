import React, {useState} from 'react';
import style from "./Feedback.module.css";
import avatarUser
	from "../../../../media/usersAvatar/1652235714_41-kartinkin-net-p-prikolnie-kartinki-dlya-stima-44.jpg";
import MyButton from "../../../common/MyButton/MyButton";

const Feedback = ({
	                  feedbackText,
	                  user,
	                  currentDate,
	                  removeFeedback,
	                  feedback,
	                  rating
                  }) => {

	const [voice, setVoice] = useState(0)

	const like = () => {
		setVoice(voice + 1)
	}

	const disLike = () => {
		setVoice(voice - 1)
	}

	const date = currentDate.toLocaleString('ru',
		{
			day: 'numeric',
			month: 'numeric',
			year: 'numeric'
		})
	return (
		<div className={style.feedback}>
			<div className={style.feedback_body}>
				<img className={style.avatar} src={avatarUser} alt="Аватар пользователя"/>
				<div className={style.feedback_content}>
					<h4 className={style.user_name}>{user} <span className={style.data}>{date}</span></h4>
					<div className={style.rating}>{rating}</div>
					<p className={style.feedback_text}>{feedbackText}</p>
				</div>
				{/*кнопка удалить должна быть только для админа и авторизованного пользователя*/}
				<div className={style.delete}><MyButton onClick={() => removeFeedback(feedback)}>Удалить</MyButton></div>
			</div>
			<div className={style.feedback_toolbar}>
				<MyButton>Комментировать</MyButton>
				<MyButton>Пожаловаться</MyButton>
				<MyButton onClick={like}>Like</MyButton><span>{voice}</span>
				<MyButton onClick={disLike}>Dislike</MyButton>
			</div>
		</div>
	);
};

export default Feedback;