import {
	Box,
	Flex,
	Image,
	Link,
	Heading,
	Button,
	useColorModeValue,
	useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const NavigationBar: React.FC = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Box
			bg={useColorModeValue("gray.100", "gray.900")}
			px={8}
			py={4}
			w="100%">
			<Flex alignItems="center" justifyContent="space-between">
				<Link href="/">
					<Image w={8} alt="steak" src="steak.svg" />
				</Link>
				<Heading
					py={1}
					display="inline-block"
					fontSize="30px"
					bgGradient="linear(to-r, red.300, red.500)"
					backgroundClip="text">
					Vanagrams
				</Heading>
				<Button onClick={toggleColorMode} w={8}>
					{colorMode === "light" ? <MoonIcon /> : <SunIcon />}
				</Button>
			</Flex>
		</Box>
	);
};

export default NavigationBar;
