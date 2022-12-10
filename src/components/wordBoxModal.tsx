import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	Button,
	Flex,
	Text,
} from "@chakra-ui/react";

const WordBoxModal: React.FC<{
	isOpen: boolean;
	onClose: () => void;
	words: string[];
}> = ({ isOpen, onClose, words }) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader
					fontSize="3xl"
					textDecoration="underline"
					textAlign="center">
					Used Words
				</ModalHeader>
				<ModalBody fontSize="xl">
					{!words.length ? (
						<Text>There's no words yet!</Text>
					) : (
						words
							.sort(
								(a, b) =>
									a.localeCompare(b) && b.length - a.length
							)
							.map((_, i) => (
								<Flex key={i}>
									<Text key={i}>
										{_} (+{100 * Math.pow(2, _.length - 3)})
									</Text>
								</Flex>
							))
					)}
				</ModalBody>
				<ModalFooter>
					<Button colorScheme="blue" onClick={onClose}>
						Close
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default WordBoxModal;
