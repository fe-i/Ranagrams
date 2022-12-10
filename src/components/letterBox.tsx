import { Button } from "@chakra-ui/react";

const LetterBox: React.FC<{
	letter: string;
	disabled: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}> = ({ letter, disabled, onClick }) => {
	return (
		<Button
			border="1.5px solid black"
			borderRadius="md"
			w={{ base: "12vw", md: "6rem" }}
			h={{ base: "12vw", md: "6rem" }}
			fontSize={{ base: 20, md: 40 }}
			disabled={disabled}
			onClick={onClick}>
			{letter}
		</Button>
	);
};

export default LetterBox;
