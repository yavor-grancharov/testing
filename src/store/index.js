import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { commentsReducer } from 'reducers/comments';

const rootReducer = combineReducers({
	comments: commentsReducer,
});

const store = configureStore({ reducer: rootReducer, preloadedState: { comments: ['Comment 1'] } });

export { store };
