import { Space } from '../model/Model';

export class DataService {
	public getSpaces(): Space[] {
		const result: Space[] = [];
		result.push({
			location: 'Paris',
			name: 'Best Paris',
			spaceId: '123',
		});
		result.push({
			location: 'Miami',
			name: 'Best Miami',
			spaceId: '234',
		});
		result.push({
			location: 'New York',
			name: 'Best NYC',
			spaceId: '345',
		});
		result.push({
			location: 'DC',
			name: 'Best DC',
			spaceId: '456',
		});
		return result;
	}

	public async reserveSpace(spaceId: string): Promise<string | undefined> {
		if (spaceId === '123') {
			return '5555';
		} else {
			return undefined;
		}
	}
}
