import { Flex, Text, Button, HStack, Link, useDisclosure, useToast } from "@chakra-ui/react";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { MdListAlt, MdOutlineTimer } from "react-icons/md";
import EndModal from "../../components/modals/endModal";
import Layout from "../../components/layout";
import LetterButton from "../../components/letterButton";
import StartModal from "../../components/modals/startModal";
import WordBoxModal from "../../components/modals/wordBoxModal";
import useIsWord from "../../hooks/useIsWord";
import useRandomWord from "../../hooks/useRandomWord";
import useTimer from "../../hooks/useTimer";

const About: NextPage = () => {
	const { randomWord, hasWord, getRandomWord } = useRandomWord();
	const { isWord } = useIsWord();
	const { isOpen: SisOpen, onClose: SonClose } = useDisclosure({
		defaultIsOpen: true
	});
	const { isOpen: WBisOpen, onOpen: WBonOpen, onClose: WBonClose } = useDisclosure();
	const [points, setPoints] = useState(0);
	const { time, isActive, toggle } = useTimer(3);
	const [inputArray, setInputArray] = useState(new Array(6).fill(""));
	const [letterArray, setLetterArray] = useState(new Array(6).fill(""));
	const [foundArray, setFoundArray] = useState(new Array());
	const toast = useToast();

	useEffect(() => {
		getRandomWord();
	}, []);

	return (
		<Layout title="Singleplayer">
			<StartModal
				isOpen={SisOpen}
				onClose={() => {
					setLetterArray(randomWord);
					toggle();
					SonClose();
				}}
				isReady={hasWord}
			/>
			<EndModal
				isOpen={!isActive && time === 0}
				words={foundArray}
				score={points}
				wordBoxOpen={WBonOpen}
			/>
			<WordBoxModal isOpen={WBisOpen} onClose={WBonClose} words={foundArray} />
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
						<LetterButton
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
							setPoints(points + 100 * Math.pow(2, finalWord.length - 3));
							setFoundArray((prev) => {
								prev.push(finalWord);
								return prev;
							});
							toast({
								description: `${finalWord} (+${
									100 * Math.pow(2, finalWord.length - 3)
								})`,
								status: "success",
								duration: 3000,
								variant: "left-accent",
								isClosable: true
							});
						} else if (foundArray.includes(finalWord)) {
							toast({
								description: "Word already found.",
								status: "warning",
								duration: 3000,
								variant: "left-accent",
								isClosable: true
							});
						} else {
							toast({
								description: "Invalid word.",
								status: "error",
								duration: 3000,
								variant: "left-accent",
								isClosable: true
							});
						}
						setInputArray(() => new Array(6).fill(""));
						setLetterArray(() => randomWord);
					}}>
					Submit
				</Button>
				<HStack>
					{letterArray.map((_, i) => (
						<LetterButton
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
				<HStack>
					<Button onClick={WBonOpen}>Show Found Words</Button>
					<Button
						onClick={() => {
							setInputArray(() => new Array(6).fill(""));
							setLetterArray(() =>
								randomWord.sort(() => {
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
