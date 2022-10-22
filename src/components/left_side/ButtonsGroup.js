import { useContext } from 'react';
import { Context } from '../../contexts/Context';
import './ButtonsGroup.scss';

const ButtonsGroup = () => {
	const { setTotalTip, setPercent, bill, peoples, value, setValue } =
		useContext(Context);

	const handlePercent = (perc) => {
		const localPerc = (bill * perc) / 100;
		setPercent(localPerc);

		if (isNaN(perc)) {
			return;
		}

		if (bill === '' && peoples === '') return;
		if (bill && peoples === '') return;

		setTotalTip((+localPerc + +bill) / peoples);
	};

	const handleOnChange = (e) => {
		const newVal = e.target.value;
		const manualPercent = (+newVal * bill) / 100;

		if (isNaN(newVal)) return;
		if (bill === '' && peoples === '') return;
		if (bill && peoples === '') return;

		setPercent(manualPercent);
		setTotalTip((+manualPercent + +bill) / peoples);
		setValue(newVal);
	};

	return (
		<div className="btn-container">
			<p>Select Tip %</p>

			<div className="btn-container_child">
				{[5, 10, 15, 25, 50].map((numPerc) => {
					return (
						<button
							key={numPerc}
							className="btn"
							onClick={() => handlePercent(numPerc)}
						>
							{numPerc}%
						</button>
					);
				})}

				<input
					className="input-btn"
					type="text"
					placeholder="Custom"
					maxLength="8"
					value={value}
					onChange={handleOnChange}
				/>
			</div>
		</div>
	);
};

export default ButtonsGroup;
