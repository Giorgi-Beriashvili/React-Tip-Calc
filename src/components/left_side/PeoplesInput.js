import React, { useContext, useState } from 'react';
import { Context } from '../../contexts/Context';
import person from '../../assets/images/icon-person.svg';
import './PeoplesInput.scss';

const PeoplesInput = () => {
	const { peoples, setPeoples } = useContext(Context);
	const [errorMessage, setErrorMessage] = useState('');

	const handleOnChange = (e) => {
		const newVal = e.target.value;

		if (newVal === '0') {
			return setErrorMessage(`Can't be zero`);
		}
		if (isNaN(newVal) || newVal.includes('.')) {
			return;
		}

		setPeoples(e.target.value);
	};

	return (
		<div className="people-container">
			<form className="people">
				<div className="people-label">
					<label>Number of People</label>
					{peoples.length ? (
						''
					) : (
						<label className="error">{errorMessage}</label>
					)}
				</div>

				<img
					src={person}
					alt="person"
					className="people_person"
					draggable="false"
				/>
				<input
					className="people_input"
					type="text"
					placeholder="0"
					maxLength="15"
					value={peoples}
					onChange={handleOnChange}
				/>
			</form>
		</div>
	);
};

export default PeoplesInput;
