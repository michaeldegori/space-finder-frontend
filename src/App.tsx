import { useState } from 'react';
import { AuthService } from './services/AuthService';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router';
import Home from './components/Home';
import Profile from './components/Profile';
import { User } from './model/Model';

const App: React.FunctionComponent = () => {
	const [user, setUser] = useState<User | undefined>(undefined);

	const authService: AuthService = new AuthService();

	return (
		<div className='m-auto w-9/12'>
			<div>
				<Navbar user={user} />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route
						path='/login'
						element={
							<Login
								authService={authService}
								setUser={userData => {
									setUser(userData);
								}}
							/>
						}
					/>
					<Route
						path='/profile'
						element={
							<Profile authService={authService} user={user} />
						}
					/>
				</Routes>
			</div>
		</div>
	);
};

export default App;
