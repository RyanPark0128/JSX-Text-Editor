import MonacoEditor from '@monaco-editor/react';

const Editor = () => {
	return (
		<MonacoEditor
			options={{
				wordWrap: 'on'
			}}
			language="javascript"
			theme="dark"
			height="500px"
		/>
	);
};

export default Editor;
