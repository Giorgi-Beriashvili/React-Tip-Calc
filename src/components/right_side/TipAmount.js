import React, { useContext } from 'react';
import { Context } from '../../contexts/Context';
import './TipAmount.scss';

const TipAmount = () => {
	const { percent } = useContext(Context);

	return (
		<div className="tip-amount-container">
			<div className="tip-amount-header-container">
				<p className="upper-header">Tip Amount</p>
				<p className="lower-header">/ person</p>
			</div>

			<div className="amount-container">
				<span className="amount">${percent.toFixed(2)}</span>
			</div>
		</div>
	);
};

export default TipAmount;
