import ReactDom from 'react-dom';
import 'bulmaswatch/superhero/bulmaswatch.min.css';
// import Cell from './components/Cell';
import TextEditor from './components/TextEditor';

const App = () => {
	return (
		<div>
			<TextEditor />
		</div>
	);
};

ReactDom.render(<App />, document.querySelector('#root'));
