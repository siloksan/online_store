import React from 'react';
import style from "./Search.module.css";
import MyInput from "../../common/MyInput/MyInput";

const Search = ({searchQuery, setSearchQuery}) => {

	return (
		<form className={style.search} action="">
			<MyInput type='text' placeholder='Поиск в каталоге'/>
			{/*I don't know yet how to do a button click search*/}
			{/*<MyButton onClick={}>Search</MyButton>*/}
		</form>
	);
};

export default Search;