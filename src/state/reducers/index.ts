import cellReducers from './cellReducers';
import { combineReducers } from 'redux';

const reducers = combineReducers({
	cells: cellReducers
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
