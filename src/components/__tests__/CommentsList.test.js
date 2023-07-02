import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import CommentList from 'components/CommentList';

let wrapped;
let payload;

beforeEach(() => {
	const preloadedState = {
		comments: ['Comment 1']
	}
	
	wrapped = mount(
		<Root>
			<CommentList />
		</Root>
	);
	payload = 'New comment';
});
afterEach(() => wrapped.unmount());

it('creates LI element on each comment', () => {
    console.log(wrapped.find('li').length)
});
