import { Button } from "@chakra-ui/react";

const LetterBox: React.FC<{
	letter: string;
	disabled: boolean;
	onClick?: any;
}> = ({ letter, disabled, onClick }) => {
	return (
		<Button
			border="2px solid black"
			borderRadius="xl"
			w="6rem"
			h="6rem"
			fontSize={40}
			disabled={disabled}
			onClick={onClick}>
			{letter}
		</Button>
	);
};

export default LetterBox;
