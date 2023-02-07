import { SyntheticEvent, useState } from 'react';
import { User } from '../model/Model';
import { AuthService } from '../services/AuthService';
import { useNavigate } from 'react-router-dom';

interface LoginProps {
	authService: AuthService;
	setUser: (user: User) => void;
}

const Login = ({ authService, setUser }: LoginProps) => {
	const navigate = useNavigate();

	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [loginAttempted, setLoginAttempted] = useState(false);
	const [loginSuccessful, setLoginSuccessful] = useState(false);

	const handleSubmit = async (event: SyntheticEvent) => {
		event.preventDefault();
		setLoginAttempted(true);
		const result = await authService.login(userName, password);

		if (result) {
			setLoginSuccessful(true);
			setUser(result);
			console.log({ result });
			navigate('/profile');
		} else {
			console.log('Wrong login');
		}
	};

	let loginMessage: any;
	if (loginAttempted) {
		if (loginSuccessful) {
			loginMessage = <label>Login successful</label>;
		} else {
			loginMessage = <label>Login failed</label>;
		}
	}

	return (
		<div data-testid='login'>
			<h2>Please login</h2>
			<form onSubmit={event => handleSubmit(event)}>
				<input
					placeholder='Username'
					value={userName}
					onChange={event => setUserName(event.target.value)}
				/>
				<br />
				<input
					placeholder='Password'
					value={password}
					onChange={event => setPassword(event.target.value)}
					type='password'
				/>
				<br />
				<input type='submit' />
			</form>
			{loginMessage}
		</div>
	);
};

export default Login;
