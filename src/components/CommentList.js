import React from 'react';
import { useSelector } from 'react-redux';

function CommentList() {
	const comments = useSelector((state) => state.comments);

	const renderedComments = comments.map((comment, index) => <li key={index}>{comment}</li>);
	return (
		<div>
			<ul>{renderedComments}</ul>
		</div>
	);
}

export default CommentList;
