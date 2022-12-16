import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalFooter,
	ModalBody,
	Text,
	UnorderedList,
	ListItem
} from "@chakra-ui/react";

const WordBoxModal: React.FC<{ isOpen: boolean; onClose: () => void; words: string[] }> = ({
	isOpen,
	onClose,
	words
}) => {
	return (
		<Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose} isCentered>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader pb={1}>
					<Text fontSize="3xl" fontWeight="bold" textDecor="underline">
						Found Words
					</Text>
				</ModalHeader>
				<ModalCloseButton />
				<ModalBody fontSize="xl">
					{!words.length ? (
						<Text>There are no words!</Text>
					) : (
						<UnorderedList>
							{words
								.sort((a, b) => a.localeCompare(b) && b.length - a.length)
								.map((_, i) => (
									<ListItem key={i}>
										{_} (+{100 * Math.pow(2, _.length - 3)})
									</ListItem>
								))}
						</UnorderedList>
					)}
				</ModalBody>
				<ModalFooter py={{ base: "15vh", md: "10vh" }} />
			</ModalContent>
		</Modal>
	);
};

export default WordBoxModal;
