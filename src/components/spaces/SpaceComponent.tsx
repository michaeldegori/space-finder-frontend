import genericSpace from '../../assets/airbnb.jpg';

interface SpaceComponentProps {
	spaceId: string;
	name: string;
	location: string;
	imageUrl?: string;
	reserveSpace: (spaceId: string) => void;
}

const SpaceComponent = ({
	spaceId = '',
	name = '',
	location = '',
	imageUrl = '',
	reserveSpace = () => {},
}: SpaceComponentProps) => {
	const renderImage = () => {
		if (imageUrl) {
			return (
				<img
					className='max-w-full max-h-full'
					src={imageUrl}
					alt='space'
				/>
			);
		} else {
			return (
				<img
					className='max-w-full max-h-full'
					src={genericSpace}
					alt='space'
				/>
			);
		}
	};

	return (
		<div className=''>
			{renderImage()}
			<label className='text-center uppercase text-indigo-800'>
				{name}
			</label>
			<br />
			<label className=''>{spaceId}</label>
			<br />
			<label>{location}</label>
			<br />
			<button
				onClick={() => reserveSpace(spaceId)}
				className='bg-indigo-900 px-2 py-1 text-white rounded-lg font-bold'
			>
				Reserve
			</button>
		</div>
	);
};

export default SpaceComponent;
