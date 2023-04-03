// import React, {useMemo, useState} from 'react';
// import MyInput from "../common/MyInput/MyInput";
//
//
// //sorting by limits
// const Example = () => {
//
// 	const [item, setItem] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
//
// 	const [limit, setMin] = useState({min: '', max: ''})
//
// 	const filterItem = useMemo(() => {
// 		if (!limit.max) {
// 			return item.filter(el => el > limit.min)
// 		} else {
// 			return item.filter(el => el >= limit.min && el <= limit.max)
// 		}
// 	}, [item, limit])
//
// 	return (
// 		<div>
// 			<MyInput value={limit.min} onChange={e => setMin({...limit, min: e.target.value})} type='text' placeholder='min' style={{width: '10%'}}></MyInput>
// 			<MyInput value={limit.max} onChange={e => setMin({...limit, max: e.target.value})} type='text' placeholder='max' style={{width: '10%'}}></MyInput>
// 			{filterItem.map(el => <div style={{textAlign: "center"}}>{el}</div>)}
// 		</div>
// 	);
// };
//
// export default Example;