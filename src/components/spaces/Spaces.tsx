import { useEffect, useState } from 'react';
import { Space } from '../../model/Model';
import { DataService } from '../../services/DataService';
import SpaceComponent from './SpaceComponent';
import ConfirmModalComponent from './ConfirmModalComponent';

interface SpaceProps {
	dataService: DataService;
}
const Spaces: React.FunctionComponent<SpaceProps> = ({ dataService }) => {
	const [spaces, setSpaces] = useState<Space[]>([]);
	const [modalVisible, setModalVisible] = useState(false);
	const [modalContent, setModalContent] = useState('');

	useEffect(() => {
		const spaces = dataService.getSpaces();
		setSpaces(spaces);
	}, [dataService]);

	const reserveSpace = async (spaceId: string) => {
		const reservationResult = await dataService.reserveSpace(spaceId);
		const spaceName = spaces.find(space => space.spaceId === spaceId)?.name;

		if (reservationResult) {
			setModalVisible(true);
			setModalContent(
				`You reserved ${spaceName}! Reservation ID: ${reservationResult}`
			);
		} else {
			setModalVisible(true);
			setModalContent(`You can't reserve ${spaceName}`);
		}
	};

	const renderSpaces = () => {
		const rows: JSX.Element[] = [];

		spaces.forEach(space => {
			rows.push(
				<SpaceComponent
					location={space.location}
					name={space.name}
					spaceId={space.spaceId}
					reserveSpace={reserveSpace}
				/>
			);
		});
		return <div className='grid gap-5 grid-cols-3'>{rows}</div>;
	};

	return (
		<div>
			<h2>Welcome to the Spaces Page!</h2>
			{renderSpaces()}
			<ConfirmModalComponent
				isVisible={modalVisible}
				content={modalContent}
				close={() => {
					setModalVisible(false);
					setModalContent('');
				}}
			/>
		</div>
	);
};

export default Spaces;
