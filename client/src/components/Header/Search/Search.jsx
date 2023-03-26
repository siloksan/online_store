import React, {useState} from 'react';
import style from "./Search.module.css";
import MyInput from "../../common/MyInput/MyInput";
import MyButton from "../../common/MyButton/MyButton";

const Search = () => {
	const [value, setValue] = useState()

	const searchForObject = (e) => {
		e.preventDefault()
		console.log(value);
	}

	return (
		<form className={style.search} action="">
			<MyInput type='text' placeholder='Search' onChange={e => setValue(e.target.value)}/>
			<MyButton onClick={searchForObject}>Search</MyButton>
		</form>
	);
};

export default Search;