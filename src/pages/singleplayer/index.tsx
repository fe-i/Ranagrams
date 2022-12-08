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
	const [ltrArray, setLtrArray] = useState(randomWord.split(""));

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
				<Text>points: {points}</Text>
				<HStack>
					{inputArray.map((_, i) => (
						<LetterBox
							key={i}
							letter={inputArray[i]}
							disabled={inputArray[i] === ""}
							onClick={() => {
								ltrArray[ltrArray.indexOf("")] = inputArray[i];
								inputArray[i] = "";
								setInputArray(inputArray);
								setLtrArray(ltrArray);
							}}
						/>
					))}
				</HStack>
				<Button
					disabled={inputArray.join("").length < 3}
					onClick={async () => {
						const finalWord = inputArray.join("");
						const result = await isWord(finalWord);
						result
							? setPoints(
									points +
										50 * Math.pow(2, finalWord.length - 3)
							  )
							: null;
						setInputArray(new Array(6).fill(""));
						setLtrArray(randomWord.split(""));
					}}>
					Submit
				</Button>
				<HStack>
					{ltrArray.map((_, i) => (
						<LetterBox
							key={i}
							letter={ltrArray[i]}
							disabled={inputArray[i] === ""}
							onClick={() => {
								inputArray[inputArray.indexOf("")] =
									ltrArray[i];
								ltrArray[i] = "";
								setInputArray(inputArray);
								setLtrArray(ltrArray);
								console.log(inputArray);
								console.log(ltrArray);
							}}
						/>
					))}
				</HStack>
			</Flex>
		</Layout>
	);
};

export default About;
