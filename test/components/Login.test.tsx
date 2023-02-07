import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Login from '../../src/components/Login';
import { AuthService } from '../../src/services/AuthService';

const setUser = jest.fn();

describe('Login', () => {
	it('Login component renders successfully on load', () => {
		const authService = new AuthService();

		render(
			<BrowserRouter>
				<Login authService={authService} setUser={setUser} />
			</BrowserRouter>
		);

		const usernameInput = screen.getByPlaceholderText(/username/i);
		const passwordInput = screen.getByPlaceholderText(/password/i);
		const submitButton = screen.getByRole('button', { name: /submit/i });

		// Assert that all the elements are present
		expect(usernameInput).toBeInTheDocument();
		expect(passwordInput).toBeInTheDocument();
		expect(submitButton).toBeInTheDocument();
	});
});
