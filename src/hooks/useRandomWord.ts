import { useState } from "react";
import { rword } from "rword";
import useIsWord from "./useIsWord";

rword.load("big");

const useRandomWord = () => {
	const [randomWord, setRandomWord] = useState(new Array(6).fill(""));
	const [hasWord, setHasWord] = useState(false);
	const { isWord } = useIsWord();

	const getRandomWord = async () => {
		const word = rword.generate(1, { length: 6 });
		if (await isWord(word)) {
			setRandomWord(
				word.split("").sort(() => {
					return 0.5 - Math.random();
				})
			);
			setHasWord(!hasWord);
		} else getRandomWord();
	};

	return { randomWord, hasWord, getRandomWord };
};

export default useRandomWord;
