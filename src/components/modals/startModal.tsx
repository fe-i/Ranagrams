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
	HStack,
	Button
} from "@chakra-ui/react";
import LetterBox from "../letterBox";

const StartModal: React.FC<{
	isOpen: boolean;
	onClose: () => void;
	isReady: boolean;
}> = ({ isOpen, onClose, isReady }) => {
	return (
		<Modal
			closeOnOverlayClick={false}
			blockScrollOnMount={true}
			isOpen={isOpen}
			onClose={onClose}
			isCentered>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader pb={1}>
					<Text fontSize="3xl" fontWeight="bold" textDecor="underline">
						Objective
					</Text>
					<Text fontSize="xl" fontWeight="normal">
						Click on the letters to add them to the word builder and hit submit when you
						have formed a valid word. Try to make as many unique words as you can before
						the timer runs out!
					</Text>
				</ModalHeader>
				<ModalBody>
					<UnorderedList mb={2} fontSize="lg">
						<ListItem>Each word must use at least 3 letters.</ListItem>
						<ListItem>Each letter can only be used once.</ListItem>
					</UnorderedList>

					<Text fontSize="lg" fontWeight="semibold" textDecor="underline">
						Example
					</Text>
					<HStack>
						{"melons".split("").map((_, i) => (
							<LetterBox color="green.300" key={i} letter={_} />
						))}
					</HStack>
					<Text fontSize="lg">can be rearranged into...</Text>
					<HStack>
						{"lemons".split("").map((_, i) => (
							<LetterBox color="yellow.200" key={i} letter={_} />
						))}
					</HStack>
				</ModalBody>
				<ModalFooter>
					{isReady ? (
						<Button colorScheme="green" onClick={onClose}>
							Click To Start
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

export default StartModal;
