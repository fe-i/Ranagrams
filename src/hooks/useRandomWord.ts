import { useState } from "react";
import useIsWord from "./useIsWord";

const useRandomWord = () => {
	const [randomWord, setRandomWord] = useState("potato");
	const { isWord } = useIsWord();
	const getRandomWord = () => {
		fetch("https://random-word-api.herokuapp.com/word?length=6")
			.then((response) => response.json())
			.then(async (data) => {
				(await isWord(data[0]))
					? setRandomWord(
							data[0]
								.split("")
								.sort(() => {
									return 0.5 - Math.random();
								})
								.join("")
					  )
					: getRandomWord();
			});
	};
	return { randomWord, getRandomWord };
};

export default useRandomWord;
