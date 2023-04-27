import React, {useContext} from 'react';
// import style from "./Filtration.module.css";
import {observer} from "mobx-react-lite";
import {Context} from "../../../../index";
import MySelect from "../../../common/MySelect/MySelect";

const Filtration = observer(() => {

	const {type} = useContext(Context)

	return (
		<form>
			<MySelect options={type.types.map(type => ({value: type.id, name: type.name}))}/>
		{/*	<select>*/}
		{/*		{type.types.map(type =>*/}
		{/*			<option key={type.id} value={type.id}>{type.name}</option>*/}
		{/*		)}*/}
		{/*	</select>*/}
		</form>
	);
});

export default Filtration;