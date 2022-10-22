import React from 'react';
import './LeftContainer.scss';
import Bill from './Bill';
import ButtonsGroup from './ButtonsGroup';
import PeoplesInput from './PeoplesInput';

const LeftContainer = () => {
	return (
		<div className="left-container">
			<Bill />
			<ButtonsGroup />
			<PeoplesInput />
		</div>
	);
};

export default LeftContainer;
