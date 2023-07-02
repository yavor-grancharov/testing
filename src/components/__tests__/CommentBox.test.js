import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import CommentBox from 'components/CommentBox';

let wrapped;
let payload;

beforeEach(() => {
	wrapped = mount(
		<Root>
			<CommentBox />
		</Root>
	);
	payload = 'New comment';
});
afterEach(() => wrapped.unmount());

it('has a text area and button', () => {
	expect(wrapped.find('textarea').length).toEqual(1);
	expect(wrapped.find('button').length).toEqual(1);
});

describe('Textarea test', () => {
	beforeEach(() => {
		wrapped.find('textarea').simulate('change', { target: { value: payload } });
		wrapped.update();
	});

	it('has a text area that users can type in', () => {
		expect(wrapped.find('textarea').prop('value')).toEqual(payload);
	});

	it('when form is submitted, textarea gets emptied', () => {
		wrapped.find('form').simulate('submit');
		wrapped.update();
		expect(wrapped.find('textarea').prop('value')).toEqual('');
	});
});
