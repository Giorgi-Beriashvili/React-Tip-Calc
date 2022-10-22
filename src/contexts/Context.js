import { createContext, useState } from 'react';

export const Context = createContext({});

export const UserContext = ({ children }) => {
	const [bill, setBill] = useState('');
	const [percent, setPercent] = useState(0);
	const [peoples, setPeoples] = useState('');
	const [totalTip, setTotalTip] = useState(0);
	const [value, setValue] = useState('');

	return (
		<Context.Provider
			value={{
				bill,
				setBill,
				percent,
				setPercent,
				peoples,
				setPeoples,
				totalTip,
				setTotalTip,
				value,
				setValue,
			}}
		>
			{children}
		</Context.Provider>
	);
};
