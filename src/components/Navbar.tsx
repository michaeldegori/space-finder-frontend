import { User } from '../model/Model';
import { NavLink } from 'react-router-dom';

interface NavbarProps {
	user: User | undefined;
}

const Navbar: React.FunctionComponent<NavbarProps> = ({ user = undefined }) => {
	return (
		<div className='truncate bg-gray-800'>
			{[
				{ to: '/', name: 'Home' },
				{ to: '/profile', name: 'Profile' },
				{ to: '/login', name: 'Login' },
				{ to: '/logout', name: 'Logout' },
			]
				.filter(({ name }) => {
					if (name === 'Login') {
						return !user;
					}
					if (name === 'Logout') {
						return user;
					}
					return true;
				})
				.map(({ to, name }) => (
					<NavLink
						key={name}
						to={to}
						className={({ isActive }) =>
							`no-underline text-base py-3.5 px-4 text-white hover:bg-white hover:text-black ${
								isActive ? 'bg-lime-500 text-white' : ''
							} ${
								name === 'Login' || name === 'Logout'
									? 'float-right'
									: 'float-left'
							}`
						}
					>
						{name}
					</NavLink>
				))}
		</div>
	);
};

export default Navbar;
