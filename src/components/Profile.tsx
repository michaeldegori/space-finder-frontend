import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { User, UserAttribute } from '../model/Model';
import { AuthService } from '../services/AuthService';

interface ProfileProps {
	user: User | undefined;
	authService: AuthService;
}
const Profile: React.FunctionComponent<ProfileProps> = ({
	user,
	authService,
}) => {
	const [userAttributes, setUserAttributes] = useState<UserAttribute[]>([]);

	useEffect(() => {
		if (user) {
			const userAttrs = authService.getUserAttributes(user);
			setUserAttributes(userAttrs);
		}
	}, [authService, user]);

	const renderUserAttributes = () => {
		const rows: JSX.Element[] = [];
		userAttributes.forEach(userAttribute => {
			rows.push(
				<tr key={userAttribute.Name}>
					<td>{userAttribute.Name}</td>
					<td>{userAttribute.Value}</td>
				</tr>
			);
		});

		return (
			<table>
				<tbody>{rows}</tbody>
			</table>
		);
	};

	if (!user) {
		return (
			<div>
				Please <Link to='/login'>Login</Link>
			</div>
		);
	}
	return (
		<div>
			<h3>Welcome {user.userName}</h3>
			Here are your attributes: {renderUserAttributes()}
		</div>
	);
};

export default Profile;
