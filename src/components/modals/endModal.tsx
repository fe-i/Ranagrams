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
	Link,
	Button,
	HStack
} from "@chakra-ui/react";

const EndModal: React.FC<
	React.PropsWithChildren<{
		isOpen: boolean;
		words: any;
		score: number;
		wordBoxOpen: MouseEventHandler<HTMLAnchorElement>;
		startOpen: MouseEventHandler<HTMLButtonElement>;
	}>
> = ({ isOpen, words, score, wordBoxOpen, startOpen }) => {
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
						<ListItem>Score: {score}</ListItem>
						<ListItem>Words Found: {words.length}</ListItem>
					</UnorderedList>
					<Text>
						Click{" "}
						<Link fontWeight="bold" onClick={wordBoxOpen}>
							here
						</Link>{" "}
						to view the words that you found.
					</Text>
				</ModalBody>
				<ModalFooter>
					<HStack>
						<Link href="/singleplayer">
							<Button colorScheme="green">Play Again (reload)</Button>
						</Link>
						<Button colorScheme="green" onClick={startOpen}>
							Play Again
						</Button>
					</HStack>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default EndModal;
