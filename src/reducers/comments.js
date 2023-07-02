import { actions } from 'actions/actions';

function commentsReducer(state = [], action) {
	switch (action.type) {
		case actions.SAVE_COMMENT:
			return [...state, action.payload];
		case actions.CLEAR_COMMENTS:
			return action.payload;
		default:
			return state;
	}
}

export { commentsReducer };
