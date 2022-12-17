import { Flex, Text, Button, HStack, Divider, useDisclosure, useToast } from "@chakra-ui/react";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { MdListAlt, MdOutlineTimer } from "react-icons/md";
import Layout from "../../components/layout";
import LetterButton from "../../components/letterButton";
import StartModal from "../../components/modals/startModal";
import EndModal from "../../components/modals/endModal";
import WordBoxModal from "../../components/modals/wordBoxModal";
import useIsWord from "../../hooks/useIsWord";
import useRandomWord from "../../hooks/useRandomWord";
import useTimer from "../../hooks/useTimer";
import useKeyboard from "../../hooks/useKeyboard";

const About: NextPage = () => {
	const { randomWord, hasWord, getRandomWord } = useRandomWord();
	const { isWord } = useIsWord();
	const {
		isOpen: SisOpen,
		onOpen: SonOpen,
		onClose: SonClose
	} = useDisclosure({
		defaultIsOpen: true
	});
	const { isOpen: WBisOpen, onOpen: WBonOpen, onClose: WBonClose } = useDisclosure();
	const [points, setPoints] = useState(0);
	const { time, isActive, resetTimer, toggleTimer } = useTimer(60);
	const [inputArray, setInputArray] = useState(new Array(6).fill(""));
	const [letterArray, setLetterArray] = useState(randomWord);
	const [foundArray, setFoundArray] = useState(new Array());
	const toastHook = useToast();
	const toast = (description: string, status: any) =>
		toastHook({
			description,
			status,
			duration: 3000,
			variant: "left-accent",
			position: "top-right",
			isClosable: true
		});

	useEffect(() => {
		getRandomWord();
	}, []);

	useKeyboard(
		async (e) => {
			if (!isActive && time !== 60) return;
			if (e.code === "Backspace" && inputArray[0] !== "") {
				const temp = inputArray.filter((letter) => letter !== "");
				const value = temp[temp.length - 1];
				setInputArray((prev) => {
					const temp = prev.slice();
					temp.splice(temp.indexOf(value), 1);
					return [...temp, ""];
				});
				setLetterArray((prev) => {
					const temp = prev.slice();
					temp[temp.indexOf("")] = value;
					return temp;
				});
			}
			if (e.code === "Enter" && inputArray.join("").length >= 3) {
				const finalWord = inputArray.join("");
				const result = await isWord(finalWord);
				if (result && !foundArray.includes(finalWord)) {
					setPoints(points + 100 * Math.pow(2, finalWord.length - 3));
					setFoundArray((prev) => {
						prev.push(finalWord);
						return prev;
					});
					toast(`${finalWord} (+${100 * Math.pow(2, finalWord.length - 3)})`, "success");
				} else if (foundArray.includes(finalWord)) toast("Word already found.", "warning");
				else toast("Invalid word.", "error");
				setInputArray(() => new Array(6).fill(""));
				setLetterArray(() => randomWord);
			}
			if (e.code === "Slash") {
				setInputArray(() => new Array(6).fill(""));
				setLetterArray(() =>
					randomWord.sort(() => {
						return 0.5 - Math.random();
					})
				);
			}
			if (!e.code.startsWith("Key")) return;
			const key = e.code.split("Key")[1]?.toLowerCase();
			if (letterArray.includes(key)) {
				setInputArray((prev) => {
					const temp = prev.slice();
					temp[temp.indexOf("")] = key;
					return temp;
				});
				setLetterArray((prev) => {
					const temp = prev.slice();
					temp[letterArray.indexOf(key)] = "";
					return temp;
				});
			}
		},
		[letterArray, setLetterArray, setInputArray]
	);

	return (
		<Layout title="Singleplayer">
			<StartModal
				isOpen={SisOpen}
				onClose={() => {
					setPoints(0);
					setInputArray(() => new Array(6).fill(""));
					setLetterArray(() => randomWord);
					setFoundArray(() => new Array());
					resetTimer();
					toggleTimer();
					SonClose();
				}}
				isReady={hasWord}
			/>
			<EndModal
				isOpen={!isActive && time === 0}
				words={foundArray}
				score={points}
				wordBoxOpen={WBonOpen} //TODO: CLOSE WORDBOX MODAL BEFORE POPUP APPEARS OR MAKE IT IN FRONT
				startOpen={() => {
					getRandomWord();
					SonOpen();
				}}
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
				<Button onClick={WBonOpen}>Show Found Words</Button>
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
				<Divider bg="black" h="0.1rem" />
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
					<Button
						disabled={!isActive || inputArray.join("").length < 3}
						onClick={async () => {
							const finalWord = inputArray.join("");
							const result = await isWord(finalWord);
							if (result && !foundArray.includes(finalWord)) {
								setPoints(points + 100 * Math.pow(2, finalWord.length - 3));
								setFoundArray((prev) => {
									prev.push(finalWord);
									return prev;
								});
								toast(
									`${finalWord} (+${100 * Math.pow(2, finalWord.length - 3)})`,
									"success"
								);
							} else if (foundArray.includes(finalWord))
								toast("Word already found.", "warning");
							else toast("Invalid word.", "error");
							setInputArray(() => new Array(6).fill(""));
							setLetterArray(() => randomWord);
						}}>
						Submit
					</Button>
				</HStack>
			</Flex>
		</Layout>
	);
};

export default About;
