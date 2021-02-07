import { useEffect } from 'react';
import Editor from './Editor';
import Preview from './Preview';
import Resizable from './Resizable';
import { Cell } from '../state';
import { useAction } from '../hooks/use-actions';
import { useTypedSelector } from '../hooks/use-typed-selectr';
import { useCumulativeCode } from '../hooks/use-cumulative-code';
import './CodeCell.css';

interface CellProps {
	cell: Cell;
}

const CodeCell: React.FC<CellProps> = ({ cell }) => {
	const { updateCell, createBundle } = useAction();
	const bundle = useTypedSelector(state => state.bundles[cell.id]);
	const cumulativeCode = useCumulativeCode(cell.id);

	useEffect(() => {
		if (!bundle) {
			createBundle(cell.id, cumulativeCode);
			return;
		}

		const timer = setTimeout(async () => {
			createBundle(cell.id, cumulativeCode);
		}, 1000);

		return () => {
			clearTimeout(timer);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [cumulativeCode, cell.id, createBundle]);

	return (
		<Resizable direction="vertical">
			<div className="cell--container">
				<Resizable direction="horizontal">
					<Editor
						initialValue={cell.content}
						onChange={value => updateCell(cell.id, value)}
					/>
				</Resizable>
				<div className="progress-container">
					{!bundle || bundle.loading ? (
						<div className="progress-cover">
							<progress className="progress is-small is-primary" max="100">
								Loading
							</progress>
						</div>
					) : (
						<Preview code={bundle.code} err={bundle.err} />
					)}
				</div>
			</div>
		</Resizable>
	);
};

export default CodeCell;
