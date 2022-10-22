import React, { useContext } from 'react';
import { Context } from '../../contexts/Context';
import './ResetButton.scss';

const ResetButton = () => {
	const { setPercent, setBill, setPeoples, setTotalTip, setValue } =
		useContext(Context);

	const handleReset = () => {
		setPercent(0);
		setBill('');
		setPeoples('');
		setTotalTip(0);
		setValue('');
	};

	return (
		<button onClick={handleReset} className="reset-btn">
			RESET
		</button>
	);
};

export default ResetButton;
