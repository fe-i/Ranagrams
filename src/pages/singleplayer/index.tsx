import {
	Flex,
	Text,
	Button,
	HStack,
	Link,
	useDisclosure,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { MdListAlt, MdOutlineTimer } from "react-icons/md";
import EndModal from "../../components/endModal";
import Layout from "../../components/layout";
import LetterBox from "../../components/letterBox";
import PopupModal from "../../components/popupModal";
import WordBoxModal from "../../components/wordBoxModal";
import useIsWord from "../../hooks/useIsWord";
import useRandomWord from "../../hooks/useRandomWord";
import useTimer from "../../hooks/useTimer";

const About: NextPage = () => {
	const { isOpen: PisOpen, onClose: PonClose } = useDisclosure({
		defaultIsOpen: true,
	});
	const {
		isOpen: WBisOpen,
		onOpen: WBonOpen,
		onClose: WBonClose,
	} = useDisclosure();
	const { isWord } = useIsWord();
	const { randomWord, getRandomWord } = useRandomWord();
	useEffect(() => {
		getRandomWord();
	}, []);

	const [points, setPoints] = useState(0);
	const { time, isActive, toggle } = useTimer(60);
	const [inputArray, setInputArray] = useState(new Array(6).fill(""));
	const [letterArray, setLetterArray] = useState(new Array(6).fill(""));
	const [foundArray, setFoundArray] = useState(new Array());

	return (
		<Layout title="Singleplayer">
			<PopupModal
				isOpen={PisOpen}
				onClose={() => {
					setLetterArray(randomWord.split(""));
					toggle();
					PonClose();
				}}
				isReady={randomWord !== "potato"}
			/>
			<EndModal isOpen={!isActive && time === 0}>
				<Text>
					You created {foundArray.length} words and scored {points}{" "}
					points. View the words you found by clicking{" "}
					<Link textDecoration="underline" onClick={WBonOpen}>
						here
					</Link>
					.
				</Text>
			</EndModal>
			<Flex
				alignItems="center"
				justifyContent="center"
				textAlign="center"
				flexDir="column"
				fontSize="xl"
				gap="1rem"
				h="100%"
				px={8}>
				<HStack>
					<MdListAlt />
					<Text>{points}</Text>
					<MdOutlineTimer />
					<Text>{time}s</Text>
				</HStack>
				<HStack>
					{inputArray.map((_, i) => (
						<LetterBox
							key={i}
							letter={inputArray[i]}
							disabled={inputArray[i] === ""}
							onClick={() => {
								setInputArray((prev) => {
									const temp = prev.slice();
									temp.splice(i, 1);
									return [...temp, ""];
								});
								setLetterArray((prev) => {
									const temp = prev.slice();
									temp[temp.indexOf("")] = inputArray[i];
									return temp;
								});
							}}
						/>
					))}
				</HStack>
				<Button
					disabled={inputArray.join("").length < 3}
					onClick={async () => {
						const finalWord = inputArray.join("");
						const result = await isWord(finalWord);
						if (result && !foundArray.includes(finalWord)) {
							setPoints(
								points + 100 * Math.pow(2, finalWord.length - 3)
							);
							setFoundArray((prev) => {
								if (foundArray.includes(finalWord)) return prev; //TODO: it adds to array twice
								prev.push(finalWord);
								return prev;
							});
						}
						setInputArray(() => new Array(6).fill(""));
						setLetterArray(() => randomWord.split(""));
					}}>
					Submit
				</Button>
				<HStack>
					{letterArray.map((_, i) => (
						<LetterBox
							key={i}
							letter={letterArray[i]}
							disabled={letterArray[i] === ""}
							onClick={() => {
								setInputArray((prev) => {
									const temp = prev.slice();
									temp[temp.indexOf("")] = letterArray[i];
									return temp;
								});
								setLetterArray((prev) => {
									const temp = prev.slice();
									temp[i] = "";
									return temp;
								});
							}}
						/>
					))}
				</HStack>
				<WordBoxModal
					isOpen={WBisOpen}
					onClose={WBonClose}
					words={foundArray}
				/>
				<HStack>
					<Button onClick={WBonOpen}>Show Found Words</Button>
					<Button
						onClick={() => {
							setInputArray(() => new Array(6).fill(""));
							setLetterArray(() =>
								randomWord.split("").sort(() => {
									return 0.5 - Math.random();
								})
							);
						}}>
						Shuffle
					</Button>
				</HStack>
			</Flex>
		</Layout>
	);
};

export default About;
