import {
	Box,
	Heading,
	Text,
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
} from "@chakra-ui/react";
import Layout from "../components/layout";

function PromptAction() {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Button onClick={onOpen}>Trigger modal</Button>

			<Modal onClose={onClose} isOpen={isOpen} isCentered>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Modal Title</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Text>lol</Text>
					</ModalBody>
					<ModalFooter>
						<Button onClick={onClose}>Close</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}

export default function Home() {
	return (
		<Layout>
			<Box textAlign="left" fontSize="xl" px={8}>
				<Text my={7}>Welcome to VANAGRAMS!</Text>
				{PromptAction()}
			</Box>
		</Layout>
	);
}
