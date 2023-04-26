import React from "react";
import style from './Catalog.module.css'

const Catalog = () => {

	return (
		<main className={style.catalog}>
			{/*отцентрировал заголовок таким образом для ознакомления*/}
			<h1 style={{textAlign: 'center'}}>Наши игрушки</h1>
					Catalog
		</main>
	)
}

export default Catalog;