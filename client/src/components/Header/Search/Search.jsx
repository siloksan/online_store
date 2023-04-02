import React, {useState} from 'react';
import style from "./Search.module.css";
import MyInput from "../../common/MyInput/MyInput";
import MyButton from "../../common/MyButton/MyButton";

const Search = ({cards, setCards}) => {

	const [searchQuery, setSearchQuery] = useState('')

	const searchForObject = (e) => {
		e.preventDefault()
		console.log(searchQuery);
	}

	return (
		<form className={style.search} action="">
			<MyInput value={searchQuery} type='text' placeholder='Поиск в каталоге' onChange={e => setSearchQuery(e.target.value)}/>
			<MyButton onClick={searchForObject}>Search</MyButton>
		</form>
	);
};

export default Search;