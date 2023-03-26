import React from 'react';
import style from './MyInput.module.css'

const MyInput = (props) => {
	return (
		<input {...props} className={style.input}/>
	);
};

export default MyInput;