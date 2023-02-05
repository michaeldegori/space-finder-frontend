interface ConfirmModalComponentProps {
	isVisible: boolean;
	content: string;
	close: () => void;
}

const ConfirmModalComponent: React.FunctionComponent<
	ConfirmModalComponentProps
> = ({ isVisible, content, close }) => {
	if (!isVisible) {
		return null;
	}

	return (
		<div className='fixed z-10 pt-24 left-0 top-0 w-full h-full overflow-auto bg-black-400'>
			<div className='bg-white m-auto p-5 border-2 border-slate-200 w-1/2'>
				<h2>You tried to reserve and...</h2>
				<h3 className=''>{content}</h3>
				<button
					onClick={close}
					className='bg-indigo-900 px-2 py-1 text-white rounded-lg font-bold'
				>
					Close
				</button>
			</div>
		</div>
	);
};

export default ConfirmModalComponent;
