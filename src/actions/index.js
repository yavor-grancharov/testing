import { actions } from './actions';

export function saveComment(comment) {
	return {
		type: actions.SAVE_COMMENT,
		payload: comment,
	};
}

export function clearComments() {
	return {
		type: actions.CLEAR_COMMENTS,
		payload: []
	}
}
