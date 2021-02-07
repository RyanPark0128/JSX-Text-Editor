import ReactDom from 'react-dom';
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import { Provider } from 'react-redux';
import { store } from './state';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import Cell from './components/Cell';
// import TextEditor from './components/TextEditor';
import CellList from './components/CellList';

const App = () => {
	return (
		<Provider store={store}>
			<div>
				<CellList />
			</div>
		</Provider>
	);
};

ReactDom.render(<App />, document.querySelector('#root'));
