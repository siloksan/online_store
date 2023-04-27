import React, {useContext, useState} from 'react';
import MyButton from "../../common/MyButton/MyButton";
import MyInput from "../../common/MyInput/MyInput";
import MySelect from "../../common/MySelect/MySelect";
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";

const AdminPage = observer(() => {

	const {type, product} = useContext(Context)

	return (
		<main>
			<h1>Страница администратора магазина</h1>
			<div>
				<h2>Добавить новый товар в каталог</h2>
				<form>
					<MyInput type='numbers'
					         list='values'
					         placeholder="Цена товара"
					         style={{width: '30%'}}></MyInput>
					<MyInput type='text'
					         placeholder="Наименование"
					         style={{width: '30%'}}></MyInput>
					<MyInput type='text'
					         placeholder="Размер"
					         style={{width: '30%'}}></MyInput>
					<MyInput type='textarea'
					         placeholder="Описание"
					         style={{width: '30%'}}></MyInput>
					<MyInput type='file'
					         style={{width: '30%'}}></MyInput>
					<MySelect options={type.types.map(type => ({value: type.id, name: type.name}))}/>
					<MyButton>Добавить в каталог</MyButton>
				</form>
			</div>
		</main>
	);
});

export default AdminPage;