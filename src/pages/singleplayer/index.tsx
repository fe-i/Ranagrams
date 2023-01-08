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

const Singleplayer: NextPage = () => {
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

	const add = (i: number) => {
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
	};

	const remove = (i: number) => {
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
	};

	const shuffle = () => {
		setInputArray(() => new Array(6).fill(""));
		setLetterArray(() =>
			randomWord.sort(() => {
				return 0.5 - Math.random();
			})
		);
	};

	const submit = async () => {
		const finalWord = inputArray.join("");
		const result = await isWord(finalWord);
		const score = 100 * Math.pow(2, finalWord.length - 2);
		if (result && !foundArray.includes(finalWord)) {
			setPoints(points + score);
			setFoundArray((prev) => {
				prev.push(finalWord);
				return prev;
			});
			toast(`${finalWord} (+${score.toLocaleString()})`, "success");
		} else if (foundArray.includes(finalWord)) toast("Word already found.", "warning");
		else toast("Invalid word.", "error");
		setInputArray(() => new Array(6).fill(""));
		setLetterArray(() => randomWord);
	};

	useEffect(() => {
		getRandomWord();
	}, []);

	useKeyboard(
		async (e) => {
			if (!isActive) return;
			if (e.code === "Backspace" && !!inputArray[0])
				remove(inputArray.filter((letter) => !!letter).length - 1);
			if (e.code === "Enter" && inputArray.filter((letter) => !!letter).length >= 3) submit();
			if (e.code === "Slash") shuffle();
			if (!e.code.startsWith("Key")) return;
			const key = e.code.split("Key")[1]?.toLowerCase();
			if (letterArray.includes(key)) add(letterArray.indexOf(key));
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
			<Flex flexDir="column" align="center" justify="center" fontSize="xl" p={6} gap={10}>
				<Button onClick={WBonOpen}>Show Found Words</Button>
				<Flex flexDir="row" align="center" gap={2}>
					<MdListAlt />
					<Text>{points.toLocaleString()} pts</Text>
					<MdOutlineTimer />
					<Text>{time}s</Text>
				</Flex>
				<Flex flexDir="row" gap={2}>
					{inputArray.map((_, i) => (
						<LetterButton
							key={i}
							letter={_}
							disabled={_ === ""}
							onClick={() => remove(i)}
						/>
					))}
				</Flex>
				<Divider bg="black" w={{ base: "20rem", md: "40rem" }} h="0.1rem" />
				<Flex flexDir="row" gap={2}>
					{letterArray.map((_, i) => (
						<LetterButton
							key={i}
							letter={_}
							disabled={_ === ""}
							onClick={() => add(i)}
						/>
					))}
				</Flex>
				<Flex flexDir="row" gap={2}>
					<Button onClick={shuffle}>Shuffle</Button>
					<Button
						disabled={!isActive || inputArray.filter((letter) => !!letter).length < 3}
						onClick={submit}>
						Submit
					</Button>
				</Flex>
			</Flex>
		</Layout>
	);
};

export default Singleplayer;
