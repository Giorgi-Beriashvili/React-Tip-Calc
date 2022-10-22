import { UserContext } from '../contexts/Context';
import LeftContainer from './left_side/LeftContainer';
import RightContainer from './right_side/RightContainer';
import './TipCalcContainer.scss';

const TipCalcContainer = () => {
	return (
		<UserContext>
			<div className="container">
				<LeftContainer />
				<RightContainer />
			</div>
		</UserContext>
	);
};

export default TipCalcContainer;
