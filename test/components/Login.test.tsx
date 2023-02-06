import { render } from '@testing-library/react';
import React from 'react';
import Login from '../../src/components/Login';
import { AuthService } from '../../src/services/AuthService';

jest.mock('../services/AuthService');
const authService = new AuthService() as jest.Mocked<AuthService>;
const setUser = jest.fn();

describe('Login', () => {
	it('Renders Login component', () => {
		const view = render(
			<Login authService={authService} setUser={setUser} />
		);
		console.log(view);
	});
});
