import { Flex } from "@chakra-ui/react";

const LetterBox: React.FC<{
	size?: any;
	color?: any;
	letter: string;
}> = ({ size, color, letter }) => {
	return (
		<Flex
			alignItems="center"
			justifyContent="center"
			textAlign="center"
			w={{ base: "12vw", md: size ?? "3rem" }}
			h={{ base: "12vw", md: size ?? "3rem" }}
			border="2px solid black"
			borderRadius="md"
			fontSize={{ base: 30, md: 40 }}
			bg={color}>
			{letter}
		</Flex>
	);
};

export default LetterBox;
