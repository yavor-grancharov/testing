import { commentsReducer } from 'reducers';
import { actions } from 'actions/actions';

let payload;
beforeEach(() => (payload = 'New comment'));

it('handles actions of type SAVE_COMMENT', () => {
	const action = {
		type: actions.SAVE_COMMENT,
		payload: payload,
	};

	const newState = commentsReducer([], action);
	expect(newState).toEqual([payload]);
});

it('handles action with unknown type', () => {
	const newState = commentsReducer([], {});
	expect(newState).toEqual([]);
});
