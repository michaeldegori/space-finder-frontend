import { User, UserAttribute } from '../model/Model';

export class AuthService {
	public async login(
		userName: string,
		password: string
	): Promise<User | undefined> {
		if (userName === 'user' && password === '123qwe') {
			return {
				userName: userName,
				email: 'some@email.com',
			};
		}
	}

	public getUserAttributes(user: User): UserAttribute[] {
		const result: UserAttribute[] = [];
		result.push({
			Name: 'description',
			Value: 'Best user ever!',
		});
		result.push({
			Name: 'job',
			Value: 'Engineer',
		});
		result.push({
			Name: 'age',
			Value: '25',
		});
		result.push({
			Name: 'experience',
			Value: '3 years',
		});
		return result;
	}
}
