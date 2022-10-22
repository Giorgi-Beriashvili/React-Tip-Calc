import React, { useContext } from 'react';
import { Context } from '../../contexts/Context';
import dollar from '../../assets/images/icon-dollar.svg';
import './Bill.scss';

const Bill = () => {
	const { bill, setBill } = useContext(Context);

	const handleOnChange = (e) => {
		const newVal = e.target.value;

		if (isNaN(newVal)) {
			return;
		}

		setBill(newVal);
	};

	return (
		<form className="bill">
			<label htmlFor="bill">Bill</label>

			<img
				src={dollar}
				alt="dollar"
				className="bill_dollar"
				draggable="false"
			/>

			<input
				className="bill_input"
				type="text"
				inputMode="numeric"
				name="bill"
				placeholder="0"
				maxLength="15"
				value={bill}
				onChange={handleOnChange}
			/>
		</form>
	);
};

export default Bill;
