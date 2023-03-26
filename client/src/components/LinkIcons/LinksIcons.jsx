import React from "react";
import style from "./LinksIcons.module.css";

const LinksIcons = () => {
	return (
		<ul className={style.links}>
			<li className={style.link}>Vk</li>
			<li className={style.link}>Instagram</li>
			<li className={style.link}>Mail</li>
			<li className={style.link}>Telegram</li>
		</ul>
	)
}

export default LinksIcons