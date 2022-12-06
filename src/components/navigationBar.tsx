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

export default function NavigationBar() {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Box bg={useColorModeValue("gray.100", "gray.900")} px={8} py={4}>
			<Flex alignItems="center" justifyContent="space-between">
				<Link href="/">
					<Image w={10} alt="steak" src="steak.svg" />
				</Link>
				<Heading
					py={5}
					display="inline-block"
					fontSize="20px"
					bgGradient="linear(to-r, red.300, red.500)"
					backgroundClip="text">
					Vanagrams
				</Heading>
				<Button onClick={toggleColorMode}>
					{colorMode === "light" ? <MoonIcon /> : <SunIcon />}
				</Button>
			</Flex>
		</Box>
	);
}
