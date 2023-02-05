import React from 'react';
import { User } from './model/Model';
import { AuthService } from './services/AuthService';
import { Login } from './components/Login';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router';
import { Home } from './components/Home';
import { Profile } from './components/Profile';

interface AppState {
	user: User | undefined;
}

export class App extends React.Component<{}, AppState> {
	private authService: AuthService = new AuthService();

	constructor(props: any) {
		super(props);
		this.state = { user: undefined };
		this.setUser = this.setUser.bind(this);
	}

	private setUser(user: User) {
		this.setState({ user: user });
	}

	render() {
		return (
			<div className='m-auto w-9/12'>
				<div>
					<Navbar user={this.state.user} />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route
							path='/login'
							element={
								<Login
									authService={this.authService}
									setUser={this.setUser}
								/>
							}
						/>
						<Route path='/profile' element={<Profile />} />
					</Routes>
				</div>
			</div>
		);
	}
}
