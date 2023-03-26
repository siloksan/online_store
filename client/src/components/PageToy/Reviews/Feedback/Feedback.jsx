import React from 'react';
import style from "./Feedback.module.css";
import avatarUser
	from "../../../../media/usersAvatar/1652235714_41-kartinkin-net-p-prikolnie-kartinki-dlya-stima-44.jpg";
import MyButton from "../../../common/MyButton/MyButton";

const Feedback = ({feedbackText, user}) => {
	return (
		<div className={style.feedback}>
			<div className={style.feedback_body}>
				<img className={style.avatar} src={avatarUser} alt="Аватар пользователя"/>
				<div className={style.feedback_content}>
					<h4 className={style.user_name}>{user} <span className={style.data}>Дата</span></h4>
					<div className={style.rating}>Rating</div>
					<p className={style.feedback_text}>{feedbackText}</p>
				</div>
				{/*кнопка удалить должна быть только для админа и авторизованного пользователя*/}
				<div className={style.delete}><MyButton>Удалить</MyButton></div>
			</div>
			<div className={style.feedback_toolbar}>
				<MyButton>Комментировать</MyButton>
				<MyButton>Пожаловаться</MyButton>
				<MyButton>Like</MyButton>
				<MyButton>Dislike</MyButton>
			</div>
		</div>
	);
};

export default Feedback;