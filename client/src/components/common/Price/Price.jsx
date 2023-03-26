//цену лучше передавать через пропсы как её менять буду думать
// import React, {useState} from 'react';
//
// const Price = (props) => {
// 	const [value, setValue] = useState('Set the Price')
//
// 	function setPrice() {
// 		setValue(value)
// 	}
// 	//задавать значение может только Admin
// 	const admin = true;
// 	return (
// 		<div>
// 			<p>{value}</p>
// 			{admin && <div>
// 				<input type="text" value={value} onChange={event => setValue(event.target.value)}/>
// 				<button onClick={setPrice}>Price</button>
// 			</div>}
// 		</div>
// 	);
// };
//
// export default Price;