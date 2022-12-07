import { Box, Button } from "@chakra-ui/react";
import { NextPage } from "next";
import { useEffect } from "react";
import Layout from "../../components/layout";
import useIsWord from "../../hooks/useIsWord";
import useRandomWord from "../../hooks/useRandomWord";

const About: NextPage = () => {
	const { isWord } = useIsWord();
	const { randomWord, getRandomWord } = useRandomWord();
	useEffect(() => {
		getRandomWord();
	}, []);
	return (
		<Layout title="Singleplayer">
			<Box textAlign="center" py={10} px={6}>
				Here
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
			</Box>
		</Layout>
	);
};

export default About;
