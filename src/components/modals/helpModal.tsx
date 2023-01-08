import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalFooter,
	ModalBody,
	Flex,
	Tabs,
	TabList,
	Tab,
	TabPanels,
	TabPanel,
	Text,
	UnorderedList,
	ListItem,
	Divider,
	Kbd
} from "@chakra-ui/react";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import LetterBox from "../letterBox";

const HelpModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
	return (
		<Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose} isCentered>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader mb={1}>
					<ModalCloseButton />
				</ModalHeader>
				<ModalBody>
					<Tabs variant="enclosed" isFitted>
						<TabList>
							<Tab>How To Play</Tab>
							<Tab>Controls</Tab>
						</TabList>
						<TabPanels>
							<TabPanel>
								<Text fontSize="xl" fontWeight="normal" mb={2}>
									Based on the letters provided to you, rearrange them to create a
									valid word. Try to make as many unique words as you can before
									the timer runs out!
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
					<Divider bg="black" h="0.1rem" mb={-2} />
				</ModalBody>
				<ModalFooter justifyContent="left" display="inline">
					<Link href="https://github.com/fe-i/ranagrams">
						<Flex flexDir="row" gap={2}>
							<BsGithub size={30} />
							<Text fontSize="md">Made by fe-i 🥩</Text>
						</Flex>
					</Link>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default HelpModal;
