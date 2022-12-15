import { useState } from "react";
import useIsWord from "./useIsWord";
import randomWords from "random-words";

const useRandomWord = () => {
	const [randomWord, setRandomWord] = useState("steaks".split(""));
	const { isWord } = useIsWord();
	const getRandomWord = async () => {
		const word = randomWords({ maxLength: 6, join: "" });
		(await isWord(word))
			? setRandomWord(
					word.split("").sort(() => {
						return 0.5 - Math.random();
					})
			  )
			: getRandomWord();
		console.log(randomWord);
	};
	return { randomWord, getRandomWord };
};

export default useRandomWord;
