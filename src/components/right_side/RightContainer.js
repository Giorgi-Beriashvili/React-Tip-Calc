import React from 'react';
import './RightContainer.scss';
import TipAmount from './TipAmount';
import TotalTip from './TotalTip';
import ResetButton from './ResetButton';

const RightContainer = () => {
	return (
		<div className="right-container">
			<TipAmount />
			<TotalTip />
			<ResetButton />
		</div>
	);
};

export default RightContainer;
