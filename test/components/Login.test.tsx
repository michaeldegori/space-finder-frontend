import { render } from '@testing-library/react';
import React from 'react';
import Login from '../../src/components/Login';
import { AuthService } from '../../src/services/AuthService';

const authService = jest.fn();
const setUser = jest.fn();

describe('Login', () => {
	it('Renders Login component', () => {
		const view = render(<Login authService={{}} setUser={setUser} />);
		console.log(view);
	});
});
