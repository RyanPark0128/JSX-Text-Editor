import ReactDom from 'react-dom';
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import { Provider } from 'react-redux';
import { store } from './state';
// import Cell from './components/Cell';
import TextEditor from './components/TextEditor';

const App = () => {
	return (
		<Provider store={store}>
			<div>
				<TextEditor />
			</div>
		</Provider>
	);
};

ReactDom.render(<App />, document.querySelector('#root'));
