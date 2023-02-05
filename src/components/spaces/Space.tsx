interface SpaceProps {
	spaceId: string;
	name: string;
	location: string;
	photoUrl?: string;
	reserveSpace: (spaceId: string) => void;
}

const Space: React.FunctionComponent<SpaceProps> = ({
	spaceId = '',
	name = '',
	location = '',
	photoUrl = '',
	reserveSpace = () => {},
}) => <div></div>;

export default Space;
