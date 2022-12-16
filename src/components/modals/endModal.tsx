import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	Button,
	Link,
} from "@chakra-ui/react";

const EndModal: React.FC<React.PropsWithChildren<{ isOpen: boolean }>> = ({
	isOpen,
	children,
}) => {
	return (
		<Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={() => {}}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader
					fontSize="3xl"
					textDecoration="underline"
					textAlign="center">
					Game Over
				</ModalHeader>
				<ModalBody fontSize="xl">{children}</ModalBody>
				<ModalFooter>
					<Link href="/singleplayer">
						<Button colorScheme="green">Play Again</Button>
					</Link>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default EndModal;
