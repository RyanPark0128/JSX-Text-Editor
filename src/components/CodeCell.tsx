import { useState, useEffect } from 'react';
import Editor from './Editor';
import Preview from './Preview';
import bundle from '../bundler';
import Resizable from './Resizable';
import { Cell } from '../state';
import { useAction } from '../hooks/use-actions';

interface CellProps {
	cell: Cell;
}

const CodeCell: React.FC<CellProps> = ({ cell }) => {
	const [error, setError] = useState('');
	const [code, setCode] = useState('');
	const { updateCell } = useAction();

	useEffect(() => {
		const timer = setTimeout(async () => {
			const output = await bundle(cell.content);
			setCode(output.code);
			setError(output.err);
		}, 1000);

		return () => {
			clearTimeout(timer);
		};
	}, [cell.content]);

	return (
		<Resizable direction="vertical">
			<div className="cell--container">
				<Resizable direction="horizontal">
					<Editor
						initialValue={cell.content}
						onChange={value => updateCell(cell.id, value)}
					/>
				</Resizable>
				<Preview code={code} err={error} />
			</div>
		</Resizable>
	);
};

export default CodeCell;
