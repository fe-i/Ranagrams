import {
	Modal,
	ModalOverlay,
	ModalContent,
	Flex,
	Text,
	UnorderedList,
	ListItem,
	Button,
	Tabs,
	TabList,
	Tab,
	TabPanels,
	TabPanel,
	Kbd
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
			<ModalContent p={1}>
				<Tabs variant="enclosed" isFitted>
					<TabList>
						<Tab fontWeight="bold">Objective</Tab>
						<Tab fontWeight="bold">Controls</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<Text fontSize="xl" fontWeight="normal" mb={2}>
								Click on the letters to add them to the word builder and hit submit
								when you have formed a valid word. Try to make as many unique words
								as you can before the timer runs out!
							</Text>
							<UnorderedList mb={2} fontSize="lg">
								<ListItem>Each word must use at least 3 letters.</ListItem>
								<ListItem>Each letter can only be used once.</ListItem>
							</UnorderedList>

							<Text fontSize="lg" fontWeight="semibold" textDecor="underline">
								Example
							</Text>
							<Flex flexDir="row" gap={4}>
								{"melons".split("").map((_, i) => (
									<LetterBox color="green.300" key={i} letter={_} />
								))}
							</Flex>
							<Text fontSize="lg">can be rearranged into...</Text>
							<Flex flexDir="row" gap={4}>
								{"lemons".split("").map((_, i) => (
									<LetterBox color="yellow.200" key={i} letter={_} />
								))}
							</Flex>
						</TabPanel>
						<TabPanel>
							<Flex flexDir="column" fontSize="lg" gap={5}>
								<Text>
									<Kbd>A</Kbd> <Kbd>B</Kbd> <Kbd>C</Kbd> Add letter to word
									builder
								</Text>
								<Text>
									<Kbd>⌫</Kbd> Remove last letter from word builder
								</Text>
								<Text>
									<Kbd>⏎</Kbd> Submit letters from word builder
								</Text>
								<Text>
									<Kbd>/</Kbd> Shuffle the letter array
								</Text>
							</Flex>
						</TabPanel>
					</TabPanels>
				</Tabs>
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
			</ModalContent>
		</Modal>
	);
};

export default StartModal;
