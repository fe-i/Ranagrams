import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	Text,
} from "@chakra-ui/react";

const HelpModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
	isOpen,
	onClose,
}) => {
	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>How to Play</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Text>lol</Text>
					</ModalBody>
					<ModalFooter />
				</ModalContent>
			</Modal>
		</>
	);
};

export default HelpModal;
