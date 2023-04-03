import React from 'react';
import style from "./Search.module.css";
import MyInput from "../../common/MyInput/MyInput";
// import MyButton from "../../common/MyButton/MyButton";

const Search = ({searchQuery, setSearchQuery}) => {

	return (
		<form className={style.search} action="">
			<MyInput value={searchQuery.query} type='text' placeholder='Поиск в каталоге'
			         onChange={e => setSearchQuery({...searchQuery, query: e.target.value})}/>
			{/*I don't know yet how to do a button click search*/}
			{/*<MyButton onClick={}>Search</MyButton>*/}
		</form>
	);
};

export default Search;