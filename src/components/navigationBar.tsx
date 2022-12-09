import {
	Box,
	Flex,
	Link,
	Heading,
	Button,
	useColorModeValue,
	useColorMode,
	HStack,
	useDisclosure,
} from "@chakra-ui/react";
import {
	MoonIcon,
	SunIcon,
	QuestionIcon,
	QuestionOutlineIcon,
} from "@chakra-ui/icons";
import HelpModal from "./helpModal";

const NavigationBar: React.FC = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box
			bg={useColorModeValue("gray.100", "gray.900")}
			px={8}
			py={4}
			w="100%">
			<HelpModal isOpen={isOpen} onClose={onClose} />
			<Flex alignItems="center" justifyContent="space-between">
				<Link href="/">
					<Heading
						py={1}
						display="inline-block"
						fontSize="35px"
						bgGradient="linear(to-r, blue.400, blue.600)"
						backgroundClip="text">
						Vanagrams
					</Heading>
				</Link>
				<HStack>
					<Button onClick={onOpen} w="3rem" h="3rem">
						{colorMode === "light" ? (
							<QuestionOutlineIcon w="1.5rem" h="1.5rem" />
						) : (
							<QuestionIcon w="1.5rem" h="1.5rem" />
						)}
					</Button>
					<Button onClick={toggleColorMode} w="3rem" h="3rem">
						{colorMode === "light" ? (
							<MoonIcon w="1.5rem" h="1.5rem" />
						) : (
							<SunIcon w="1.5rem" h="1.5rem" />
						)}
					</Button>
				</HStack>
			</Flex>
		</Box>
	);
};

export default NavigationBar;
