import { Flex, Heading, Image, Button, useDisclosure } from "@chakra-ui/react";
import { QuestionOutlineIcon } from "@chakra-ui/icons";
import Link from "next/link";
import HelpModal from "./modals/helpModal";

const NavigationBar: React.FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Flex alignItems="center" justifyContent="space-between" p={5} shadow="md">
			<HelpModal isOpen={isOpen} onClose={onClose} />
			<Link href="/" title="Home">
				<Flex alignItems="center">
					<Image w={12} alt="Logo" src="/logo.png" />
					<Heading
						pb={1}
						display="inline-block"
						bgGradient="linear(to-r, blue.400, blue.600)"
						backgroundClip="text">
						anagrams
					</Heading>
				</Flex>
			</Link>
			<Button onClick={onOpen} w="3rem" h="3rem" variant="ghost">
				<QuestionOutlineIcon w="1.5rem" h="1.5rem" />
			</Button>
		</Flex>
	);
};

export default NavigationBar;
