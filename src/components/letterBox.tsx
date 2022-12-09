import { Button } from "@chakra-ui/react";

const LetterBox: React.FC<{
	letter: string;
	disabled: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}> = ({ letter, disabled, onClick }) => {
	return (
		<Button
			border="2px solid black"
			borderRadius="xl"
			w={{ base: "10vw", md: "6rem" }}
			h={{ base: "10vw", md: "6rem" }}
			fontSize={{ base: 20, md: 40 }}
			disabled={disabled}
			onClick={onClick}>
			{letter}
		</Button>
	);
};

export default LetterBox;
