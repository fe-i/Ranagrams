import { MouseEventHandler } from "react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	Text,
	UnorderedList,
	ListItem,
	Button
} from "@chakra-ui/react";

const EndModal: React.FC<
	React.PropsWithChildren<{
		isOpen: boolean;
		words: any;
		score: number;
		wordBoxOpen: MouseEventHandler<HTMLButtonElement>;
	}>
> = ({ isOpen, words, score, wordBoxOpen }) => {
	return (
		<Modal
			closeOnOverlayClick={false}
			blockScrollOnMount={true}
			isOpen={isOpen}
			onClose={() => {}}
			isCentered>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader pb={1}>
					<Text fontSize="3xl" fontWeight="bold" textDecor="underline">
						Game Statistics
					</Text>
				</ModalHeader>
				<ModalBody fontSize="xl" py={0}>
					<UnorderedList mb={3}>
						<ListItem>Score: {score.toLocaleString()}</ListItem>
						<ListItem>Words Found: {words.length}</ListItem>
					</UnorderedList>
				</ModalBody>
				<ModalFooter gap={2}>
					<Button onClick={wordBoxOpen}>View Words</Button>
					<Button
						title="Play Again"
						colorScheme="green"
						onClick={() => window.location.reload()}>
						Play Again
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default EndModal;
