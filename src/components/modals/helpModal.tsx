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
	ListItem,
	HStack,
	Divider
} from "@chakra-ui/react";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import LetterBox from "../letterBox";

const HelpModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
	return (
		<Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose} isCentered>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader pb={1}>
					<Text fontSize="3xl" fontWeight="bold" textDecor="underline">
						How To Play
					</Text>
					<Text fontSize="xl" fontWeight="normal">
						Based on the letters provided to you, rearrange them to create a valid word.
						Try to make as many unique words as you can before the timer runs out!
					</Text>
				</ModalHeader>
				<ModalCloseButton />
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
				<ModalFooter justifyContent="left" display="inline">
					<Divider bg="black" h="0.1rem" mb={4} />
					<Link href="https://github.com/fe-i/ranagrams">
						<HStack>
							<BsGithub size={30} />
							<Text fontSize="md">Made by fe-i 🥩</Text>
						</HStack>
					</Link>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default HelpModal;
