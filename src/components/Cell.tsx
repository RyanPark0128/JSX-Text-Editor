import { useState } from 'react';
import Editor from './Editor';
import Preview from './Preview';
import bundle from '../bundler';

const Cell = () => {
	const [input, setInput] = useState('');
	const [code, setCode] = useState('');

	const onClick = async () => {
		const output = await bundle(input);
		setCode(output);
	};

	return (
		<div>
			<Editor
				initialValue="//Welcome to React code editor"
				onChange={value => setInput(value)}
			/>
			<div>
				<button onClick={onClick}>Submit</button>
			</div>
			<Preview code={code} />
		</div>
	);
};

export default Cell;
