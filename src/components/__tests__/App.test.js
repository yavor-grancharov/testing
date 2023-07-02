import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import React from 'react';
import App from 'App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped;

beforeEach(() => (wrapped = shallow(<App />)));

it('shows a comment box', () => {
	expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
	expect(wrapped.find(CommentList).length).toEqual(1);
});
