import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	Button,
} from "@chakra-ui/react";

const HelpModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
	isOpen,
	onClose,
}) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader
					fontSize="3xl"
					textDecoration="underline"
					textAlign="center">
					How to Play
				</ModalHeader>
				<ModalBody fontSize="xl">
					Based on the letters provided, combine them to make words.
					Try to make as many unique words as you can before the timer
					runs out!
				</ModalBody>
				<ModalFooter>
					<Button colorScheme="green" onClick={onClose}>
						Got It
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default HelpModal;
