import { Flex, Text, Button, HStack, useDisclosure } from "@chakra-ui/react";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import LetterBox from "../../components/letterBox";
import PopupModal from "../../components/popupModal";
import WordBoxModal from "../../components/wordBoxModal";
import useIsWord from "../../hooks/useIsWord";
import useRandomWord from "../../hooks/useRandomWord";

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
	const [inputArray, setInputArray] = useState(new Array(6).fill(""));
	const [letterArray, setLetterArray] = useState(new Array(6).fill(""));
	const [usedArray, setUsedArray] = useState(new Array());

	return (
		<Layout title="Singleplayer">
			<PopupModal
				isOpen={PisOpen}
				onClose={() => {
					setLetterArray(randomWord.split(""));
					PonClose();
				}}
				isReady={randomWord !== "potato"}
			/>
			<Flex
				alignItems="center"
				justifyContent="center"
				textAlign="center"
				flexDir="column"
				fontSize="xl"
				gap="1rem"
				h="100%"
				px={8}>
				<Text>Points: {points}</Text>
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
						if (result) {
							setPoints(
								points + 100 * Math.pow(2, finalWord.length - 3)
							);
							setUsedArray((prev) => {
								if (usedArray.includes(finalWord)) return prev;
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
					words={usedArray}
				/>
				<HStack>
					<Button onClick={WBonOpen}>Show Used Words</Button>
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
