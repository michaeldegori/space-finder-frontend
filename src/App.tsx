import { useState } from 'react';
import { AuthService } from './services/AuthService';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router';
import Home from './components/Home';
import Profile from './components/Profile';
import { User } from './model/Model';
import Spaces from './components/spaces/Spaces';
import { DataService } from './services/DataService';

const App: React.FunctionComponent = () => {
	const [user, setUser] = useState<User | undefined>(undefined);

	const authService: AuthService = new AuthService();
	const dataService: DataService = new DataService();

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
					<Route
						path='/spaces'
						element={<Spaces dataService={dataService} />}
					/>
				</Routes>
			</div>
		</div>
	);
};

export default App;
