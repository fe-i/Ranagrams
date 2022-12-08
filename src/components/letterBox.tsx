import { Button } from "@chakra-ui/react";

const LetterBox: React.FC<{ letter: string; onClick: any }> = ({
	letter,
	onClick,
}) => {
	return (
		<Button
			border="2px solid black"
			borderRadius="xl"
			w="6rem"
			h="6rem"
			disabled={letter === ""}
			onClick={onClick}>
			{letter}
		</Button>
	);
};

export default LetterBox;
