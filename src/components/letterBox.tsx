import { Box } from "@chakra-ui/react";

const LetterBox: React.FC<{ letter: string }> = ({ letter }) => {
	return (
		<Box border="2px solid black" borderRadius="xl" w="6rem" h="6rem">
			{letter}
		</Box>
	);
};

export default LetterBox;
