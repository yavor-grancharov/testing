import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearComments, saveComment } from 'actions';

function CommentBox() {
	const [comment, setComment] = React.useState('');
	const comments = useSelector((state) => state.comments);
	const ref = React.useRef(null);

	const dispatch = useDispatch();

	const handleComment = (ev) => {
		if (!!ev.target.value) setComment(ev.target.value);
	};

	const handleSubmit = (ev) => {
		ev.preventDefault();

		if (!!comment && !comments.includes(comment)) {
			dispatch(saveComment(comment));
			setComment('');
			if (ref.current) ref.current.focus();
		}
	};

	const clearHandler = (ev) => {
		ev.preventDefault();
		dispatch(clearComments());
		if (ref.current) ref.current.focus();
	};

	return (
		<div style={{ margin: '0 auto' }}>
			<form onSubmit={handleSubmit}>
				<h4>Comment</h4>
				<textarea ref={ref} rows={10} cols={40} onChange={handleComment} value={comment || ''}></textarea>
				<div>
					<button type='submit'>Submit</button>{' '}
					<a href='/' onClick={clearHandler}>
						Clear
					</a>
				</div>
			</form>
		</div>
	);
}

export default CommentBox;
