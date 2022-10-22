import TipCalcContainer from './components/TipCalcContainer';
import Splitter from './assets/images/logo.svg';

function App() {
	return (
		<div className="App">
			<div>
				<img src={Splitter} alt="splitter" draggable="false" />
			</div>

			<TipCalcContainer />
		</div>
	);
}

export default App;
