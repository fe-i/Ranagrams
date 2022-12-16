import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	Button,
} from "@chakra-ui/react";

const PopupModal: React.FC<{
	isOpen: boolean;
	onClose: () => void;
	isReady: boolean;
}> = ({ isOpen, onClose, isReady }) => {
	return (
		<Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader
					fontSize="3xl"
					textDecoration="underline"
					textAlign="center">
					Objective
				</ModalHeader>
				<ModalBody fontSize="xl">
					Create as many words as you can in 60 seconds. Click on the
					letters to add them to the word builder and hit submit when
					you have formed a valid word. Click start whenever
					you&apos;re ready.
				</ModalBody>
				<ModalFooter>
					{isReady ? (
						<Button colorScheme="green" onClick={onClose}>
							Start
						</Button>
					) : (
						<Button
							isLoading
							loadingText="Loading"
							colorScheme="green"
							variant="outline"
							spinnerPlacement="start"
						/>
					)}
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default PopupModal;
