import { saveComment } from 'actions';
import { actions } from 'actions/actions';

let payload;

beforeEach(() => (payload = 'New comment'));

describe('Save new comment', () => {
	it('has the correct type', () => {
		const action = saveComment();
		expect(action.type).toEqual(actions.SAVE_COMMENT);
	});

	it('has the correct payload', () => {
		const action = saveComment(payload);
		expect(action.payload).toEqual(payload);
	});
});
