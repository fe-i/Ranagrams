import { Flex, Text, Button, HStack } from "@chakra-ui/react";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import LetterBox from "../../components/letterBox";
import useIsWord from "../../hooks/useIsWord";
import useRandomWord from "../../hooks/useRandomWord";

const About: NextPage = () => {
	const { isWord } = useIsWord();
	const { randomWord, getRandomWord } = useRandomWord();
	useEffect(() => {
		getRandomWord();
	}, []);

	const [points, setPoints] = useState(0);
	const [inputArray, setInputArray] = useState(new Array(6).fill(""));
	const [letterArray, setLetterArray] = useState(randomWord.split(""));

	return (
		<Layout title="Singleplayer">
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
							onClick={async () => {
								await setInputArray((prev) => {
									const temp = prev.slice();
									temp.splice(i, 1);
									return [...temp, ""];
								});
								await setLetterArray((prev) => {
									const temp = prev.slice();
									temp[temp.indexOf("")] = inputArray[i];
									return temp;
								});
							}}
						/>
					))}
				</HStack>
				<HStack>
					<Button
						disabled={inputArray.join("").length < 3}
						onClick={async () => {
							const finalWord = inputArray.join("");
							const result = await isWord(finalWord);
							result
								? setPoints(
										points +
											100 *
												Math.pow(
													2,
													finalWord.length - 3
												)
								  )
								: null;
							setInputArray(() => new Array(6).fill(""));
							setLetterArray(() => randomWord.split(""));
						}}>
						Submit
					</Button>
					<Button
						onClick={async () => {
							setInputArray(() => new Array(6).fill(""));
							setLetterArray(() =>
								randomWord.split("").sort(function () {
									return 0.5 - Math.random();
								})
							);
						}}>
						Shuffle
					</Button>
				</HStack>
				<HStack>
					{letterArray.map((_, i) => (
						<LetterBox
							key={i}
							letter={letterArray[i]}
							disabled={letterArray[i] === ""}
							onClick={async () => {
								await setInputArray((prev) => {
									const temp = prev.slice();
									temp[temp.indexOf("")] = letterArray[i];
									return temp;
								});
								await setLetterArray((prev) => {
									const temp = prev.slice();
									temp[i] = "";
									return temp;
								});
							}}
						/>
					))}
				</HStack>
			</Flex>
		</Layout>
	);
};

export default About;
