import React, { useContext } from 'react';
import { Context } from '../../contexts/Context';
import './TotalTip.scss';

const TotalTip = () => {
	const { totalTip } = useContext(Context);

	return (
		<div className="total-tip-container">
			<div className="tip-amount-header-container">
				<p className="upper-header">Total</p>
				<p className="lower-header">/ person</p>
			</div>

			<div className="amount-container">
				<span className="amount">${totalTip.toFixed(2)}</span>
			</div>
		</div>
	);
};

export default TotalTip;
