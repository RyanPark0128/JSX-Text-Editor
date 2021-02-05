import ReactDom from 'react-dom';
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import Cell from './components/Cell';

const App = () => {
	return (
		<div>
			<Cell />
		</div>
	);
};

ReactDom.render(<App />, document.querySelector('#root'));
