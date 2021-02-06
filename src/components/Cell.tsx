import { useState, useEffect } from 'react';
import Editor from './Editor';
import Preview from './Preview';
import bundle from '../bundler';
import Resizable from './Resizable';

const Cell = () => {
	const [input, setInput] = useState('');
	const [code, setCode] = useState('');

	useEffect(() => {
		const timer = setTimeout(async () => {
			const output = await bundle(input);
			setCode(output);
		}, 1000);

		return () => {
			clearTimeout(timer);
		};
	}, [input]);

	return (
		<Resizable direction="vertical">
			<div className="cell--container">
				<Resizable direction="horizontal">
					<Editor
						initialValue="//Welcome to React code editor"
						onChange={value => setInput(value)}
					/>
				</Resizable>
				<Preview code={code} />
			</div>
		</Resizable>
	);
};

export default Cell;
