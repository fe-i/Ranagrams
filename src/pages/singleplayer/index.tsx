import { Flex, Text, Button, Box, HStack } from "@chakra-ui/react";
import { NextPage } from "next";
import { useEffect } from "react";
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

	const inputArray = new Array(6).fill("");
	const letterArray = randomWord.split("");

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
						<LetterBox key={i} letter={inputArray[i]} />
					))}
				</HStack>
				<Button
					onClick={async () => {
						const result = await isWord("heqwwwllo");
						console.log(result);
					}}>
					test
				</Button>
				<Button
					onClick={async () => {
						console.log(randomWord);
						const result = await isWord(randomWord);
						console.log(result);
					}}>
					test
				</Button>
				<HStack>
					{letterArray.map((_, i) => (
						<LetterBox key={i} letter={letterArray[i]} />
					))}
				</HStack>
			</Flex>
		</Layout>
	);
};

export default About;
