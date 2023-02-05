import React from 'react';
import { User } from '../model/Model';
import { NavLink } from 'react-router-dom';

export class Navbar extends React.Component<{ user: User | undefined }> {
	render() {
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
							return !this.props.user;
						}
						if (name === 'Logout') {
							return this.props.user;
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
	}
}
