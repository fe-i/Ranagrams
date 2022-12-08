import { Flex, Text, Button, Box, HStack } from "@chakra-ui/react";
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
				<HStack>
					{inputArray.map((_, i) => (
						<LetterBox
							key={i}
							letter={inputArray[i]}
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
					onClick={async () => {
						console.log(randomWord);
						const result = await isWord(randomWord);
						console.log(result);
					}}>
					Submit
				</Button>
				<HStack>
					{ltrArray.map((_, i) => (
						<LetterBox
							key={i}
							letter={ltrArray[i]}
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
