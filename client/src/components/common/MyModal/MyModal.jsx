import React from 'react';
import style from './MyModal.module.css'

const MyModal = ({children, visible, setVisible}) => {

	const rootClasses = [style.modal]

	if (visible) {
		rootClasses.push(style.active)
	}

	return (
		<div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
			<div className={style.modal_content} onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
};

export default MyModal;